import * as CssWorker from '../CssWorker/CssWorker.ts'
import * as CssWorkerCommandType from '../CssWorkerCommandType/CssWorkerCommandType.ts'

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
