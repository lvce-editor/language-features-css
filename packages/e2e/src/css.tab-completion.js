const trimLines = (string) => {
  return string.split('\n').join('')
}

test('css.tab-completion', async () => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/test.css`,
    `h1 {
  dn
}`
  )
  await Workspace.setPath(tmpDir)
  // await Extension.addNodeExtension('packages/extension')

  // act
  await Main.openUri(`${tmpDir}/test.css`)
  await Editor.setCursor(1, 4)
  await Editor.executeTabCompletion()

  // assert
  const editor = Locator('.Viewlet.Editor')
  await expect(editor).toHaveText(
    trimLines(`h1 {
  display: none;
}`)
  )
})
