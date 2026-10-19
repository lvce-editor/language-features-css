import { expect, test } from '@jest/globals'
import { getReferences } from '../src/parts/CssDefinition/CssDefinition.ts'

const getReferencesAt = (text: string, name: string, occurrence = 0) => {
  let offset = -1
  let from = 0
  for (let index = 0; index <= occurrence; index++) {
    offset = text.indexOf(name, from)
    from = offset + name.length
  }
  return getReferences('file:///test.css', text, offset + name.length - 1)
}

test('returns declarations and var() uses when invoked from a declaration', () => {
  const text =
    ':root { --color: red; } h1 { color: var(--color, blue); } h2 { color: var(--color); }'
  const references = getReferencesAt(text, '--color')

  expect(
    references.map(({ endOffset, startOffset }) =>
      text.slice(startOffset, endOffset),
    ),
  ).toEqual(['--color', '--color', '--color'])
})

test('returns the same references when invoked from a use', () => {
  const text = ':root { --color: red; } h1 { color: var(--color); }'
  expect(getReferencesAt(text, '--color', 1)).toHaveLength(2)
})

test('ignores comments, strings, and similarly named properties', () => {
  const text =
    '/* --color: red; */ .a { --color: red; --color-dark: black; content: "var(--color)"; } h1 { color: var(--color); }'
  const references = getReferencesAt(text, '--color', 4)

  expect(references.map(({ startOffset }) => startOffset)).toEqual([
    text.indexOf('--color: red', text.indexOf('*/')),
    text.lastIndexOf('--color)'),
  ])
})

test('returns no results for an undeclared or invalid symbol position', () => {
  expect(
    getReferencesAt('h1 { color: var(--missing); }', '--missing'),
  ).toHaveLength(1)
  expect(
    getReferences('file:///test.css', ':root { --color: red; }', -1),
  ).toEqual([])
  const incompleteCss = 'h1 { color: var(--color'
  expect(
    getReferences('file:///test.css', incompleteCss, incompleteCss.length),
  ).toHaveLength(1)
})

test('uses edited document contents for updated references', () => {
  const text = ':root { --color: blue; } h1 { color: var(--color); }'
  expect(getReferencesAt(text, '--color')).toHaveLength(2)
})
