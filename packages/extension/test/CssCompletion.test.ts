import { expect, test } from '@jest/globals'
import { cssCompletion } from '../src/parts/CssCompletion/CssCompletion.ts'
import { cssTabCompletion } from '../src/parts/CssTabCompletion/CssTabCompletion.ts'
import * as ExtensionHostCompletionProviderCss from '../src/parts/ExtensionHost/ExtensionHostCompletionProviderCss.ts'

const blankIndent = '  '
const screenshotCss = `:root {
  --red: red;
}
h1 {
  color: var(--red);
${blankIndent}
}
.test {
  grid-template-columns: 1fr min(1024px, 100%) 1fr;
}`

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

test('property completions in screenshot declaration context', () => {
  const offset = screenshotCss.indexOf('\n  \n') + 3
  const labels = cssCompletion(screenshotCss, offset).map((item) => item.label)
  expect(labels).toContain('display')
  expect(labels).toContain('background-color')
})

test.each([
  ['after opening brace', 'h1 {', 4],
  ['after completed declaration', 'h1 {\n  color: red;', 18],
  ['after property prefix', 'h1 {\n  displ', 13],
])('%s offers property names', (_name, text, offset) => {
  expect(cssCompletion(text, offset).map((item) => item.label)).toContain(
    'display',
  )
})

test('extension completion provider forwards the document and offset', async () => {
  const text = 'h1 {\n  displ'
  const completions =
    await ExtensionHostCompletionProviderCss.provideCompletions(
      { text } as any,
      text.length,
    )
  expect(completions.map((item) => item.label)).toContain('display')
})

test.each(['h1', 'h1 {\n  color: red'])(
  '%s does not suggest properties outside declarations',
  (text) => {
    const labels = cssCompletion(text, text.length).map((item) => item.label)
    expect(labels).not.toContain('display')
  },
)

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
