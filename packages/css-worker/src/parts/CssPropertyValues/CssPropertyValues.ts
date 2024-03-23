import * as ImportJson from '../ImportJson/ImportJson.ts'

// TODO use import json once supported
export const cssPropertyValues = await ImportJson.importJson(
  'data/css-property-values.json'
)
