import { execSync } from 'child_process'
import { readdir } from 'fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const exec = async (command, options) => {
  console.info(command)
  execSync(command, options)
}

const applyLernaBugWorkaround = async () => {
  // workaround for https://github.com/lerna/lerna/issues/2352
  const packageNames = await readdir(join(root, 'packages'))
  for (const packageName of packageNames) {
    await exec(`npm ci --prefer-offline`, {
      cwd: join(root, 'packages', packageName),
      stdio: 'inherit',
    })
  }
}

const main = async () => {
  await applyLernaBugWorkaround()
}

main()
