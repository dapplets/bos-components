const fs = require('fs')
const path = require('path')

const getReplacementsPath = (networkId) =>
  path.join(__dirname, `../../replacements.${networkId}.json`)

const getReplacements = (networkId) => {
  const absolutePath = getReplacementsPath(networkId)
  return JSON.parse(fs.readFileSync(absolutePath, 'utf8'))
}

const executeReplacements = (str, replacements) => {
  for (const [key, value] of Object.entries(replacements)) {
    // should replace ${key} with value everywhere in the string
    str = str.replace(new RegExp(`\\$\\{${key}\\}`, 'g'), value)
  }

  return str
}

module.exports = { getReplacements, getReplacementsPath, executeReplacements }
