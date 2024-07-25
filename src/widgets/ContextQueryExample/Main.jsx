const { query } = props

const post = {
  namespace: '${REPL_ACCOUNT}/parser/twitter',
  contextType: 'post',
  if: { id: { not: null } },
  injectTo: 'southPanel',
}

const PostButton = () => {
  const handleClick = () => {
    console.log(query(post))
  }

  return (
    <button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>
      Query
    </button>
  )
}

return (
  <>
    <DappletPortal target={post} component={PostButton} />
  </>
)
