import { expect, test } from '@jest/globals'
import * as CssCompletion from '../src/parts/CssCompletion/CssCompletion.ts'

test('completion', () => {
  const text = `h1 {
  displ`

  expect(CssCompletion.cssCompletion(text, text.length)).toContainEqual({
    kind: 1,
    label: 'display',
    snippet: 'display: ',
  })
})
