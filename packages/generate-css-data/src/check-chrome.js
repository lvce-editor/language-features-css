import got from 'got'
import assert from 'node:assert'
import fs from 'node:fs'
import { join } from 'node:path'
import { root } from './root.js'

const extension = join(root, 'packages/extension')

const getChromeData = () => {
  return got('https://chromestatus.com/data/csspopularity').json()
}

const toProperty = (row) => {
  const percentage = row.day_percentage
  assert(typeof percentage === 'number', 'invalid percentage')
  const name = row.property_name
  assert(typeof name === 'string', 'invalid name')
  return {
    percentage,
    name,
  }
}

const removeDuplicateAndAliasProperties = (properties) => {
  const seen = new Set()
  const result = []
  for (const property of properties) {
    if (seen.has(property.name) || property.name.startsWith('alias-')) {
      continue
    }
    seen.add(property.name)
    result.push(property)
  }
  return result
}

const getChromeProperties = async () => {
  const chromeData = await getChromeData()
  const properties = chromeData.map(toProperty)
  const propertiesWithoutDuplicates =
    removeDuplicateAndAliasProperties(properties)
  return propertiesWithoutDuplicates
}

const getIgnoredProperties = async () => {
  const ignoredRaw = await fs.promises.readFile(
    join(root, 'packages', 'generate-css-data', 'src', './deprecated.json'),
    'utf-8'
  )
  const ignored = JSON.parse(ignoredRaw).map((value) => value.name)
  return new Set(ignored)
}

const getTestedProperties = async () => {
  const text = await fs.promises.readFile(
    join(root, 'packages/css-worker/test/CssTabCompletionProperty.test.ts'),
    'utf-8'
  )
  const strings = [...text.matchAll(/test\('(.*?)'/g)].map((x) => x[1])
  return new Set(strings)
}

const isWebkit = (propertyName) => {
  return propertyName.startsWith('webkit')
}

const checkNormalProperties = async () => {
  const chromeProperties = await getChromeProperties()
  const ignoredProperties = await getIgnoredProperties()
  const testedProperties = await getTestedProperties()
  for (const property of chromeProperties) {
    if (
      !testedProperties.has(property.name) &&
      !ignoredProperties.has(property.name) &&
      !isWebkit(property.name)
    ) {
      console.warn(`missing property: ${property.name}`)
    }
  }
  const chromePropertySet = new Set(
    chromeProperties.map((property) => property.name)
  )
  for (const testedProperty of testedProperties) {
    if (!chromePropertySet.has(testedProperty)) {
      console.warn(`unknown property: ${testedProperty}`)
    }
  }
}

const main = async () => {
  await checkNormalProperties()
}

main()
