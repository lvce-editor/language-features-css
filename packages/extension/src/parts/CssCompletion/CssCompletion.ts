import * as TokenType from '../CssTokenType/CssTokenType.ts'
import * as FindNodeAtOffset from '../FindNodeAtOffset/FindNodeAtOffset.ts'
import * as GetPropertyNameCompletions from '../GetPropertyNameCompletions/GetPropertyNameCompletions.ts'
import * as GetPropertyValueCompletions from '../GetPropertyValueCompletions/GetPropertyValueCompletions.ts'
import { tokenizeCss } from '../TokenizeCss/TokenizeCss.ts'

// {
//   none: {},
//   overline: {},
//   underline: {},
//   'line-through': {},
// },

const toSnippet = (propertyName) => {
  return {
    kind: /* Property */ 1,
    label: propertyName,
    snippet: `${propertyName}: `,
  }
}

const NULL_COMPLETIONS = []

/**
 *
 * @param {string} text
 * @param {number} offset
 * @returns {any[]}
 */
export const cssCompletion = (text, offset) => {
  const parsed = tokenizeCss(text)
  const nodeAtOffset: any = FindNodeAtOffset.findNodeAtOffset(parsed, offset)
  const nodeIndex = parsed.indexOf(nodeAtOffset)
  if (!nodeAtOffset) {
    return NULL_COMPLETIONS
  }
  switch (nodeAtOffset.type) {
    case TokenType.PropertyName:
    case TokenType.Whitespace:
      return GetPropertyNameCompletions.getPropertyNameCompletions()
    case TokenType.PropertyValue:
      return GetPropertyValueCompletions.getPropertyValueCompletions(
        text,
        parsed,
        nodeIndex,
      )
    default:
      return NULL_COMPLETIONS
  }
}
