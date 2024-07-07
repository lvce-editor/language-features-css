import * as ImportJson from '../ImportJson/ImportJson.ts'

// TODO use import json once supported
export const cssProperties = await ImportJson.importJson(
  'css-data/src/css-properties.json'
)
