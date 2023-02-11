import * as Completion from '../Completion/Completion.js'
import * as CssWorkerCommandType from '../CssWorkerCommandType/CssWorkerCommandType.js'
import * as TabCompletion from '../TabCompletion/TabCompletion.js'

export const getResponse = async (method, params) => {
  if (method === CssWorkerCommandType.GetTabCompletion) {
    const uri = params[0]
    const content = params[1]
    const offset = params[2]
    const result = await TabCompletion.cssTabCompletion(content, offset)
    return result
  }
  if (method === CssWorkerCommandType.GetCompletion) {
    const uri = params[0]
    const content = params[1]
    const offset = params[2]
    const result = Completion.cssCompletion(content, offset)
    return result
  }
  return undefined
}
