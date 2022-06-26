import { expect } from '@playwright/test'
import { mkdtemp, writeFile } from 'fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'os'
import { runWithExtension, test } from '../src/runWithExtension.js'

const getTmpDir = () => {
  return mkdtemp(join(tmpdir(), 'css-completion'))
}

test('css.completion', async () => {
  const tmpDir = await getTmpDir()
  await writeFile(join(tmpDir, 'test.css'), ' ')
  const page = await runWithExtension({
    folder: tmpDir,
  })
  const testCss = page.locator('text=test.css')
  await testCss.click()
  const token = page.locator('.Token').first()
  await token.click()
  const cursor = page.locator('.EditorCursor')
  await expect(cursor).toHaveCount(1)
  await expect(cursor).toHaveCSS('top', '0px')
  await page.keyboard.press('Control+Space')

  const completions = page.locator('#Completions')
  await expect(completions).toBeVisible()

  const completionItems = completions.locator('.EditorCompletionItem')
  const completionItemOne = completionItems.nth(0)
  await expect(completionItemOne).toHaveText('text-decoration')
})
