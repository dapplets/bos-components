const NetworkConfigs = {
  mainnet: {
    backendUrl: 'https://n8n.aigency.dapplets.org', // 'http://localhost:3001',
  },
  testnet: {
    backendUrl: 'https://n8n.aigency.test.dapplets.org', // 'http://localhost:3001',
  },
}

const config = NetworkConfigs[context.networkId]

if (!config) return <></>

const WildcardTarget = {
  if: { id: { not: null } },
}

const url = `${config.backendUrl}/webhook/rpc`

const saveContext = (ctx) => {
  return asyncFetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'addContext',
      params: {
        context: {
          namespace: ctx.namespace,
          type: ctx.type,
          id: ctx.id,
          parsed: ctx.parsed,
        },
      },
    }),
  })
}

const ContextHandler = (props) => {
  useCache(
    () => saveContext(props.context),
    `context/${props.context.namespace}/${props.context.type}/${props.context.id}`
  )

  return null
}

return (
  <>
    <DappletPortal target={WildcardTarget} inMemory component={ContextHandler} />
  </>
)
