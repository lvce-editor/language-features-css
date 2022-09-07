// TODO would be nice to have typescript for all extensions
// but is it worth the compile time?
import * as ExtensionHostCompletionProviderCss from './parts/ExtensionHostCompletion/ExtensionHostCompletion.js'
import * as ExtensionHostTabCompletionProviderCss from './parts/ExtensionHostTabCompletion/ExtensionHostTabCompletion.js'

export const activate = () => {
  // TODO could also define completionProvider = { languageId: 'html', providerCompletions(){} }
  vscode.registerCompletionProvider(ExtensionHostCompletionProviderCss)
  vscode.registerTabCompletionProvider(ExtensionHostTabCompletionProviderCss)
}
