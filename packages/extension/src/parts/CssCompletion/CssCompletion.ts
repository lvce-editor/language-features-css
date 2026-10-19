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
  let blockDepth = 0
  for (const node of parsed) {
    if (node.offset > offset) {
      break
    }
    if (node.type === TokenType.CurlyOpen) {
      blockDepth++
    } else if (node.type === TokenType.CurlyClose) {
      blockDepth--
    }
  }
  switch (nodeAtOffset.type) {
    case TokenType.CurlyOpen:
    case TokenType.NewLine:
    case TokenType.PropertySemicolon:
    case TokenType.Whitespace:
      if (blockDepth > 0) {
        return GetPropertyNameCompletions.getPropertyNameCompletions()
      }
      return NULL_COMPLETIONS
    case TokenType.PropertyName:
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
