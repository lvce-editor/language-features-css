import * as CompletionType from '../CompletionType/CompletionType.ts'
import { cssPropertyValues } from '../CssPropertyValues/CssPropertyValues.ts'

const NULL_COMPLETIONS = []

const toPropertyCompletion = (completion) => {
  return {
    ...completion,
    kind: CompletionType.Value,
  }
}
const toPropertyCompletions = (completions) => {
  return completions.map(toPropertyCompletion)
}

export const getPropertyValueCompletions = (text, parsed, nodeIndex) => {
  const propertyNameStart = parsed[nodeIndex - 3].offset
  const propertyNameEnd = parsed[nodeIndex - 2].offset
  const propertyName = text.slice(propertyNameStart, propertyNameEnd)
  const values = cssPropertyValues[propertyName] || NULL_COMPLETIONS
  return toPropertyCompletions(values)
}
