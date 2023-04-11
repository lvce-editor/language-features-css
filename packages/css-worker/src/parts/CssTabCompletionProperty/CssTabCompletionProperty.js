import { getMatchingCompletion } from '../GetMatchingCompletion/GetMatchingCompletion.js'

const RE_WORD = /[a-zA-Z\d\-]+$/
const RE_NUMERIC = /([a-zA-Z]+)(\d+)$/

const getFirstWord = (matchingCompletion) => {
  const colonIndex = matchingCompletion.indexOf(':')
  if (colonIndex === -1) {
    return ''
  }
  return matchingCompletion.slice(0, colonIndex)
}

/**
 * @param {string} text
 * @param {number} offset
 */
export const getTabCompletion = (text, offset) => {
  // console.time('wordMatch')
  const wordMatch = text.slice(0, offset).match(RE_WORD)
  if (!wordMatch) {
    return undefined
  }
  // console.timeEnd('wordMatch')
  const word = wordMatch[0]
  // console.time('getMatchingCompletion')
  const matchingCompletion = getMatchingCompletion(word)
  // console.timeEnd('getMatchingCompletion')
  if (matchingCompletion) {
    const edit = {
      offset: offset - word.length,
      inserted: matchingCompletion,
      deleted: word.length,
      type: /* Snippet */ 2,
    }
    return edit
  }
  const numericMatch = word.match(RE_NUMERIC)
  if (numericMatch) {
    const key = numericMatch[1]
    const value = parseInt(numericMatch[2])
    const matchingCompletion = getMatchingCompletion(key)
    if (!matchingCompletion) {
      return undefined
    }
    const firstWord = getFirstWord(matchingCompletion)
    if (!firstWord) {
      return undefined
    }
    const edit = {
      offset: offset - word.length,
      inserted: `${firstWord}: ${value}px;`,
      deleted: word.length,
      type: /* Snippet */ 2,
    }
    return edit
  }
  return undefined
}
