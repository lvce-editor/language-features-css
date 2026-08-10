import { getMatchingCompletion } from '../GetMatchingCompletion/GetMatchingCompletion.ts'

const isAsciiDigit = (code: number): boolean => code >= 48 && code <= 57

const isAsciiLetter = (code: number): boolean =>
  (code >= 65 && code <= 90) || (code >= 97 && code <= 122)

const isWordCharacter = (code: number): boolean =>
  isAsciiDigit(code) || isAsciiLetter(code) || code === 45

const getWord = (text: string, offset: number): string => {
  let start = offset
  while (start > 0 && isWordCharacter(text.codePointAt(start - 1) ?? 0)) {
    start--
  }
  return text.slice(start, offset)
}

const parseNumericWord = (
  word: string,
): readonly [string, number] | undefined => {
  let splitIndex = word.length
  while (
    splitIndex > 0 &&
    isAsciiDigit(word.codePointAt(splitIndex - 1) ?? 0)
  ) {
    splitIndex--
  }
  if (splitIndex === 0 || splitIndex === word.length) {
    return undefined
  }
  for (let index = 0; index < splitIndex; index++) {
    if (!isAsciiLetter(word.codePointAt(index) ?? 0)) {
      return undefined
    }
  }
  return [word.slice(0, splitIndex), Number(word.slice(splitIndex))]
}

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
  const word = getWord(text, offset)
  if (!word) {
    return undefined
  }
  // console.timeEnd('wordMatch')
  // console.time('getMatchingCompletion')
  const matchingCompletion = getMatchingCompletion(word)
  // console.timeEnd('getMatchingCompletion')
  if (matchingCompletion) {
    const edit = {
      deleted: word.length,
      inserted: matchingCompletion,
      offset: offset - word.length,
      type: /* Snippet */ 2,
    }
    return edit
  }
  const numericWord = parseNumericWord(word)
  if (numericWord) {
    const [key, value] = numericWord
    const matchingCompletion = getMatchingCompletion(key)
    if (!matchingCompletion) {
      return undefined
    }
    const firstWord = getFirstWord(matchingCompletion)
    if (!firstWord) {
      return undefined
    }
    const edit = {
      deleted: word.length,
      inserted: `${firstWord}: ${value}px;`,
      offset: offset - word.length,
      type: /* Snippet */ 2,
    }
    return edit
  }
  return undefined
}
