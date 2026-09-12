const trimLines = (string) => {
  return string.split('\n').join('')
}

export const name = 'css.tab-completion-after-import'

export const test = async ({
  FileSystem,
  Workspace,
  Main,
  Locator,
  Editor,
  expect,
}) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/test.css`,
    `@import 'tailwindcss'

body {
  bg
}`,
  )
  await Workspace.setPath(tmpDir)

  // act
  await Main.openUri(`${tmpDir}/test.css`)
  await Editor.setCursor(3, 4)
  await Editor.executeTabCompletion()

  // assert
  const editor = Locator('.Viewlet.Editor')
  await expect(editor).toHaveText(
    trimLines(`@import 'tailwindcss'

body {
  background: ;
}`),
  )
}
