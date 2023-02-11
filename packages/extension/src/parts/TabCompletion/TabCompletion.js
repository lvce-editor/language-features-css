import * as CssWorker from '../CssWorker/CssWorker.js'

export const getTabCompletion = async (uri, text, offset) => {
  const rpc = await CssWorker.getInstance()
  const result = await rpc.invoke('Css.getTabCompletion', uri, text, offset)
  return result
}
