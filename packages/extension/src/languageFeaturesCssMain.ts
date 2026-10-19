import {
  activate as activateExtensionApi,
  registerCompletionProvider,
  registerDefinitionProvider,
  registerReferenceProvider,
  registerTabCompletionProvider,
  registerHoverProvider,
} from '@lvce-editor/api'
import * as ExtensionHostCompletionProviderCss from './parts/ExtensionHost/ExtensionHostCompletionProviderCss.ts'
import * as ExtensionHostDefinitionProviderCss from './parts/ExtensionHost/ExtensionHostDefinitionProviderCss.ts'
import * as ExtensionHostHoverProviderCss from './parts/ExtensionHost/ExtensionHostHoverProviderCss.ts'
import * as ExtensionHostReferenceProviderCss from './parts/ExtensionHost/ExtensionHostReferenceProviderCss.ts'
import * as ExtensionHostTabCompletionProviderCss from './parts/ExtensionHost/ExtensionHostTabCompletionProviderCss.ts'

let isActivated = false

export const activate = async (): Promise<void> => {
  if (isActivated) {
    return
  }
  isActivated = true
  await activateExtensionApi()
  registerCompletionProvider(ExtensionHostCompletionProviderCss)
  registerDefinitionProvider(ExtensionHostDefinitionProviderCss)
  registerReferenceProvider(ExtensionHostReferenceProviderCss)
  registerTabCompletionProvider(ExtensionHostTabCompletionProviderCss)
  registerHoverProvider({
    id: 'css',
    languageId: 'css',
    provideHover: ExtensionHostHoverProviderCss.provideHover,
  })
}

export const deactivate = (): void => {}

await activate()
