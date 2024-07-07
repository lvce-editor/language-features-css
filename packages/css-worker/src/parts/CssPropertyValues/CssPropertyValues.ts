import * as ImportJson from '../ImportJson/ImportJson.ts'

// TODO use import json once supported
export const cssPropertyValues = await ImportJson.importJson(
  'css-data/src/css-property-values.json'
)
