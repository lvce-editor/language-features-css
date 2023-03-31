import * as ImportJson from '../ImportJson/ImportJson.js'

// TODO use import json once supported
export const cssPropertyValues = await ImportJson.importJson(
  'data/css-property-values.json'
)
