import {
  activate as activateExtensionApi,
  registerCompletionProvider,
  registerDefinitionProvider,
  registerTabCompletionProvider,
} from '@lvce-editor/api'
import * as ExtensionHostCompletionProviderCss from './parts/ExtensionHost/ExtensionHostCompletionProviderCss.ts'
import * as ExtensionHostDefinitionProviderCss from './parts/ExtensionHost/ExtensionHostDefinitionProviderCss.ts'
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
  registerTabCompletionProvider(ExtensionHostTabCompletionProviderCss)
}

export const deactivate = (): void => {}

await activate()
