/// <reference path="./types.d.ts" />

test('css.completion', async () => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/test.css`, ` `)
  await Workspace.setPath(tmpDir)
  await Extension.addWebExtension(
    new URL(
      '../fixtures/sample.completion-provider-error',
      import.meta.url
    ).toString()
  )

  // act
  await Main.openUri(`${tmpDir}/test.test.css`)
  await Editor.setCursor(0, 0)
  await Editor.openCompletion()

  // assert
  const completions = Locator('#Completions')
  await expect(completions).toBeVisible()
  const completionItems = completions.locator('.EditorCompletionItem')
  await expect(completionItems).toHaveCount(3)
  await expect(completionItems.nth(0)).toHaveText('text-decoration')
})
