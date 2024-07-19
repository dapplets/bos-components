const { createServer } = require('node:http')
const stringify = require('json-stringify-deterministic')
const { getMWebComponents } = require('./common/mweb-components')
const { getBosComponents } = require('./common/bos-components')

const Hostname = '127.0.0.1'
const Port = 3030

const [accountId, networkId] = process.argv.slice(2)

const server = createServer(async (req, res) => {
  const [bos, mweb] = await Promise.all([
    getBosComponents(accountId, networkId),
    getMWebComponents(accountId, networkId),
  ])

  res.statusCode = 200

  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

  res.end(stringify({ ...bos, mweb }))
})

server.listen(Port, Hostname, () => {
  console.log(`Server running at http://${Hostname}:${Port}/`)
})

process.on('SIGINT', () => {
  server.close()
})
