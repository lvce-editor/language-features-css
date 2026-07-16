import * as CssTabCompletion from '../CssTabCompletion/CssTabCompletion.ts'

export const id = 'css.provideTabCompletion'

export const languageId = 'css'

interface TextDocument {
  readonly text: string
}

export const provideTabCompletion = (
  textDocument: TextDocument,
  offset: number
) => {
  return CssTabCompletion.cssTabCompletion(textDocument.text, offset)
}
