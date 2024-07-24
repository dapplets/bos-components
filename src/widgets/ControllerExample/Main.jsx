/**
 * In-memory controller
 */

const post = {
  namespace: '${REPL_ACCOUNT}/parser/twitter',
  contextType: 'post',
  if: { id: { not: null } },
  injectTo: 'southPanel',
}

const PostButton = ({ context }) => {
  const handleClick = () => {
    console.log(context)
  }

  return (
    <button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>
      Click me
    </button>
  )
}

return (
  <>
    <DappletPortal target={post} component={PostButton} />
  </>
)
