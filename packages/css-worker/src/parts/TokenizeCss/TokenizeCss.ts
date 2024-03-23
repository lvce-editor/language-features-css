import * as TokenType from '../CssTokenType/CssTokenType.ts'

const State = {
  TopLevelContent: 1,
  AfterSelector: 2,
  InsideSelector: 3,
  AfterPropertyName: 4,
  AfterPropertyNameAfterColon: 5,
  AfterPropertyValue: 6,
}

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

/**
 * @param {string} text
 */
export const tokenizeCss = (text) => {
  let next
  let index = 0
  let token
  let state = State.TopLevelContent
  const tokens: any[] = []
  while (index < text.length) {
    const part = text.slice(index)
    switch (state) {
      case State.TopLevelContent:
        if ((next = part.match(RE_SELECTOR))) {
          token = TokenType.Selector
          state = State.AfterSelector
        } else if ((next = part.match(RE_SELECTOR_ID))) {
          token = TokenType.Selector
          state = State.AfterSelector
        } else if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = State.TopLevelContent
        } else if ((next = part.match(RE_NEW_LINE))) {
          token = TokenType.NewLine
          state = State.TopLevelContent
        } else {
          throw new Error('no')
        }
        break
      case State.AfterSelector:
        if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = State.AfterSelector
        } else if ((next = part.match(RE_CURLY_OPEN))) {
          token = TokenType.CurlyOpen
          state = State.InsideSelector
        } else if ((next = part.match(RE_SELECTOR))) {
          token = TokenType.Selector
          state = State.AfterSelector
        } else if ((next = part.match(RE_SELECTOR_ID))) {
          token = TokenType.Selector
          state = State.AfterSelector
        } else if ((next = part.match(RE_CURLY_CLOSE))) {
          token = TokenType.Text
          state = State.AfterSelector
        } else {
          part // ?
          throw new Error('no')
        }
        break
      case State.InsideSelector:
        if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = State.InsideSelector
        } else if ((next = part.match(RE_PROPERTY_NAME))) {
          token = TokenType.PropertyName
          state = State.AfterPropertyName
        } else if ((next = part.match(RE_CURLY_CLOSE))) {
          token = TokenType.CurlyClose
          state = State.TopLevelContent
        } else if ((next = part.match(RE_NEW_LINE))) {
          token = TokenType.NewLine
        } else {
          throw new Error('no')
        }
        break
      case State.AfterPropertyName:
        if ((next = part.match(RE_COLON))) {
          token = TokenType.PropertyColon
          state = State.AfterPropertyNameAfterColon
        } else if ((next = part.match(RE_NEW_LINE))) {
          token = TokenType.NewLine
          state = State.InsideSelector
        } else if ((next = part.match(RE_CURLY_CLOSE))) {
          token = TokenType.CurlyClose
          state = State.TopLevelContent
        } else if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = State.AfterPropertyName
        } else {
          part // ?
          throw new Error('no')
        }
        break
      case State.AfterPropertyNameAfterColon:
        if ((next = part.match(RE_PROPERTY_VALUE))) {
          token = TokenType.PropertyValue
          state = State.AfterPropertyValue
        } else if ((next = part.match(RE_NEW_LINE))) {
          token = TokenType.NewLine
          state = State.InsideSelector
        } else {
          throw new Error('no')
        }
        break
      case State.AfterPropertyValue:
        if ((next = part.match(RE_SEMICOLON))) {
          token = TokenType.PropertySemicolon
          state = State.InsideSelector
        } else if ((next = part.match(RE_NEW_LINE))) {
          token = TokenType.NewLine
          state = State.InsideSelector
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
