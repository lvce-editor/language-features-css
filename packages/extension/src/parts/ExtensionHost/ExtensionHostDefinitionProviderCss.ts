import * as CssDefinition from '../CssDefinition/CssDefinition.ts'

export const id = 'css'

export const languageId = 'css'

export const provideDefinition = (textDocument, offset) => {
  return CssDefinition.getDefinition(textDocument.uri, textDocument.text, offset)
}
