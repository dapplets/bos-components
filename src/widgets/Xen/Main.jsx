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

// const FakeDetectorAgent = (props) => {
//   return (
//     <Widget
//       src="${REPL_ACCOUNT}/widget/AiAgent.FakeDetectorAgent"
//       props={{ contextR: props.context, config }}
//       loading={<></>}
//     />
//   )
// }

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

// const AssociativeSummarizer = (props) => {
//   return (
//     <Widget
//       src="${REPL_ACCOUNT}/widget/AiAgent.AssociativeSummarizer"
//       props={{ contextR: props.context, config }}
//       loading={<></>}
//     />
//   )
// }

return (
  <>
    {/* <DappletPortal target={postContextTarget('beforeText')} component={FakeDetectorAgent} /> */}
    <DappletPortal target={postContextTarget('userName')} component={SentimentAnalysisAgent} />
    <DappletPortal target={postContextTarget('avatar')} component={TrustRating} />
    {/* <DappletPortal target={postContextTarget('northPanel')} component={AssociativeSummarizer} /> */}
  </>
)
