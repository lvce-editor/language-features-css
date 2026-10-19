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
      return index + 1
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
  const name = getCustomPropertyAtOffset(source, offset)
  if (!name) {
    return undefined
  }

  const braceDepths = getBraceDepths(source)
  const declaration = getDeclarations(source, braceDepths).find(
    (item) => item.name === name,
  )
  if (declaration) {
    return {
      endOffset: declaration.endOffset,
      startOffset: declaration.startOffset,
      uri,
    }
  }
  return undefined
}

interface CustomPropertyOccurrence {
  readonly endOffset: number
  readonly name: string
  readonly startOffset: number
}

export interface ReferenceLocation {
  readonly endColumnIndex: number
  readonly endOffset: number
  readonly endRowIndex: number
  readonly lineText: string
  readonly startColumnIndex: number
  readonly startOffset: number
  readonly startRowIndex: number
  readonly uri: string
}

const getCustomPropertyAtOffset = (
  source: string,
  offset: number,
): string | undefined => {
  const patterns = [/\bvar\s*\(\s*(--[\w-]+)/gi, /(?:^|[;{])\s*(--[\w-]+)\s*:/g]
  for (const pattern of patterns) {
    let match: RegExpExecArray | null
    while ((match = pattern.exec(source))) {
      const nameStart = match.index + match[0].lastIndexOf(match[1])
      const nameEnd = nameStart + match[1].length
      if (offset >= nameStart && offset <= nameEnd) {
        return match[1]
      }
    }
  }
  return undefined
}

const getDeclarations = (
  source: string,
  braceDepths: Uint32Array,
): readonly CustomPropertyOccurrence[] => {
  const declarations: CustomPropertyOccurrence[] = []
  const pattern = /(?:^|[;{])\s*(--[\w-]+)\s*:/g
  let match: RegExpExecArray | null
  while ((match = pattern.exec(source))) {
    const startOffset = match.index + match[0].lastIndexOf(match[1])
    if (braceDepths[startOffset] > 0) {
      declarations.push({
        endOffset: startOffset + match[1].length,
        name: match[1],
        startOffset,
      })
    }
  }
  return declarations
}

const getVariableReferences = (
  source: string,
): readonly CustomPropertyOccurrence[] => {
  const references: CustomPropertyOccurrence[] = []
  const pattern = /\bvar\s*\(\s*(--[\w-]+)/gi
  let match: RegExpExecArray | null
  while ((match = pattern.exec(source))) {
    const startOffset = match.index + match[0].lastIndexOf(match[1])
    references.push({
      endOffset: startOffset + match[1].length,
      name: match[1],
      startOffset,
    })
  }
  return references
}

export const getReferences = (uri: string, text: string, offset: number) => {
  if (!Number.isSafeInteger(offset) || offset < 0 || offset > text.length) {
    return []
  }
  const source = maskCommentsAndStrings(text)
  const name = getCustomPropertyAtOffset(source, offset)
  if (!name) {
    return []
  }
  const braceDepths = getBraceDepths(source)
  const occurrences = [
    ...getDeclarations(source, braceDepths),
    ...getVariableReferences(source),
  ]
    .filter((occurrence) => occurrence.name === name)
    .toSorted((left, right) => left.startOffset - right.startOffset)
  const lines = text.split('\n')
  const references: ReferenceLocation[] = []
  let rowIndex = 0
  let lineStart = 0
  for (const occurrence of occurrences) {
    while (
      rowIndex < lines.length - 1 &&
      occurrence.startOffset >= lineStart + lines[rowIndex].length + 1
    ) {
      lineStart += lines[rowIndex].length + 1
      rowIndex++
    }
    const lineText = lines[rowIndex]
    const lineEnd = lineStart + lineText.length
    if (
      occurrence.startOffset >= lineStart &&
      occurrence.endOffset <= lineEnd
    ) {
      references.push({
        endColumnIndex: occurrence.endOffset - lineStart,
        endOffset: occurrence.endOffset,
        endRowIndex: rowIndex,
        lineText,
        startColumnIndex: occurrence.startOffset - lineStart,
        startOffset: occurrence.startOffset,
        startRowIndex: rowIndex,
        uri,
      })
    }
  }
  return references
}
