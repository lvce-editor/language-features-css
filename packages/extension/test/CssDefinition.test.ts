import { expect, test } from '@jest/globals'
import { getDefinition } from '../src/parts/CssDefinition/CssDefinition.ts'

const getReferenceDefinition = (text: string, name: string, occurrence = 0) => {
  let offset = -1
  let from = 0
  for (let index = 0; index <= occurrence; index++) {
    offset = text.indexOf(name, from)
    from = offset + name.length
  }
  return getDefinition('file:///test.css', text, offset + name.length - 1)
}

test('finds a custom property declaration in the same file', () => {
  const text = ':root {\n  --color: red;\n}\nh1 { color: var(--color); }'
  const result = getReferenceDefinition(text, '--color', 1)
  const startOffset = text.indexOf('--color')

  expect(result).toEqual({
    endOffset: startOffset + '--color'.length,
    startOffset,
    uri: 'file:///test.css',
  })
})

test('requires an exact custom property name', () => {
  const text =
    '.a { --color: red; } .b { --color-dark: black; } h1 { color: var(--color); }'
  expect(getReferenceDefinition(text, '--color', 2)?.startOffset).toBe(
    text.indexOf('--color:'),
  )
})

test('returns no definition when the variable is undeclared', () => {
  expect(
    getReferenceDefinition('h1 { color: var(--missing); }', '--missing'),
  ).toBeUndefined()
})

test('supports cursor positions at both ends of the variable name', () => {
  const text = ':root { --color: red; } h1 { color: var(--color); }'
  const referenceStart = text.lastIndexOf('--color')
  const declarationStart = text.indexOf('--color')
  expect(getDefinition('file:///test.css', text, referenceStart)).toEqual({
    endOffset: declarationStart + '--color'.length,
    startOffset: declarationStart,
    uri: 'file:///test.css',
  })
  expect(
    getDefinition('file:///test.css', text, referenceStart + '--color'.length),
  ).toEqual({
    endOffset: declarationStart + '--color'.length,
    startOffset: declarationStart,
    uri: 'file:///test.css',
  })
})

test('ignores declarations and references in comments and strings', () => {
  const text =
    '/* --color: red; */ .a { content: "var(--color)"; } h1 { color: var(--color); }'
  expect(getReferenceDefinition(text, '--color', 1)).toBeUndefined()
})

test('uses the first matching declaration when a name is declared more than once', () => {
  const text =
    '.a { --color: red; } .b { --color: blue; } h1 { color: var(--color); }'
  expect(getReferenceDefinition(text, '--color', 2)?.startOffset).toBe(
    text.indexOf('--color:'),
  )
})
