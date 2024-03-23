import * as CssCompletion from '../CssCompletion/CssCompletion.ts'
import * as CssTabCompletion from '../CssTabCompletion/CssTabCompletion.ts'
import * as CssWorkerCommandType from '../CssWorkerCommandType/CssWorkerCommandType.ts'

export const commandMap = {
  [CssWorkerCommandType.GetTabCompletion]: CssTabCompletion.cssTabCompletion,
  [CssWorkerCommandType.GetCompletion]: CssCompletion.cssCompletion,
}
