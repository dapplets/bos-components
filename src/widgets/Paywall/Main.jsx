const { nearAccountId } = props
const { authorId, id } = props.link

if (!id) return <></>

const userAccountId = context.accountId || nearAccountId
const CONTRACT_ADDRESS = context.networkId === 'mainnet' ? "v2.paywall.near" : "v2.paywall.testnet"

State.update({
  hasContent: Near.view(
      CONTRACT_ADDRESS,
      "has_content",
      { context_id: id },
      'final',
      true
    )
})

if (state.hasContent) {
  State.update({
    content: Near.view(
        CONTRACT_ADDRESS,
        "get_one",
        {
          context_id: id,
          account_id: userAccountId || ''
        },
        'final',
        true
      )
  })
}

return (
  <>
    {state.content
      ? <Widget
       loading={<></>}
          src="${REPL_ACCOUNT}/widget/Paywall.Content"
          props={{
            content: state.content,
            CONTRACT_ADDRESS,
            nearAccountId,
          }
        }/>
      : authorId === userAccountId
      ? <Widget
       loading={<></>}
          src="${REPL_ACCOUNT}/widget/Paywall.Form"
          props={{ linkId: id, CONTRACT_ADDRESS }}
        />
      : <></>}
  </>
)
