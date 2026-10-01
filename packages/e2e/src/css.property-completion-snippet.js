export const name = 'css.property-completion-snippet'

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
  await FileSystem.writeFile(`${tmpDir}/test.css`, `h1 {\n  \n}`)
  await Workspace.setPath(tmpDir)

  // act
  await Main.openUri(`${tmpDir}/test.css`)
  await Editor.setCursor(1, 2)
  await Editor.type('displ')
  await Editor.openCompletion()

  // assert
  const completions = Locator('#Completions')
  await expect(completions).toBeVisible()
  const displayCompletion = completions.locator('.EditorCompletionItem').nth(0)
  await expect(displayCompletion).toHaveText('display')
  await KeyBoard.press('Enter')
  await Editor.shouldHaveText('h1 {\n  display: \n}')
  await Editor.type('block;')
  await Editor.shouldHaveText('h1 {\n  display: block;\n}')
}
