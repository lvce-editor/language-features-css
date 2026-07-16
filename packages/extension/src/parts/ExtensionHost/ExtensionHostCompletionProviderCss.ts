import type { CompletionProvider } from '@lvce-editor/api'
import * as CssCompletion from '../CssCompletion/CssCompletion.ts'

export const id = 'css'

export const languageId = 'css'

export const triggerCharacters = []

export const provideCompletions: CompletionProvider['provideCompletions'] = (
  textDocument,
  offset
) => {
  return CssCompletion.cssCompletion(textDocument.text, offset)
}
