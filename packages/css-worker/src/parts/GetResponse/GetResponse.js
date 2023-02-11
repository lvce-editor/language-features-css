import * as TabCompletion from '../TabCompletion/TabCompletion.js'
import * as Completion from '../Completion/Completion.js'

export const getResponse = async (method, params) => {
  if (method === 'Css.getTabCompletion') {
    const uri = params[0]
    const content = params[1]
    const offset = params[2]
    const result = await TabCompletion.cssTabCompletion(content, offset)
    return result
  }
  if (method === 'Css.getCompletion') {
    const uri = params[0]
    const content = params[1]
    const offset = params[2]
    const result = Completion.cssCompletion(content, offset)
    return result
  }
  return undefined
}
