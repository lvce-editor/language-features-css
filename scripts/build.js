import { execSync } from 'child_process'
import fs, { mkdirSync, readFileSync } from 'fs'
import path, { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { packageExtension } from '@lvce-editor/package-extension'

const NOT_NEEDED = []

const __dirname = dirname(fileURLToPath(import.meta.url))

const root = path.join(__dirname, '..')
const extension = path.join(root, 'packages', 'extension')
const languageService = path.join(root, 'packages', 'language-service')
const languageServiceData = path.join(root, 'packages', 'language-service-data')

fs.rmSync(join(root, 'dist'), { recursive: true, force: true })

fs.mkdirSync(path.join(root, 'dist'))

const packageJson = JSON.parse(
  readFileSync(join(extension, 'package.json')).toString()
)
delete packageJson.xo
delete packageJson.jest
delete packageJson.prettier
delete packageJson.devDependencies
delete packageJson.scripts
packageJson.dependencies['language-service'] = '^0.0.0-dev'

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
fs.cpSync(join(extension, 'src'), join(root, 'dist', 'src'), {
  recursive: true,
})
// fs.cpSync(join(extension, 'data'), join(root, 'dist', 'data'), {
//   recursive: true,
// })

const getAllDependencies = (obj) => {
  if (!obj || !obj.dependencies) {
    return []
  }
  return [obj, ...Object.values(obj.dependencies).flatMap(getAllDependencies)]
}

const getDependencies = (folder) => {
  const stdout = execSync('npm list --omit=dev --parseable --all', {
    cwd: folder,
  }).toString()
  const lines = stdout.split('\n')
  return lines.slice(1, -1)
}

for (const folder of [languageService]) {
  const dependencies = getDependencies(folder)
  for (const dependency of dependencies) {
    fs.cpSync(dependency, join(root, 'dist', dependency.slice(folder.length)), {
      recursive: true,
    })
  }
}

mkdirSync(join(root, 'dist', 'node_modules', 'language-service'), {
  recursive: true,
})
fs.cpSync(
  join(root, 'packages', 'language-service', 'src'),
  join(root, 'dist', 'node_modules', 'language-service', 'src'),
  { recursive: true }
)
fs.copyFileSync(
  join(root, 'packages', 'language-service', 'package.json'),
  join(root, 'dist', 'node_modules', 'language-service', 'package.json')
)

for (const notNeeded of NOT_NEEDED) {
  fs.rmSync(join(root, 'dist', notNeeded), { force: true, recursive: true })
}

await packageExtension({
  highestCompression: true,
  inDir: join(root, 'dist'),
  outFile: join(root, 'extension.tar.br'),
})
