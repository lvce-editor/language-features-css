import { expect } from '@playwright/test'
import { mkdtemp, writeFile } from 'fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'os'
import { runWithExtension, test } from '../src/runWithExtension.js'

const getTmpDir = () => {
  return mkdtemp(join(tmpdir(), 'css-tab-completion'))
}

const trimLines = (string) => {
  return string.split('\n').join('')
}

test('css.tab-completion', async (t) => {
  const tmpDir = await getTmpDir()
  await writeFile(
    join(tmpDir, 'test.css'),
    `h1 {
  dn
}`
  )
  const page = await runWithExtension({
    folder: tmpDir,
  })
  const testCss = page.locator('text=test.css')
  await testCss.click()
  const token = page.locator('.Token.Text', { hasText: 'dn' })
  await token.click()
  const cursor = page.locator('.EditorCursor')
  await expect(cursor).toHaveCount(1)
  await expect(cursor).toHaveCSS('top', '20px')
  await expect(cursor).toHaveCSS('left', '18px')

  await page.keyboard.press('End')
  await page.keyboard.press('Tab')

  const editor = page.locator('.Editor')
  await expect(editor).toHaveText(
    trimLines(`h1 {
  display: none;
}`)
  )
})
