const maskCommentsAndStrings = (text: string): string => {
  const chars = text.split('')
  let state: 'code' | 'comment' | 'single' | 'double' = 'code'

  for (let index = 0; index < text.length; index++) {
    const char = text[index]
    const next = text[index + 1]

    if (state === 'comment') {
      if (char === '*' && next === '/') {
        chars[index] = ' '
        chars[index + 1] = ' '
        index++
        state = 'code'
      } else if (char !== '\n' && char !== '\r') {
        chars[index] = ' '
      }
      continue
    }

    if (state === 'single' || state === 'double') {
      if (char === '\\') {
        chars[index] = ' '
        if (index + 1 < text.length) {
          chars[index + 1] = text[index + 1] === '\n' ? '\n' : ' '
          index++
        }
      } else if ((state === 'single' && char === "'") || (state === 'double' && char === '"')) {
        chars[index] = ' '
        state = 'code'
      } else if (char !== '\n' && char !== '\r') {
        chars[index] = ' '
      }
      continue
    }

    if (char === '/' && next === '*') {
      chars[index] = ' '
      chars[index + 1] = ' '
      index++
      state = 'comment'
    } else if (char === "'") {
      chars[index] = ' '
      state = 'single'
    } else if (char === '"') {
      chars[index] = ' '
      state = 'double'
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
  if (!Number.isInteger(offset) || offset < 0 || offset > text.length) {
    return undefined
  }

  const source = maskCommentsAndStrings(text)
  const referencePattern = /\bvar\s*\(\s*(--[-_a-zA-Z0-9]+)/gi
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
  const declarationPattern = /(?:^|[;{])\s*(--[-_a-zA-Z0-9]+)\s*:/g
  let declaration: RegExpExecArray | null
  while ((declaration = declarationPattern.exec(source))) {
    const nameStart = declaration.index + declaration[0].lastIndexOf(declaration[1])
    if (braceDepths[nameStart] > 0 && declaration[1] === name) {
      return {
        uri,
        startOffset: nameStart,
        endOffset: nameStart + name.length,
      }
    }
  }

  return undefined
}
