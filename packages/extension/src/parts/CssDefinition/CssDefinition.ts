const maskComment = (text: string, chars: string[], start: number): number => {
  for (let index = start; index < text.length; index++) {
    if (text[index] === '*' && text[index + 1] === '/') {
      chars[index] = ' '
      chars[index + 1] = ' '
      return index + 1
    }
    if (text[index] !== '\n' && text[index] !== '\r') {
      chars[index] = ' '
    }
  }
  return text.length
}

const maskString = (
  text: string,
  chars: string[],
  start: number,
  quote: string,
): number => {
  chars[start] = ' '
  for (let index = start + 1; index < text.length; index++) {
    const char = text[index]
    if (char === '\\') {
      chars[index] = ' '
      if (index + 1 < text.length) {
        chars[index + 1] = text[index + 1] === '\n' ? '\n' : ' '
        index++
      }
    } else if (char === quote) {
      chars[index] = ' '
      return index
    } else if (char !== '\n' && char !== '\r') {
      chars[index] = ' '
    }
  }
  return text.length
}

const maskCommentsAndStrings = (text: string): string => {
  const chars = text.split('')
  let index = 0
  while (index < text.length) {
    const char = text[index]
    const next = text[index + 1]
    if (char === '/' && next === '*') {
      chars[index] = ' '
      chars[index + 1] = ' '
      index = maskComment(text, chars, index + 2)
    } else if (char === "'" || char === '"') {
      index = maskString(text, chars, index, char)
    } else {
      index++
    }
  }
  return chars.join('')
}

const getBraceDepths = (text: string): Uint32Array => {
  const depths = new Uint32Array(text.length + 1)
  let depth = 0
  for (let index = 0; index < text.length; index++) {
    if (text[index] === '}') {
      depth = Math.max(0, depth - 1)
    }
    depths[index] = depth
    if (text[index] === '{') {
      depth++
    }
  }
  depths[text.length] = depth
  return depths
}

export const getDefinition = (uri: string, text: string, offset: number) => {
  if (!Number.isSafeInteger(offset) || offset < 0 || offset > text.length) {
    return undefined
  }

  const source = maskCommentsAndStrings(text)
  const referencePattern = /\bvar\s*\(\s*(--[\w-]+)/gi
  let reference: RegExpExecArray | null
  let name: string | undefined

  while ((reference = referencePattern.exec(source))) {
    const nameStart = reference.index + reference[0].lastIndexOf(reference[1])
    const nameEnd = nameStart + reference[1].length
    if (offset >= nameStart && offset <= nameEnd) {
      name = reference[1]
      break
    }
  }

  if (!name) {
    return undefined
  }

  const braceDepths = getBraceDepths(source)
  const declarationPattern = /(?:^|[;{])\s*(--[\w-]+)\s*:/g
  let declaration: RegExpExecArray | null
  while ((declaration = declarationPattern.exec(source))) {
    const nameStart =
      declaration.index + declaration[0].lastIndexOf(declaration[1])
    if (braceDepths[nameStart] > 0 && declaration[1] === name) {
      return {
        endOffset: nameStart + name.length,
        startOffset: nameStart,
        uri,
      }
    }
  }

  return undefined
}
