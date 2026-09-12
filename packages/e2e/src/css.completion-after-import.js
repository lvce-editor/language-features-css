export const name = 'css.completion-after-import'

export const test = async ({
  FileSystem,
  Workspace,
  Main,
  Editor,
  Locator,
  expect,
}) => {
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/test.css`,
    "@import 'tailwindcss'\n\nbody {\n  backg\n}",
  )
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/test.css`)
  await Editor.setCursor(3, 7)
  await Editor.openCompletion()
  const completions = Locator('#Completions')
  await expect(completions).toBeVisible()
  await expect(completions).toContainText('background')
  await expect(completions).toContainText('background-color')
}
