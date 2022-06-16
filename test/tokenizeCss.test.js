import { tokenizeCss, TokenType } from '../src/parts/Tokenize/tokenizeCss.js'

const expectTokenize = (text) => ({
  toEqual: (...tokens) => {
    const result = tokenizeCss(text)
    expect(result.map((token) => token.type)).toEqual(tokens)
  },
})

test('selector and single property', () => {
  expectTokenize(`h1 {
  text-decoration: none;
}`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.CurlyOpen,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.PropertyColon,
    TokenType.PropertyValue,
    TokenType.PropertySemicolon,
    TokenType.Whitespace,
    TokenType.CurlyClose
  )
})

test('unfinished property name', () => {
  expectTokenize(`h1 {
  t
}`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.CurlyOpen,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.Whitespace,
    TokenType.CurlyClose
  )
})

test('unfinished second property name', () => {
  expectTokenize(`h1 {\n  font-size: 24px;\n  f \n}
`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.CurlyOpen,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.PropertyColon,
    TokenType.PropertyValue,
    TokenType.PropertySemicolon,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.Whitespace,
    TokenType.CurlyClose,
    TokenType.Whitespace
  )
})

test('partial', () => {
  expectTokenize(`h1 {
  color: red;
  h10
}`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.CurlyOpen,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.PropertyColon,
    // TokenType.Whitespace,
    TokenType.PropertyValue,
    TokenType.PropertySemicolon,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.Whitespace,
    TokenType.CurlyClose
  )
})
