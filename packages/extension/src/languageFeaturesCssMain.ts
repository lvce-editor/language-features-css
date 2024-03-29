// TODO would be nice to have typescript for all extensions
// but is it worth the compile time?
import * as ExtensionHostCompletionProviderCss from './parts/ExtensionHost/ExtensionHostCompletionProviderCss.ts'
import * as ExtensionHostTabCompletionProviderCss from './parts/ExtensionHost/ExtensionHostTabCompletionProviderCss.ts'

export const activate = () => {
  // TODO could also define completionProvider = { languageId: 'html', providerCompletions(){} }
  // @ts-ignore
  vscode.registerCompletionProvider(ExtensionHostCompletionProviderCss)
  // @ts-ignore
  vscode.registerTabCompletionProvider(ExtensionHostTabCompletionProviderCss)
}
