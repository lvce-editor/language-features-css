import { test, expect } from '@jest/globals'
import * as CssTabCompletion from '../src/parts/CssTabCompletion/CssTabCompletion.ts'

const expectTabCompletion = (text) => ({
  toEqual: (expectedText) => {
    const cursorIndex = text.indexOf('|')
    text = text.replace('|', '')
    const result = CssTabCompletion.cssTabCompletion(text, cursorIndex)
    const resultText =
      result === undefined
        ? result
        : text.slice(0, result.offset) +
          result.inserted.replace('$0', '|') +
          text.slice(result.offset + result.deleted)
    expect(resultText).toEqual(expectedText)
  },
})

test('basic', () => {
  expectTabCompletion(`h1 {
  m|
}`).toEqual(`h1 {
  margin: |;
}`)
})

test('important declaration value', () => {
  expectTabCompletion(`h1 {
  color: red !|
}`).toEqual(`h1 {
  color: red !important|
}`)
})

test('important declaration value preserves semicolon', () => {
  expectTabCompletion(`h1 {
  color: red !|;
}`).toEqual(`h1 {
  color: red !important|;
}`)
})

test('does not duplicate an existing important keyword', () => {
  expectTabCompletion(`h1 {
  color: red !|important;
}`).toEqual(undefined)
})

test('does not complete an exclamation mark outside a declaration value', () => {
  expectTabCompletion(`h1| {
}`).toEqual(undefined)
})
