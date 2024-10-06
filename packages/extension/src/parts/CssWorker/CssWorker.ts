// @ts-ignore
const rpc = vscode.createRpc({
  id: 'builtin.language-features-css.css-worker',
})

export const invoke = (method, ...params) => {
  return rpc.invoke(method, ...params)
}
