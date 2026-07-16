import { bundleJs } from '@lvce-editor/package-extension'
import fs from 'node:fs'
import path, { join } from 'node:path'
import { root } from './root.js'

const extension = path.join(root, 'packages', 'extension')
const outDir = join(extension, 'dist')

fs.rmSync(outDir, { recursive: true, force: true })
fs.mkdirSync(outDir, { recursive: true })

await bundleJs(
  join(extension, 'src', 'languageFeaturesCssMain.ts'),
  join(outDir, 'languageFeaturesCssMain.js')
)
