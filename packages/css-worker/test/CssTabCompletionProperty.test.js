import * as CssTabCompletionProperty from '../src/parts/CssTabCompletionProperty/CssTabCompletionProperty.js'

test('getTabCompletion - width', () => {
  expect(
    CssTabCompletionProperty.getTabCompletion(
      `h1 {
  w100
}`,
      11
    )
  ).toMatchObject({ inserted: 'width: 100px;' })
})

test('getTabCompletion - height', () => {
  expect(
    CssTabCompletionProperty.getTabCompletion(
      `h1 {
  h100
}`,
      11
    )
  ).toMatchObject({ inserted: 'height: 100px;' })
})

test('getTabCompletion - no matching word', () => {
  expect(
    CssTabCompletionProperty.getTabCompletion(
      `h1 {
  q
}`,
      8
    )
  ).toBeUndefined()
})
