import * as CompletionType from '../CompletionType/CompletionType.ts'
import { cssPropertyValues } from '../CssPropertyValues/CssPropertyValues.ts'

// {
//   none: {},
//   overline: {},
//   underline: {},
//   'line-through': {},
// },

const toSnippet = (propertyName) => {
  return {
    kind: CompletionType.Property,
    label: propertyName,
    snippet: `${propertyName}: `,
  }
}

const COMPLETIONS_CSS_PROPERTY_NAME =
  Object.keys(cssPropertyValues).map(toSnippet)

export const getPropertyNameCompletions = () => {
  return COMPLETIONS_CSS_PROPERTY_NAME
}
