export const name = 'css.completion'

export const test = async ({
  FileSystem,
  Workspace,
  Main,
  Editor,
  KeyBoard,
  Locator,
  expect,
}) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/test.css`,
    `h1 {\n  display: no\n}`,
  )
  await Workspace.setPath(tmpDir)

  // act
  await Main.openUri(`${tmpDir}/test.css`)
  await Editor.setCursor(1, 13)
  await Editor.openCompletion()

  // assert
  const completions = Locator('#Completions')
  await expect(completions).toBeVisible()
  await expect(completions).toContainText('none')
  await KeyBoard.press('Enter')
  await Editor.shouldHaveText('h1 {\n  display: none;\n}')
}
