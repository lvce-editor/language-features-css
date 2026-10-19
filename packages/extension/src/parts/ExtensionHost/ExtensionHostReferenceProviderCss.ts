import * as CssDefinition from '../CssDefinition/CssDefinition.ts'

export const id = 'css'

export const languageId = 'css'

export const provideReferences = (
  textDocument,
  offset,
): readonly CssDefinition.ReferenceLocation[] => {
  return CssDefinition.getReferences(
    textDocument.uri,
    textDocument.text,
    offset,
  )
}
