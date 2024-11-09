const {
  context: appContext,
  getDocument,
  commitDocument,
  deleteLocalDocument,
  notify,
  query,
} = props
const loggedInAccountId = context.accountId

const [document, setDocument] = useState(undefined)
const [showApp, setShowApp] = useState(true)
const [localConfig, setLocalConfig] = useState(undefined)
// console.log('document', document)
// console.log('localConfig', localConfig)

useEffect(() => {
  if (!document) {
    getDocument({ source: 'origin' })
      .then((doc) => {
        // console.log('doc', doc)
        setDocument(doc)
      })
      .catch(console.error)
  }
  if (localConfig === undefined) {
    getDocument({ source: 'local' })
      .then((res) => {
        // console.log('res', res)
        res.content && setLocalConfig(res.content)
      })
      .catch(console.error)
  }
}, [])

const handleCommitDocument = (config) => {
  return commitDocument(
    document
      ? { ...document, content: config, source: 'origin' }
      : {
          metadata: {
            name: config.title,
            description: config.description,
            image: config.icon,
          },
          source: 'origin',
          content: config,
        }
  )
}

// ToDo: move to the engine?
const MiniOverlayTarget = {
  namespace: 'mweb',
  contextType: 'mweb-overlay',
  injectTo: 'mweb-actions-panel',
  if: { id: { eq: 'mweb-overlay' } },
  arrowTo: 'context',
}

const findParentContext = (context, type) => {
  if (!context) return null
  if (context.type === type) return context
  return findParentContext(context.parent, type)
}

const getMutationId = () => {
  const websiteContext = findParentContext(appContext, 'website')
  if (!websiteContext) return null
  return websiteContext.parsed.mutationId
}

const mutationId = getMutationId()
const mutatorId = mutationId?.split('/')[0]

// editing allowed:
// - for document owner or mutator if document is not published yet;
// - if local document exists.
const isEditAllowed =
  !!localConfig ||
  (document ? loggedInAccountId === document.authorId : loggedInAccountId === mutatorId)

// If there is no config and the user is not a mutator do not show anything
if (
  !isEditAllowed &&
  (!document.content ||
    !document.content.chapters?.length ||
    !document.content.chapters[0].pages?.length)
) {
  return <></>
}

return (
  <>
    <DappletPortal
      target={MiniOverlayTarget}
      component={() => (
        <Widget
          src="${REPL_ACCOUNT}/widget/WebGuide.Tools.Action"
          props={{
            docId: document?.id,
            isActive: showApp,
            onClick: () => setShowApp((val) => !val),
          }}
        />
      )}
    />
    <Widget
      src="${REPL_ACCOUNT}/widget/WebGuide.App"
      props={{
        document,
        localConfig,
        isEditAllowed,
        loggedInAccountId,
        mutatorId,

        showApp,
        setShowApp,
        notify,
        query,
        getDocument,
        setDocument,
        deleteLocalDocument: () => deleteLocalDocument().then(() => setLocalConfig(null)),
        onCommitDocument: handleCommitDocument,
        onFork: () =>
          commitDocument({ ...document, source: 'local' })
            .then((doc) => setLocalConfig(doc.content))
            .catch(console.error),
        saveLocally: (content) =>
          commitDocument({ ...document, content, source: 'local' })
            .then((doc) => setLocalConfig(doc.content))
            .catch(console.error),
        closeApp: () => setShowApp(false),
      }}
    />
  </>
)
