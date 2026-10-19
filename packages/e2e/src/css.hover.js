export const name = 'css.hover'

export const test = async ({
  FileSystem,
  Workspace,
  Main,
  Editor,
  Locator,
  expect,
}) => {
  const tmpDir = await FileSystem.getTmpDir()
  const text = 'h1 {\n  grid-template-columns: 1fr;\n}'
  await FileSystem.writeFile(`${tmpDir}/test.css`, text)
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/test.css`)
  await Editor.setCursor(1, 10)
  await Editor.openHover()
  const hover = Locator('.EditorHover')
  await expect(hover).toBeVisible()
  await expect(hover).toContainText('track sizing')
}
