import { propertyData } from '../../../data/propertyData.js'
import * as TokenType from '../CssTokenType/CssTokenType.js'
import { tokenizeCss } from '../TokenizeCss/TokenizeCss.js'
// {
//   none: {},
//   overline: {},
//   underline: {},
//   'line-through': {},
// },

const toSnippet = (propertyName) => {
  return {
    label: propertyName,
    snippet: `${propertyName}: `,
    kind: /* Property */ 1,
  }
}

const COMPLETIONS_CSS_PROPERTY_NAME = Object.keys(propertyData).map(toSnippet)

/**
 * @type{vscode.Completion[]}
 */
const NULL_COMPLETIONS = []

/**
 *
 * @param {string} text
 * @param {number} offset
 * @returns {vscode.Completion[]}
 */
export const cssCompletion = (text, offset) => {
  const parsed = tokenizeCss(text)
  const nodeIndex = parsed.findIndex((node) => node.offset >= offset)
  const nodeAtOffset = parsed[nodeIndex]
  if (!nodeAtOffset) {
    return NULL_COMPLETIONS
  }
  switch (nodeAtOffset.type) {
    case TokenType.Whitespace:
    case TokenType.PropertyName:
      return COMPLETIONS_CSS_PROPERTY_NAME
    case TokenType.PropertyValue:
      const propertyNameStart = parsed[nodeIndex - 3].offset
      const propertyNameEnd = parsed[nodeIndex - 2].offset
      const propertyName = text.slice(propertyNameStart, propertyNameEnd)
      return propertyData[propertyName] || NULL_COMPLETIONS
    default:
      return NULL_COMPLETIONS
  }
}
