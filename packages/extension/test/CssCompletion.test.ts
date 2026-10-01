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

test('display value completions', () => {
  const text = `h1 {\n  display: \n}`
  const completions = cssCompletion(text, text.indexOf('\n}'))
  const labels = completions.map((item) => item.label)

  expect(labels).toEqual([
    'none',
    'contents',
    'inline',
    'inline-block',
    'flex',
    'inline-flex',
    'grid',
    'inline-grid',
    'block',
    'flow-root',
    'list-item',
    'table',
    'inline-table',
    'table-row-group',
    'table-header-group',
    'table-footer-group',
    'table-row',
    'table-cell',
    'table-column-group',
    'table-column',
    'table-caption',
    'ruby',
    'ruby-base',
    'ruby-text',
    'ruby-base-container',
    'ruby-text-container',
    'run-in',
  ])
  expect(new Set(labels).size).toBe(labels.length)
  expect(completions.every((item) => item.kind === 2)).toBe(true)
  expect(completions.map((item) => item.snippet)).toEqual(
    labels.map((label) => `${label};`),
  )
})

test('partial display value completions', () => {
  const text = `h1 {\n  display: in\n}`
  const completions = cssCompletion(text, text.indexOf('\n}'))
  const labels = completions.map((item) => item.label)

  expect(labels).toContain('inline-block')
  expect(labels).toContain('inline-flex')
  expect(labels).toContain('inline-grid')
  expect(labels).not.toContain('display')
})
