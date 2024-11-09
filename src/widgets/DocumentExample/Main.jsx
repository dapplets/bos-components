const { accountId } = context // The order is important, because context redeclared
const { commitDocument, getDocument } = props

const MiniOverlayTarget = {
  namespace: 'mweb',
  contextType: 'mweb-overlay',
  injectTo: 'mweb-actions-panel',
  if: { id: { eq: 'mweb-overlay' } },
  arrowTo: 'context',
}

const [document, setDocument] = useState(null)
const [isLoading, setIsLoading] = useState(true)
console.log('document', document)

useEffect(() => {
  if (getDocument) {
    getDocument()
      .then((doc) => setDocument(doc))
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }
}, [])

const handleCreateDocument = () => {
  const document = {
    // ID is generated based on metadata.name
    metadata: {
      name: 'Document ' + Date.now(),
      description: `Document created by ${accountId} at ` + Date.now(),
      image: {
        ipfs_cid: 'bafkreie4tum66dxhl4twu6ak3d2vgtxkwc3rkoay2rriqzdwm4m2hflgwy', // cat icon
      },
    },
    source: 'origin',
    content: { counter: 1 },
  }

  setIsLoading(true)

  commitDocument(document)
    .then((doc) => setDocument(doc))
    .catch(console.error)
    .finally(() => setIsLoading(false))
}

const handleIncrementClick = () => {
  setIsLoading(true)

  // edit document content
  document.content = { counter: (document.content?.counter ?? 0) + 1 }

  if (document.content.counter < 10) {
    commitDocument({ ...document, source: 'local' })
      .then((doc) => setDocument(doc))
      .catch(console.error)
      .finally(() => setIsLoading(false))
  } else {
    commitDocument({ ...document, source: 'origin' })
      .then((doc) => setDocument(doc))
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }
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
            {document.source} {document.content?.counter ?? 0}
          </button>
        )
      }}
    />
  </>
)
