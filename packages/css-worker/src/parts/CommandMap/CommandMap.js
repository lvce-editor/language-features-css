import * as CssCompletion from '../CssCompletion/CssCompletion.ts'
import * as CssTabCompletion from '../CssTabCompletion/CssTabCompletion.js'
import * as CssWorkerCommandType from '../CssWorkerCommandType/CssWorkerCommandType.js'

export const commandMap = {
  [CssWorkerCommandType.GetTabCompletion]: CssTabCompletion.cssTabCompletion,
  [CssWorkerCommandType.GetCompletion]: CssCompletion.cssCompletion,
}
