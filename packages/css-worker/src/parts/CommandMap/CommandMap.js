import * as CssCompletion from '../CssCompletion/CssCompletion.js'
import * as CssTabCompletion from '../CssTabCompletion/CssTabCompletion.js'
import * as CssWorkerCommandType from '../CssWorkerCommandType/CssWorkerCommandType.js'

const noop = (...args) => {
  return undefined
}

export const getFn = (method) => {
  switch (method) {
    case CssWorkerCommandType.GetTabCompletion:
      return CssTabCompletion.cssTabCompletion
    case CssWorkerCommandType.GetCompletion:
      return CssCompletion.cssCompletion
    default:
      return noop
  }
}
