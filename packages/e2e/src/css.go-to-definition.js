export const name = 'css.go-to-definition'

export const test = async ({ FileSystem, Main, Editor }) => {
  const tmpDir = await FileSystem.getTmpDir()
  const text = `:root {
  --color: red;
}
h1 {
  color: var(--color);
}`
  await FileSystem.writeFile(`${tmpDir}/test.css`, text)
  await Main.openUri(`${tmpDir}/test.css`)
  await Editor.setCursor(4, 19)

  await Editor.goToDefinition()

  await Editor.shouldHaveSelections(new Uint32Array([1, 2, 1, 2]))
}
