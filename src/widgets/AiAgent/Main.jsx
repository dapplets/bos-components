const NetworkConfigs = {
  mainnet: {
    backendUrl: 'http://localhost:3001',
  },
  testnet: {
    backendUrl: 'http://localhost:3001',
  },
}

const config = NetworkConfigs[context.networkId]

if (!config) {
  return <></>
}

const NewContextHandler = (props) => {
  const { context } = props

  useEffect(() => {
    // dapplets.near/agent/fake-detector
    // dapplets.near/agent/sentiment-analysis
    // dapplets.near/agent/associative-summarizer

    const agentId = 'dapplets.near/agent/sentiment-analysis'
    const url = `${config.backendUrl}/context/invoke-agent`
    const payload = { context, agentId }
    fetch(url, { method: 'POST', body: JSON.stringify(payload) })
  }, [context])

  return <></>
}

const AnyContextTarget = {}

return <DappletPortal inMemory target={AnyContextTarget} component={NewContextHandler} />
