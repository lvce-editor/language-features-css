import { readdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { performance } from 'node:perf_hooks'
import { fileURLToPath } from 'node:url'
import { closeAll, runTest, startAll, state } from '../src/runWithExtension.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const getTestFiles = async () => {
  return readdirSync(__dirname)
    .filter((x) => x !== '_all.js')
    .map((x) => './' + x)
}

const main = async () => {
  try {
    state.runImmediately = false
    await startAll()
    console.info('SETUP COMPLETE')
    const testFiles = await getTestFiles()
    for (const testFile of testFiles) {
      state.tests = []
      await import(testFile)
      for (const test of state.tests) {
        await runTest(test)
      }
    }
    await closeAll()
  } catch (error) {
    console.info('tests failed')
    console.error(error)
    process.exit(1)
  }
}

main()
