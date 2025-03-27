const NetworkConfigs = {
  mainnet: {
    backendUrl: 'https://api.aigency.augm.link', // 'http://localhost:3001',
  },
  testnet: {
    backendUrl: 'https://api.aigency.augm.link', //  'http://localhost:3001',
  },
}

const config = NetworkConfigs[context.networkId]

if (!config) return <></>

const postContextTarget = {
  namespace: '${REPL_ACCOUNT}/parser/twitter',
  contextType: 'post',
  injectTo: 'beforeText',
  if: { id: { not: null } },
}

const MarketsPostWidget = (props) => (
  <Widget
    src="${REPL_ACCOUNT}/widget/PredictionMarkets.MarketsPostWidget"
    props={{ contextR: props.context, config }}
    loading={<></>}
  />
)

return <DappletPortal target={postContextTarget} component={MarketsPostWidget} />
