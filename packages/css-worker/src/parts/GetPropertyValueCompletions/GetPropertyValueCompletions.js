import { cssPropertyValues } from '../CssPropertyValues/CssPropertyValues.js'

const NULL_COMPLETIONS = []

export const getPropertyValueCompletions = (text, parsed, nodeIndex) => {
  const propertyNameStart = parsed[nodeIndex - 3].offset
  const propertyNameEnd = parsed[nodeIndex - 2].offset
  const propertyName = text.slice(propertyNameStart, propertyNameEnd)
  return cssPropertyValues[propertyName] || NULL_COMPLETIONS
}
