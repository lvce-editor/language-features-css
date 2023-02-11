import * as CssWorker from '../CssWorker/CssWorker.js'
import * as CssWorkerCommandType from '../CssWorkerCommandType/CssWorkerCommandType.js'

export const cssCompletion = async (uri, text, offset) => {
  const rpc = await CssWorker.getInstance()
  const result = await rpc.invoke(
    CssWorkerCommandType.GetCompletion,
    uri,
    text,
    offset
  )
  return result
}
