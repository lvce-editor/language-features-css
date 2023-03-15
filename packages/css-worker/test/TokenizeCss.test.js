import { tokenizeCss } from '../src/parts/TokenizeCss/TokenizeCss.js'
import * as TokenType from '../src/parts/CssTokenType/CssTokenType.js'

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
    TokenType.NewLine,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.PropertyColon,
    TokenType.PropertyValue,
    TokenType.PropertySemicolon,
    TokenType.NewLine,
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
    TokenType.NewLine,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.NewLine,
    TokenType.CurlyClose
  )
})

test('multiple class selectors', () => {
  expectTokenize(`.class.class.class {}`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.CurlyOpen,
    TokenType.CurlyClose
  )
})

test('unfinished second property name', () => {
  expectTokenize(`h1 {
  font-size: 24px;
  f
}`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.CurlyOpen,
    TokenType.NewLine,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.PropertyColon,
    TokenType.PropertyValue,
    TokenType.PropertySemicolon,
    TokenType.NewLine,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.NewLine,
    TokenType.CurlyClose
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
    TokenType.NewLine,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.PropertyColon,
    // TokenType.Whitespace,
    TokenType.PropertyValue,
    TokenType.PropertySemicolon,
    TokenType.NewLine,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.NewLine,
    TokenType.CurlyClose
  )
})

test('class selector', () => {
  expectTokenize(`.Editor {}`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.CurlyOpen,
    TokenType.CurlyClose
  )
})

test('class selector and abbreviation', () => {
  expectTokenize(`.box {
  h100
}`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.CurlyOpen,
    TokenType.NewLine,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.NewLine,
    TokenType.CurlyClose
  )
})

test('id selector', () => {
  expectTokenize(`#a {}`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.CurlyOpen,
    TokenType.CurlyClose
  )
})

test('curly bracket directly after selector', () => {
  expectTokenize(`.box{`).toEqual(TokenType.Selector, TokenType.CurlyOpen)
})

test('id and class selector', () => {
  expectTokenize(`#id.class`).toEqual(TokenType.Selector, TokenType.Selector)
})

test('unfinished property', () => {
  expectTokenize(`h1 {
  display
  font-size: 20px;
}`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.CurlyOpen,
    TokenType.NewLine,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.NewLine,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.PropertyColon,
    TokenType.PropertyValue,
    TokenType.PropertySemicolon,
    TokenType.NewLine,
    TokenType.CurlyClose
  )
})

test('unfinished property with colon', () => {
  expectTokenize(`h1 {
  display:
  font-size: 20px;
}`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.CurlyOpen,
    TokenType.NewLine,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.PropertyColon,
    TokenType.NewLine,
    TokenType.Whitespace,
    TokenType.PropertyName,
    TokenType.PropertyColon,
    TokenType.PropertyValue,
    TokenType.PropertySemicolon,
    TokenType.NewLine,
    TokenType.CurlyClose
  )
})

test('stray closing curly bracket', () => {
  expectTokenize(`h1 }`).toEqual(
    TokenType.Selector,
    TokenType.Whitespace,
    TokenType.Text
  )
})
