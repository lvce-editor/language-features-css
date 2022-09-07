import { cssProperties } from 'language-service-data'

const merge = (objectA, objectB) => ({ ...objectA, ...objectB })

const keys = new Set(Object.keys(cssProperties))
const snippets = Object.values(cssProperties).reduce(merge, Object.create(null))

// console.log('toString' in keys)

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

// console.log(getMatchingCompletion('accent-color'))
