import { cssProperties } from '../CssProperties/CssProperties.ts'

const keys = new Set(Object.keys(cssProperties))
const snippets: any = Object.create(null)
for (const value of Object.values(cssProperties)) {
  Object.assign(snippets, value)
}

/**
 * @param {string} partialWord
 */
export const getMatchingCompletion = (partialWord) => {
  if (Object.hasOwn(snippets, partialWord)) {
    return snippets[partialWord]
  }
  if (keys.has(partialWord)) {
    return `${partialWord}: $0;`
  }
  return ''
}
