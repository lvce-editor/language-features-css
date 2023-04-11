import { cssProperties } from '../CssProperties/CssProperties.js'

const merge = (objectA, objectB) => ({ ...objectA, ...objectB })

const keys = new Set(Object.keys(cssProperties))
const snippets = Object.values(cssProperties).reduce(merge, Object.create(null))

/**
 * @param {string} partialWord
 */
export const getMatchingCompletion = (partialWord) => {
  if (snippets.hasOwnProperty(partialWord)) {
    return snippets[partialWord]
  }
  if (keys.has(partialWord)) {
    return `${partialWord}: $0;`
  }
  return ''
}
