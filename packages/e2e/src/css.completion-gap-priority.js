export const name = 'css.completion-gap-priority'

export const test = async ({
  FileSystem,
  Workspace,
  Main,
  Editor,
  KeyBoard,
  Locator,
  expect,
}) => {
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/initial.css`, 'div {\n  ga\n}')
  await FileSystem.writeFile(`${tmpDir}/filtered.css`, 'div {\n  g\n}')
  await Workspace.setPath(tmpDir)

  await Main.openUri(`${tmpDir}/initial.css`)
  await Editor.setCursor(1, 4)
  await Editor.openCompletion()

  const completions = Locator('#Completions')
  const completionItems = completions.locator('.EditorCompletionItem')
  await expect(completions).toBeVisible()
  await expect(completionItems.nth(0)).toHaveText('gap')
  await expect(completionItems.nth(0)).toHaveClass('EditorCompletionItemFocused')
  await KeyBoard.press('Enter')
  await Editor.shouldHaveText('div {\n  gap: \n}')

  await Main.openUri(`${tmpDir}/filtered.css`)
  await Editor.setCursor(1, 3)
  await Editor.openCompletion()
  await KeyBoard.press('a')

  await expect(completions).toBeVisible()
  await expect(completionItems.nth(0)).toHaveText('gap')
  await expect(completionItems.nth(0)).toHaveClass('EditorCompletionItemFocused')
  await KeyBoard.press('Enter')
  await Editor.shouldHaveText('div {\n  gap: \n}')
}
