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
  await FileSystem.writeFile(`${tmpDir}/test.css`, `h1 {\n  display: no\n}`)
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

  const blankIndent = '  '
  const declarationCss = `:root {
  --red: red;
}
h1 {
  color: var(--red);
${blankIndent}
}`
  await FileSystem.writeFile(`${tmpDir}/declaration.css`, declarationCss)
  await Main.openUri(`${tmpDir}/declaration.css`)
  await Editor.setCursor(5, 2)
  await Editor.openCompletion()

  await expect(completions).toBeVisible()
  await expect(completions).toContainText('display')
  await Editor.type('display')
  await KeyBoard.press('Enter')
  const insertedDeclaration = 'display: '
  await Editor.shouldHaveText(
    `:root {\n  --red: red;\n}\nh1 {\n  color: var(--red);\n  ${insertedDeclaration}\n}`,
  )
}
