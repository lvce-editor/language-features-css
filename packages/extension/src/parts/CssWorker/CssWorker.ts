import * as CssWorkerUrl from '../CssWorkerUrl/CssWorkerUrl.ts'

export const state: any = {
  rpcPromise: undefined,
}

const createRpc = async () => {
  // @ts-ignore
  const rpc = await vscode.createRpc({
    type: 'worker',
    url: CssWorkerUrl.cssWorkerUrl,
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
