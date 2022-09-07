import { cssTabCompletion } from '../src/parts/TabCompletion/TabCompletion.js'

const expectTabCompletion = (text) => ({
  toEqual: (expectedText) => {
    const cursorIndex = text.indexOf('|')
    text = text.replace('|', '')
    const result = cssTabCompletion(text, cursorIndex)
    const resultText =
      result === undefined
        ? result
        : text.slice(0, result.offset) +
          result.inserted.replace('$0', '|') +
          text.slice(result.offset + result.deleted)
    expect(resultText).toEqual(expectedText)
  },
})

test.skip('basic', () => {
  expectTabCompletion(`h1 {
  m|
}`).toEqual(`h1 {
  margin: |
}`)
})
