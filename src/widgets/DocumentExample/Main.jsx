const { accountId } = context // The order is important, because context redeclared
const { linkDb: LinkDb, commitDocument, context, getDocument } = props

const MiniOverlayTarget = {
  namespace: 'mweb',
  contextType: 'mweb-overlay',
  injectTo: 'mweb-actions-panel',
  if: { id: { eq: 'mweb-overlay' } },
  arrowTo: 'context',
}

const DefaultValue = { counter: 0 }

const [document, setDocument] = useState(null)
const [data, setData] = useState(DefaultValue)
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  if (getDocument) {
    getDocument()
      .then((doc) => setDocument(doc))
      .catch(console.error)
  }

  LinkDb.get(context, accountId)
    .then((data) => setData(data[accountId] ?? DefaultValue))
    .catch(console.error)
    .finally(() => setIsLoading(false))
}, [])

const handleCreateDocument = () => {
  const documentId = '${REPL_ACCOUNT}/document/DocumentExample-' + Date.now()

  const documentMetadata = {
    name: 'Document ' + Date.now(),
    description: 'Document created by ${REPL_ACCOUNT} at ' + Date.now(),
    image: {
      ipfs_cid: 'bafkreie4tum66dxhl4twu6ak3d2vgtxkwc3rkoay2rriqzdwm4m2hflgwy', // cat icon
    },
  }

  const newData = { counter: 1 }
  const counterData = { [accountId]: newData }

  setIsLoading(true)

  commitDocument(documentId, documentMetadata, context, counterData)
    .then(() => setData(newData))
    .catch(console.error)
    .finally(() => setIsLoading(false))
}

const handleIncrementClick = () => {
  setIsLoading(true)

  const newData = { counter: (data.counter ?? 0) + 1 }

  LinkDb.set(context, { [accountId]: newData })
    .then(() => setData(newData))
    .catch(console.error)
    .finally(() => setIsLoading(false))
}

return (
  <>
    <DappletPortal
      target={MiniOverlayTarget}
      component={() => {
        if (isLoading) {
          return (
            <button className="btn btn-primary btn-sm" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            </button>
          )
        }

        if (!document) {
          return (
            <button type="button" className="btn btn-primary btn-sm" onClick={handleCreateDocument}>
              Create
            </button>
          )
        }

        return (
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleIncrementClick}
            title={document.id}
          >
            Doc: {data?.counter ?? 0}
          </button>
        )
      }}
    />
  </>
)
