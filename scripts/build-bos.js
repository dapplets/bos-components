const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const { getReplacements } = require('./common/replacements')

const [accountId, networkId] = process.argv.slice(2)

const InputWidgetsPath = '../src/widgets'
const OutputBuildPath = '../build/src'

const from = path.resolve(__dirname, InputWidgetsPath)
const to = path.resolve(__dirname, OutputBuildPath)

const replaceInEveryFile = (directory) => {
  const subpaths = fs.readdirSync(directory)

  for (const subpath of subpaths) {
    const absoluteSubPath = path.join(directory, subpath)

    if (fs.lstatSync(absoluteSubPath).isDirectory()) {
      replaceInEveryFile(absoluteSubPath)
      continue
    }

    let fileContent = fs.readFileSync(absoluteSubPath, 'utf8')

    const replacements = {
      ...getReplacements(networkId),
      REPL_ACCOUNT: accountId,
    }

    for (const [key, value] of Object.entries(replacements)) {
      // should replace ${key} with value everywhere in the string
      fileContent = fileContent.replace(new RegExp(`\\$\\{${key}\\}`, 'g'), value)
    }

    fs.writeFileSync(absoluteSubPath, fileContent, { encoding: 'utf8' })
  }
}

exec(`mkdir -p ${to}`, (err) => {
  if (err) throw err

  exec(`cp -r ${from}/* ${to}`, (err) => {
    if (err) throw err
    replaceInEveryFile(to)
  })
})
