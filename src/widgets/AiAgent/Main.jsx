const NetworkConfigs = {
  mainnet: {
    backendUrl: 'https://api.aigency.augm.link', // 'http://localhost:3001',
  },
  testnet: {
    backendUrl: 'https://api.aigency.augm.link', // 'http://localhost:3001',
  },
}

const config = NetworkConfigs[context.networkId]

if (!config) return <></>

const postContextTarget = (injectTo) => ({
  namespace: '${REPL_ACCOUNT}/parser/twitter',
  contextType: 'post',
  injectTo,
  if: { id: { not: null } },
})

const FakeDetectorAgent = (props) => {
  return (
    <Widget
      src="${REPL_ACCOUNT}/widget/AiAgent.FakeDetectorAgent"
      props={{ contextR: props.context, config }}
      loading={<></>}
    />
  )
}

const SentimentAnalysisAgent = (props) => {
  return (
    <Widget
      src="${REPL_ACCOUNT}/widget/AiAgent.SentimentAnalysisAgent"
      props={{ contextR: props.context, config }}
      loading={<></>}
    />
  )
}

const AssociativeSummarizer = (props) => {
  return (
    <Widget
      src="${REPL_ACCOUNT}/widget/AiAgent.AssociativeSummarizer"
      props={{ contextR: props.context, config }}
      loading={<></>}
    />
  )
}

return (
  <>
    <DappletPortal target={postContextTarget('beforeText')} component={FakeDetectorAgent} />
    <DappletPortal target={postContextTarget('userName')} component={SentimentAnalysisAgent} />
    <DappletPortal target={postContextTarget('northPanel')} component={AssociativeSummarizer} />
  </>
)
