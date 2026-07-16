import {
  bundleJs,
  packageExtension,
  replace,
} from '@lvce-editor/package-extension'
import fs, { readFileSync } from 'fs'
import path, { join } from 'path'
import { root } from './root.js'

const extension = path.join(root, 'packages', 'extension')

fs.rmSync(join(root, 'dist'), { recursive: true, force: true })

fs.mkdirSync(path.join(root, 'dist'))

const packageJson = JSON.parse(
  readFileSync(join(extension, 'package.json')).toString()
)
delete packageJson.xo
delete packageJson.jest
delete packageJson.prettier
delete packageJson.devDependencies

fs.writeFileSync(
  join(root, 'dist', 'package.json'),
  JSON.stringify(packageJson, null, 2) + '\n'
)
fs.copyFileSync(join(root, 'README.md'), join(root, 'dist', 'README.md'))
fs.copyFileSync(join(extension, 'icon.png'), join(root, 'dist', 'icon.png'))
fs.copyFileSync(
  join(extension, 'extension.json'),
  join(root, 'dist', 'extension.json')
)

await replace({
  path: join(root, 'dist', 'extension.json'),
  occurrence: 'src/languageFeaturesCssMain.ts',
  replacement: 'dist/languageFeaturesCssMain.js',
})

await bundleJs(
  join(extension, 'src', 'languageFeaturesCssMain.ts'),
  join(root, 'dist', 'dist', 'languageFeaturesCssMain.js')
)

await packageExtension({
  highestCompression: true,
  inDir: join(root, 'dist'),
  outFile: join(root, 'extension.tar.br'),
})
