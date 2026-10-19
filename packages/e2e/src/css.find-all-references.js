export const name = 'css.find-all-references'

export const test = async ({ expect, FileSystem, Locator, Main, Editor }) => {
  const tmpDir = await FileSystem.getTmpDir()
  const text = `:root {
  --color: red;
}
h1 {
  color: var(--color, blue);
}
h2 {
  color: var(--color);
}`
  await FileSystem.writeFile(`${tmpDir}/test.css`, text)
  await Main.openUri(`${tmpDir}/test.css`)
  await Editor.setCursor(1, 5)

  await Editor.findAllReferences()

  const locations = Locator('.Locations')
  await expect(locations).toBeVisible()
  await expect(Locator('.LocationsMessage')).toHaveText('3 results in 1 file')
}
