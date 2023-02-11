import * as Completion from '../Completion/Completion.js'
import * as CssWorkerCommandType from '../CssWorkerCommandType/CssWorkerCommandType.js'
import * as TabCompletion from '../TabCompletion/TabCompletion.js'

export const getResponse = async (method, params) => {
  if (method === CssWorkerCommandType.GetTabCompletion) {
    const content = params[0]
    const offset = params[1]
    const result = await TabCompletion.cssTabCompletion(content, offset)
    return result
  }
  if (method === CssWorkerCommandType.GetCompletion) {
    const content = params[0]
    const offset = params[1]
    const result = Completion.cssCompletion(content, offset)
    return result
  }
  return undefined
}
