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
    default:
      return undefined
  }
}
