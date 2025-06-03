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

const postContextTarget = (injectTo) => ({
  namespace: '${REPL_ACCOUNT}/parser/twitter',
  contextType: 'post',
  injectTo,
  if: { id: { not: null } },
})

const SentimentAnalysisAgent = (props) => {
  return (
    <Widget
      src="${REPL_ACCOUNT}/widget/Xen.FactChecker"
      props={{ contextR: props.context, config }}
      loading={<></>}
    />
  )
}

const TrustRating = (props) => {
  return (
    <Widget
      src="${REPL_ACCOUNT}/widget/Xen.TrustRating"
      props={{ contextR: props.context, config }}
      loading={<></>}
    />
  )
}

return (
  <>
    <DappletPortal target={postContextTarget('userName')} component={SentimentAnalysisAgent} />
    <DappletPortal target={postContextTarget('avatar')} component={TrustRating} />
    <DappletPortal
      target={{
        namespace: '${REPL_ACCOUNT}/parser/near-ai',
        contextType: 'agent',
        if: { id: { not: null, index: true } },
        injectTo: 'buttons',
      }}
      component={(props) => (
        <Widget
          src="${REPL_ACCOUNT}/widget/Xen.NearAiNftActionButton"
          props={{ context: props.context }}
        />
      )}
    />
    <DappletPortal
      target={{
        namespace: '${REPL_ACCOUNT}/parser/near-ai',
        contextType: 'table-header',
        if: { id: { not: null, index: true } },
        injectTo: 'addCell',
      }}
      component={() => (
        <Widget
          src="${REPL_ACCOUNT}/widget/Xen.PriceColumnHeader"
          props={{ context: props.context }}
        />
      )}
    />
    <DappletPortal
      target={{
        namespace: '${REPL_ACCOUNT}/parser/near-ai',
        contextType: 'agent',
        if: { id: { not: null, index: true } },
        injectTo: 'addCell',
      }}
      component={(props) => (
        <Widget
          src="${REPL_ACCOUNT}/widget/Xen.PriceNftItem"
          props={{ nearAccountId: props.nearAccountId, context: props.context }}
        />
      )}
    />
  </>
)
