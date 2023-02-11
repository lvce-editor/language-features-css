import * as CssWorker from '../CssWorker/CssWorker.js'
import * as CssWorkerCommandType from '../CssWorkerCommandType/CssWorkerCommandType.js'

export const getTabCompletion = async (uri, text, offset) => {
  const rpc = await CssWorker.getInstance()
  const result = await rpc.invoke(
    CssWorkerCommandType.GetTabCompletion,
    uri,
    text,
    offset
  )
  return result
}
