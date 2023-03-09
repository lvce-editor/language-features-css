import * as CssTabCompletionProperty from '../CssTabCompletionProperty/CssTabCompletionProperty.js'
import * as TokenType from '../CssTokenType/CssTokenType.js'
import * as GetTokenAtOffset from '../GetTokenAtOffset/GetTokenAtOffset.js'
import { tokenizeCss } from '../TokenizeCss/TokenizeCss.js'

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
      return CssTabCompletionProperty.getTabcompletion(text, offset)
    default:
      return undefined
  }
}
