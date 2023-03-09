import { getMatchingCompletion } from '../getMatchingCompletion.js'

const RE_WORD = /[a-zA-Z\d\-]+$/

/**
 * @param {string} text
 * @param {number} offset
 */
export const getTabcompletion = (text, offset) => {
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
  if (!matchingCompletion) {
    return undefined
  }
  const edit = {
    offset: offset - word.length,
    inserted: matchingCompletion,
    deleted: word.length,
    type: /* Snippet */ 2,
  }
  return edit
}
