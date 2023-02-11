import * as TabCompletion from '../TabCompletion/TabCompletion.js'

export const languageId = 'css'

// TODO handle multiple offsets
// TODO maybe rename to getTabCompletion
export const provideTabCompletion = (textDocument, offset) => {
  // console.time('actual-provider')
  // console.time('get-text')
  const text = vscode.getTextFromTextDocument(textDocument)
  // console.timeEnd('get-text')
  const tabCompletion = TabCompletion.getTabCompletion(text, offset)
  // console.timeEnd('actual-provider')
  return tabCompletion
}
