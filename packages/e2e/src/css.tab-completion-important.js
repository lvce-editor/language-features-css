const trimLines = (string) => string.split('\n').join('')

export const name = 'css.tab-completion-important'

export const test = async ({
  FileSystem,
  Workspace,
  Main,
  Locator,
  Editor,
  expect,
}) => {
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/test.css`, `h1 {\n  color: red !\n}`)
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/test.css`)
  await Editor.setCursor(1, 14)
  await Editor.executeTabCompletion()

  const editor = Locator('.Viewlet.Editor')
  await expect(editor).toHaveText(trimLines(`h1 {\n  color: red !important\n}`))
}
