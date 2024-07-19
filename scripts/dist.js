const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const { getMWebComponents } = require('./common/mweb-components')
const { getBosComponents } = require('./common/bos-components')
const stringify = require('json-stringify-deterministic')

const [accountId, networkId] = process.argv.slice(2)

const BuildOutputPath = '../build'
const OutputFileName = 'index.json'

const absoluteBuildPath = path.resolve(__dirname, BuildOutputPath)

const main = async () => {
  const [bos, mweb] = await Promise.all([
    getBosComponents(accountId, networkId),
    getMWebComponents(accountId, networkId),
  ])

  const json = stringify({ ...bos, mweb })
  fs.writeFileSync(path.join(absoluteBuildPath, OutputFileName), json)
}

exec(`mkdir -p ${absoluteBuildPath}`, (err) => {
  if (err) throw err

  main()
    .then(() => process.exit())
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
})
