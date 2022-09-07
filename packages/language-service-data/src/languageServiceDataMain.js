import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// TODO use import json once supported
export const cssProperties = JSON.parse(
  readFileSync(join(__dirname, 'css-properties.json')).toString()
)
