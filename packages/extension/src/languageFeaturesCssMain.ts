import {
  activate as activateExtensionApi,
  registerCompletionProvider,
  registerTabCompletionProvider,
} from '@lvce-editor/api'
import * as ExtensionHostCompletionProviderCss from './parts/ExtensionHost/ExtensionHostCompletionProviderCss.ts'
import * as ExtensionHostTabCompletionProviderCss from './parts/ExtensionHost/ExtensionHostTabCompletionProviderCss.ts'

let isActivated = false

export const activate = async (): Promise<void> => {
  if (isActivated) {
    return
  }
  isActivated = true
  await activateExtensionApi()
  registerCompletionProvider(ExtensionHostCompletionProviderCss)
  registerTabCompletionProvider(ExtensionHostTabCompletionProviderCss)
}

export const deactivate = (): void => {}

await activate()
