const { linkDb: LinkDb, context: appContext, getDocument } = props
const loggedInAccountId = context.accountId

const [document, setDocument] = useState(undefined) // null will be used if not found in DB
const [guideConfig, setGuideConfig] = useState(undefined) // null will be used if not found in DB
const [showApp, setShowApp] = useState(true)

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

useEffect(() => {
  if (getDocument) {
    //ToDo: remove it in the future
    getDocument()
      .then((doc) => {
        setDocument(doc)
        if (doc)
          LinkDb.get(appContext, doc.authorId)
            .then((response) => {
              if (!response?.[doc.authorId]) return
              setGuideConfig(response[doc.authorId])
            })
            .catch(console.error)
      })
      .catch(console.error)
  } else {
    LinkDb.get(appContext, mutatorId)
      .then((response) => {
        if (!response?.[mutatorId]) return
        setGuideConfig(response[mutatorId])
      })
      .catch(console.error)
  }
}, [])

// ToDo: move to the engine?
const MiniOverlayTarget = {
  namespace: 'mweb',
  contextType: 'mweb-overlay',
  injectTo: 'mweb-actions-panel',
  if: { id: { eq: 'mweb-overlay' } },
  arrowTo: 'context',
}

// editing allowed for document owner or mutator if document is not published yet
const isEditAllowed = document
  ? loggedInAccountId === document.authorId
  : loggedInAccountId === mutatorId

// If there is no config and the user is not a mutator do not show anything
if (
  !isEditAllowed &&
  (!guideConfig || !guideConfig.chapters?.length || !guideConfig.chapters[0].pages?.length)
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
        showApp,
        closeApp: () => setShowApp(false),
        setShowApp,
        loggedInAccountId,
        mutatorId,
        document,
        guideConfig,
        setGuideConfig,
        saveToLinkDB: LinkDb.set,
        appContext,
        commitDocument: props.commitDocument,
        notify: props.notify,
        query: props.query,
        isEditAllowed,
        getDocument,
      }}
    />
  </>
)
