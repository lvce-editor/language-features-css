import type { CssToken } from '../CssToken/CssToken.ts'
import * as TokenType from '../CssTokenType/CssTokenType.ts'
import * as TokenizerState from '../TokenizerState/TokenizerState.ts'

const RE_SELECTOR = /^[\.a-zA-Z\d]+/
const RE_WHITESPACE = /^[ \t]+/
const RE_CURLY_OPEN = /^{/
const RE_CURLY_CLOSE = /^}/
const RE_PROPERTY_NAME = /^[a-zA-Z\-\d]+/
const RE_COLON = /^:/
const RE_PROPERTY_VALUE = /^[^\n;]+/
const RE_SEMICOLON = /^;/
const RE_SELECTOR_ID = /^#[\w\-\_]+/
const RE_NEW_LINE = /^\n/

export const tokenizeCss = (text: string) => {
  let next
  let index = 0
  let token: number
  let state = TokenizerState.TopLevelContent
  const tokens: CssToken[] = []
  while (index < text.length) {
    const part = text.slice(index)
    switch (state) {
      case TokenizerState.TopLevelContent:
        if ((next = part.match(RE_SELECTOR))) {
          token = TokenType.Selector
          state = TokenizerState.AfterSelector
        } else if ((next = part.match(RE_SELECTOR_ID))) {
          token = TokenType.Selector
          state = TokenizerState.AfterSelector
        } else if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = TokenizerState.TopLevelContent
        } else if ((next = part.match(RE_NEW_LINE))) {
          token = TokenType.NewLine
          state = TokenizerState.TopLevelContent
        } else {
          throw new Error('no')
        }
        break
      case TokenizerState.AfterSelector:
        if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = TokenizerState.AfterSelector
        } else if ((next = part.match(RE_CURLY_OPEN))) {
          token = TokenType.CurlyOpen
          state = TokenizerState.InsideSelector
        } else if ((next = part.match(RE_SELECTOR))) {
          token = TokenType.Selector
          state = TokenizerState.AfterSelector
        } else if ((next = part.match(RE_SELECTOR_ID))) {
          token = TokenType.Selector
          state = TokenizerState.AfterSelector
        } else if ((next = part.match(RE_CURLY_CLOSE))) {
          token = TokenType.Text
          state = TokenizerState.AfterSelector
        } else {
          part // ?
          throw new Error('no')
        }
        break
      case TokenizerState.InsideSelector:
        if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = TokenizerState.InsideSelector
        } else if ((next = part.match(RE_PROPERTY_NAME))) {
          token = TokenType.PropertyName
          state = TokenizerState.AfterPropertyName
        } else if ((next = part.match(RE_CURLY_CLOSE))) {
          token = TokenType.CurlyClose
          state = TokenizerState.TopLevelContent
        } else if ((next = part.match(RE_NEW_LINE))) {
          token = TokenType.NewLine
        } else {
          throw new Error('no')
        }
        break
      case TokenizerState.AfterPropertyName:
        if ((next = part.match(RE_COLON))) {
          token = TokenType.PropertyColon
          state = TokenizerState.AfterPropertyNameAfterColon
        } else if ((next = part.match(RE_NEW_LINE))) {
          token = TokenType.NewLine
          state = TokenizerState.InsideSelector
        } else if ((next = part.match(RE_CURLY_CLOSE))) {
          token = TokenType.CurlyClose
          state = TokenizerState.TopLevelContent
        } else if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = TokenizerState.AfterPropertyName
        } else {
          part // ?
          throw new Error('no')
        }
        break
      case TokenizerState.AfterPropertyNameAfterColon:
        if ((next = part.match(RE_PROPERTY_VALUE))) {
          token = TokenType.PropertyValue
          state = TokenizerState.AfterPropertyValue
        } else if ((next = part.match(RE_NEW_LINE))) {
          token = TokenType.NewLine
          state = TokenizerState.InsideSelector
        } else {
          throw new Error('no')
        }
        break
      case TokenizerState.AfterPropertyValue:
        if ((next = part.match(RE_SEMICOLON))) {
          token = TokenType.PropertySemicolon
          state = TokenizerState.InsideSelector
        } else if ((next = part.match(RE_NEW_LINE))) {
          token = TokenType.NewLine
          state = TokenizerState.InsideSelector
        } else {
          throw new Error('no')
        }
        break
      default:
        throw new Error('no')
    }

    index += next[0].length
    tokens.push({ type: token, offset: index })
  }
  return tokens
}
