const NetworkConfigs = {
  mainnet: {
    widgetUrl:
      'https://dev.near.org/near/widget/ComponentDetailsPage?src=${REPL_ACCOUNT}/widget/BlinkExample.Main',
  },
  testnet: {
    widgetUrl:
      'https://test.near.org/discom.testnet/widget/ComponentDetailsPage?src=${REPL_ACCOUNT}/widget/BlinkExample.Main',
  },
}

const config = NetworkConfigs[context.networkId]

if (!config) {
  return <></>
}

return (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Link Replacement Example</h5>
      <p className="card-text">
        Same as Solana Blinks, but better. You can insert any BOS component with your custom
        business logic inside!
      </p>
      <a href={config.widgetUrl} target="_blank" className="btn btn-primary">
        Show Source Code
      </a>
    </div>
  </div>
)
