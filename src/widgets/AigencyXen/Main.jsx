const NetworkConfigs = {
  mainnet: {
    backendUrl: 'https://n8n.aigency.dapplets.org/webhook-test/n2e', // 'http://localhost:3001',
  },
  testnet: {
    backendUrl: 'https://n8n.aigency.dapplets.org/webhook-test/n2e', // 'http://localhost:3001',
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

const Agent = (props) => {
  return (
    <Widget
      src="${REPL_ACCOUNT}/widget/AigencyXen.Agent"
      props={{ contextR: props.context, config }}
      loading={<></>}
    />
  )
}

return (
  <>
    <DappletPortal target={postContextTarget('beforeText')} component={Agent} />
  </>
)
