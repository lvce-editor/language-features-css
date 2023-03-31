import * as ImportJson from '../ImportJson/ImportJson.js'

// TODO use import json once supported
export const cssProperties = await ImportJson.importJson(
  'data/css-properties.json'
)
