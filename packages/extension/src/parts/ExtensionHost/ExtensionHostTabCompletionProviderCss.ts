import * as TabCompletion from '../TabCompletion/TabCompletion.ts'

export const languageId = 'css'

// TODO handle multiple offsets
// TODO maybe rename to getTabCompletion
export const provideTabCompletion = (textDocument, offset) => {
  // console.time('actual-provider')
  // console.time('get-text')
  // @ts-ignore
  const text = vscode.getTextFromTextDocument(textDocument)
  // console.timeEnd('get-text')
  // @ts-ignore
  const tabCompletion = TabCompletion.getTabCompletion(text, offset)
  // console.timeEnd('actual-provider')
  return tabCompletion
}
