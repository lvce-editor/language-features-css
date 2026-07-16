import type { CssToken } from '../CssToken/CssToken.ts'

export const findNodeAtOffset = (
  nodes: readonly CssToken[],
  offset: number
): CssToken | undefined => {
  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i]
    if (node.offset <= offset) {
      return nodes[i]
    }
  }
  return nodes.at(-1)
}
