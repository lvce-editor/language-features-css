import type { CssToken } from '../CssToken/CssToken.ts'

export const getTokenAtOffset = (
  tokens: CssToken[],
  offset: number
): CssToken => {
  // TODO binary search
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if (token.offset >= offset) {
      if (token.offset === offset) {
        return token
      }
      return tokens[i - 1]
    }
  }
  return tokens[tokens.length - 1]
}
