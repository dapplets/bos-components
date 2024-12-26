const { getConnectedAccountsNet } = props
const loggedInAccountId = context.accountId

return (
  <button
    style={{
      border: 'none',
      background: 'none',
      margin: 0,
      padding: 2,
      cursor: 'pointer',
    }}
    title="Capybara CA"
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      getConnectedAccountsNet(loggedInAccountId, 'near/testnet').then((data) =>
        console.log(`Connected Accounts for logged in account ${loggedInAccountId}:`, data)
      )
      const ethAddr = '0xf64849376812667bda7d902666229f8b8dd90687'
      getConnectedAccountsNet(ethAddr, 'ethereum').then((data) =>
        console.log(`Connected Accounts for ethereum account ${ethAddr}:`, data)
      )
    }}
  >
    <Widget src="${REPL_ACCOUNT}/widget/Capybara" />
  </button>
)
