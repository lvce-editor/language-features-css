import * as ImportJson from '../ImportJson/ImportJson.ts'

// TODO use import json once supported
export const cssProperties = await ImportJson.importJson(
  'data/css-properties.json'
)
