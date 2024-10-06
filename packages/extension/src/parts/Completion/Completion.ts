import * as CssWorker from '../CssWorker/CssWorker.ts'
import * as CssWorkerCommandType from '../CssWorkerCommandType/CssWorkerCommandType.ts'

export const cssCompletion = async (uri, text, offset) => {
  const result = await CssWorker.invoke(
    CssWorkerCommandType.GetCompletion,
    uri,
    text,
    offset
  )
  return result
}
