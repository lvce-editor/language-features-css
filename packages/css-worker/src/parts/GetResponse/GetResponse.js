import * as CssCompletion from '../CssCompletion/CssCompletion.js'
import * as CssTabCompletion from '../CssTabCompletion/CssTabCompletion.js'
import * as CssWorkerCommandType from '../CssWorkerCommandType/CssWorkerCommandType.js'

export const getResponse = async (method, params) => {
  if (method === CssWorkerCommandType.GetTabCompletion) {
    const content = params[0]
    const offset = params[1]
    const result = await CssTabCompletion.cssTabCompletion(content, offset)
    return result
  }
  if (method === CssWorkerCommandType.GetCompletion) {
    const content = params[0]
    const offset = params[1]
    const result = CssCompletion.cssCompletion(content, offset)
    return result
  }
  return undefined
}
