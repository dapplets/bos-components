const { getConnectedAccountsNet } = props

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
      const connectedAccounts = getConnectedAccountsNet()
      console.log('Connected Accounts:', connectedAccounts)
    }}
  >
    <Widget src="${REPL_ACCOUNT}/widget/Capybara" />
  </button>
)
