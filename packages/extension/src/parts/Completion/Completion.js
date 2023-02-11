import * as CssWorker from '../CssWorker/CssWorker.js'

export const cssCompletion = async (uri, text, offset) => {
  const rpc = await CssWorker.getInstance()
  const result = await rpc.invoke('Css.getCompletion', uri, text, offset)
  return result
}
