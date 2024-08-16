const FirstVisiblePostTarget = {
  namespace: '${REPL_ACCOUNT}/parser/twitter',
  contextType: 'post',
  if: { id: { not: null } },
  injectTo: 'southPanel',
  isVisible: true,
  limit: 1,
}

const Button = ({ context }) => {
  return (
    <button type="button" className="btn btn-primary btn-sm" onClick={() => console.log(context)}>
      Visible
    </button>
  )
}

return <DappletPortal target={FirstVisiblePostTarget} component={Button} />
