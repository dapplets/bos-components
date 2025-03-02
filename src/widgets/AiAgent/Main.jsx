const NetworkConfigs = {
  mainnet: {
    backendUrl: 'https://api.aigency.augm.link',
  },
  testnet: {
    backendUrl: 'https://api.aigency.augm.link',
  },
}

const config = NetworkConfigs[context.networkId]

if (!config) return <></>

const PostContextTarget = {
  namespace: '${REPL_ACCOUNT}/parser/twitter',
  contextType: 'post',
  injectTo: 'beforeText',
  if: { id: { not: null } },
}

const FakeDetectorAgent = (props) => {
  return (
    <Widget
      src="${REPL_ACCOUNT}/widget/AiAgent.FakeDetectorAgent"
      props={{ contextR: props.context, config }}
    />
  )
}

return <DappletPortal target={PostContextTarget} component={FakeDetectorAgent} />
