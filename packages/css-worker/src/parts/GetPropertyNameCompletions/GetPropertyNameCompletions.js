import { cssPropertyValues } from '../CssPropertyValues/CssPropertyValues.js'
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

const COMPLETIONS_CSS_PROPERTY_NAME =
  Object.keys(cssPropertyValues).map(toSnippet)

export const getPropertyNameCompletions = () => {
  return COMPLETIONS_CSS_PROPERTY_NAME
}
