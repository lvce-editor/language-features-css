import { describe, expect, test } from '@jest/globals'
import { provideHover } from '../src/parts/ExtensionHost/ExtensionHostHoverProviderCss.ts'

describe('css hover provider', () => {
  test('returns documentation for a hyphenated declaration property', () => {
    const text = 'h1 {\n  grid-template-columns: 1fr;\n}'
    expect(
      provideHover({ text }, text.indexOf('template') + 2)?.documentation,
    ).toContain('track sizing')
  })

  test.each([
    ['selector', 'color { color: red; }', 1],
    ['value', 'h1 { color: red; }', 14],
    ['comment', 'h1 { /* color */ width: 1px; }', 11],
    ['custom property', 'h1 { --custom: red; }', 7],
    ['unknown property', 'h1 { unknown-property: red; }', 8],
  ])('does not return docs over a %s', (_name, text, offset) => {
    expect(provideHover({ text }, offset)).toBeUndefined()
  })

  test('handles incomplete declarations', () => {
    expect(() => provideHover({ text: 'h1 { color' }, 8)).not.toThrow()
    expect(provideHover({ text: 'h1 { color' }, 8)).toBeUndefined()
  })
})
