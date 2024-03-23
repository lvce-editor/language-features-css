import * as CssWorkerUrl from '../CssWorkerUrl/CssWorkerUrl.js'

export const state = {
  /**
   * @type {any}
   */
  rpcPromise: undefined,
}

const createRpc = async () => {
  const workerUrl = CssWorkerUrl.getCssWorkerUrl()
  // @ts-ignore
  const rpc = await vscode.createRpc({
    type: 'worker',
    url: workerUrl,
    name: 'Css Worker',
  })
  return rpc
}

const getOrCreateRpc = async () => {
  if (!state.rpcPromise) {
    state.rpcPromise = createRpc()
  }
  return state.rpcPromise
}

export const getInstance = async () => {
  const rpc = await getOrCreateRpc()
  return rpc
}
