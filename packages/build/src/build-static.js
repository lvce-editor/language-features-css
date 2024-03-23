import { exportStatic } from '@lvce-editor/shared-process'
import { cp, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { root } from './root.js'

await exportStatic({
  extensionPath: 'packages/extension',
  testPath: 'packages/e2e',
  root,
})

const RE_COMMIT_HASH = /^[a-z\d]+$/
const isCommitHash = (dirent) => {
  return dirent.length === 7 && dirent.match(RE_COMMIT_HASH)
}

const dirents = await readdir(path.join(root, 'dist'))
const commitHash = dirents.find(isCommitHash) || ''

for (const dirent of ['src', 'data']) {
  await cp(
    path.join(root, 'packages', 'css-worker', dirent),
    path.join(
      root,
      'dist',
      commitHash,
      'extensions',
      'builtin.language-features-css',
      'css-worker',
      dirent
    ),
    { recursive: true, force: true }
  )
}

const workerUrlFilePath = path.join(
  root,
  'dist',
  commitHash,
  'extensions',
  'builtin.language-features-css',
  'src',
  'parts',
  'CssWorkerUrl',
  'CssWorkerUrl.js'
)
const oldContent = await readFile(workerUrlFilePath, 'utf8')
const newContent = oldContent.replace(
  '../../../../css-worker/src/cssWorkerMain.js',
  '../../../css-worker/src/cssWorkerMain.js'
)
await writeFile(workerUrlFilePath, newContent)
