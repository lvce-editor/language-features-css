import * as CssTabCompletionProperty from '../CssTabCompletionProperty/CssTabCompletionProperty.ts'
import * as TokenType from '../CssTokenType/CssTokenType.ts'
import * as GetTokenAtOffset from '../GetTokenAtOffset/GetTokenAtOffset.ts'
import { tokenizeCss } from '../TokenizeCss/TokenizeCss.ts'

/**
 * @param {string} text
 * @param {number} offset
 */
export const cssTabCompletion = (text, offset) => {
  // console.time('tokenize')
  const tokens = tokenizeCss(text)
  // console.timeEnd('tokenize')
  // console.time('getTokenAtOffset')
  const tokenAtOffset = GetTokenAtOffset.getTokenAtOffset(tokens, offset)
  // console.timeEnd('getTokenAtOffset')
  switch (tokenAtOffset.type) {
    case TokenType.PropertyName:
      return CssTabCompletionProperty.getTabCompletion(text, offset)
    case TokenType.PropertyValue: {
      if (text[offset - 1] !== '!') {
        return undefined
      }
      if (/^important\b/i.test(text.slice(offset))) {
        return undefined
      }
      return {
        deleted: 1,
        inserted: '!important$0',
        offset: offset - 1,
        type: /* Snippet */ 2,
      }
    }
    default:
      return undefined
  }
}
