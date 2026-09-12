import { expect, test } from '@jest/globals'
import { cssCompletion } from '../src/parts/CssCompletion/CssCompletion.ts'
import { cssTabCompletion } from '../src/parts/CssTabCompletion/CssTabCompletion.ts'

test.each([
  "@import 'tailwindcss'",
  "@import 'tailwindcss';",
  '@import url("theme.css") screen;',
])('completions after %s', (prefix) => {
  const text = `${prefix}\n\nbody {\n  backg\n}`
  const offset = text.indexOf('backg') + 5
  const labels = cssCompletion(text, offset).map((item) => item.label)
  expect(labels).toContain('background')
  expect(labels).toContain('background-color')
  const tabText = text.replace('backg', 'bg')
  expect(cssTabCompletion(tabText, offset - 3)).toEqual({
    deleted: 2,
    inserted: 'background: $0;',
    offset: offset - 5,
    type: 2,
  })
})

test('completion', () => {
  const text = `h1 {
  displ`
  expect(cssCompletion(text, text.length)).toContainEqual({
    kind: 1,
    label: 'display',
    snippet: 'display: ',
  })
})
