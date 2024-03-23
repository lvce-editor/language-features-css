import * as CssTabCompletion from '../src/parts/CssTabCompletion/CssTabCompletion.js'

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
