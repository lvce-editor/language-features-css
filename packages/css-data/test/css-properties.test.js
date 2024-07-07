import Css from '../src/css-properties.json'

import { test, expect } from '@jest/globals'

const keys = new Set(Object.keys(Css))
const merge = (objectA, objectB) => ({ ...objectA, ...objectB })
const snippets = Object.values(Css).reduce(merge, Object.create(null))

const expandProperty = (partialWord) => {
  if (snippets.hasOwnProperty(partialWord)) {
    return snippets[partialWord]
  }
  if (keys.has(partialWord)) {
    return `${partialWord}: $0;`
  }
}

test('accent-color', () => {
  expect(expandProperty('accent-color')).toBe('accent-color: $0;')
})
