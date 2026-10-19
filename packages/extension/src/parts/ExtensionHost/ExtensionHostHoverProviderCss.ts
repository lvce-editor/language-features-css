import { cssProperties } from '../CssProperties/CssProperties.ts'
import { cssPropertyDocumentation } from '../CssProperties/CssPropertyDocumentation.ts'

/* eslint sonarjs/cognitive-complexity: off -- Keeping the scan in one pass avoids building a second token stream for hover. */
const getPropertyAtOffset = (
  text: string,
  offset: number,
): string | undefined => {
  // Find CSS declaration names with a small state machine so braces and colons in
  // comments, strings, selectors, and values cannot produce false matches.
  let inComment = false
  let quote = ''
  let depth = 0
  let declarationStart = -1
  let colon = -1
  for (let index = 0; index < text.length; index++) {
    const char = text[index]
    const next = text[index + 1]
    if (inComment) {
      if (char === '*' && next === '/') {
        inComment = false
        index++
      }
      continue
    }
    if (quote) {
      if (char === '\\') index++
      else if (char === quote) quote = ''
      continue
    }
    if (char === '/' && next === '*') {
      inComment = true
      index++
      continue
    }
    if (char === '"' || char === "'") {
      quote = char
      continue
    }
    if (char === '{') {
      depth++
      declarationStart = index + 1
      colon = -1
    } else if (char === '}') {
      depth = Math.max(0, depth - 1)
      declarationStart = index + 1
      colon = -1
    } else if (depth > 0 && char === ':' && colon < 0) {
      colon = index
    } else if (depth > 0 && (char === ';' || char === '\n')) {
      declarationStart = index + 1
      colon = -1
    }
    if (colon >= 0 && offset >= declarationStart && offset <= colon) {
      const property = text.slice(declarationStart, colon).trim()
      const start = text.indexOf(property, declarationStart)
      if (
        offset >= start &&
        offset < start + property.length &&
        !property.startsWith('--')
      ) {
        return property.toLowerCase()
      }
    }
  }
  return undefined
}

export const provideHover = (document: { text: string }, offset: number) => {
  const property = getPropertyAtOffset(document.text, offset)
  const documentation =
    property && cssProperties[property] && cssPropertyDocumentation[property]
  if (!documentation) return undefined
  return {
    documentation: `${documentation}\n\n[MDN](https://developer.mozilla.org/docs/Web/CSS/${property})`,
  }
}
