// TODO would be nice to have typescript for all extensions
// but is it worth the compile time?
import { Completion } from 'language-service'

export const languageId = 'css'

// TODO maybe skip the whole provider prefix (provideCompletions(text) -> completions(text)
// TODO maybe rename to getCompletions
export const provideCompletions = async (textDocument, offset) => {
  const text = vscode.getTextFromTextDocument(textDocument)
  const completions = Completion.cssCompletion(text, offset)
  return completions
}

export const triggerCharacters = []
