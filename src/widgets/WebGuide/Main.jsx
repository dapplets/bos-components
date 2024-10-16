const OverlayTriggerWrapper = styled.div`
  display: flex;
  z-index: 500;

  .OverlayTrigger {
    position: absolute;
    background: #db504a;
    border: 1px solid #db504a;
    width: 6px;
    height: 49px;
    right: -6px;
    top: 10px;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    z-index: 79;
  }
`

const TimelineLatchIcon = ({ color }) => (
  <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 18.6H0.39L7.27 8.42C7.36 8.24 7.31 8.15 7.12 8.15H4.28L7.27 2.7C7.36 2.52 7.29 2.43 7.07 2.43H3.26C3.15 2.43 3.06 2.49 2.97 2.61L0.19 10.01C0.17 10.19 0.23 10.28 0.38 10.28H3.13L0 18.6ZM8.5 12.27H8.77L13.99 4.6C14.04 4.52 14.05 4.45 14.03 4.4C14.01 4.35 13.95 4.33 13.86 4.33H11.76L13.94 0.3C14.06 0.1 14 0 13.76 0H11.02C10.89 0 10.79 0.0600001 10.72 0.19L8.64 5.67C8.61 5.76 8.61 5.83 8.65 5.88C8.69 5.93 8.75 5.95 8.84 5.95H10.88L8.5 12.27Z"
      fill={color}
    />
  </svg>
)

const NotchLatchIcon = () => (
  <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.168 9.8335V2.8335"
      stroke="#14AE5C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.1865 11.9384C24.5763 13.4873 24.6075 15.1047 24.2778 16.6676C23.9482 18.2304 23.2663 19.6974 22.2842 20.9569C21.3021 22.2165 20.0456 23.2354 18.6103 23.9361C17.175 24.6367 15.5987 25.0008 14.0015 25.0004H8.75155C7.12055 25.0004 6.30504 25.0004 5.66221 24.7344C5.23744 24.5585 4.85148 24.3007 4.52639 23.9756C4.2013 23.6505 3.94344 23.2645 3.76755 22.8397C3.50155 22.1969 3.50155 21.3814 3.50155 19.7504V14.5004C3.50119 12.9032 3.86521 11.327 4.5659 9.89169C5.26659 8.45639 6.28549 7.19986 7.54504 6.21774C8.80459 5.23561 10.2716 4.55378 11.8344 4.22412C13.3972 3.89447 15.0146 3.92569 16.5635 4.31541C16.168 4.728 15.9025 5.2477 15.7998 5.80994C15.6972 6.37219 15.762 6.9522 15.9862 7.47792C16.2104 8.00365 16.5841 8.45191 17.061 8.76703C17.5378 9.08215 18.0967 9.25024 18.6682 9.25041H19.2515V9.83374C19.2517 10.4053 19.4198 10.9642 19.7349 11.441C20.05 11.9178 20.4983 12.2915 21.024 12.5157C21.5498 12.74 22.1298 12.8048 22.692 12.7021C23.2543 12.5995 23.774 12.3339 24.1865 11.9384ZM17.5015 12.1671C17.811 12.1671 18.1077 12.29 18.3265 12.5088C18.5453 12.7276 18.6682 13.0243 18.6682 13.3337C18.6682 13.6432 18.5453 13.9399 18.3265 14.1587C18.1077 14.3775 17.811 14.5004 17.5015 14.5004H10.5015C10.1921 14.5004 9.89538 14.3775 9.67659 14.1587C9.4578 13.9399 9.33488 13.6432 9.33488 13.3337C9.33488 13.0243 9.4578 12.7276 9.67659 12.5088C9.89538 12.29 10.1921 12.1671 10.5015 12.1671H17.5015ZM14.0015 16.8337C14.311 16.8337 14.6077 16.9567 14.8265 17.1754C15.0453 17.3942 15.1682 17.691 15.1682 18.0004C15.1682 18.3098 15.0453 18.6066 14.8265 18.8254C14.6077 19.0442 14.311 19.1671 14.0015 19.1671H10.5015C10.1921 19.1671 9.89538 19.0442 9.67659 18.8254C9.4578 18.6066 9.33488 18.3098 9.33488 18.0004C9.33488 17.691 9.4578 17.3942 9.67659 17.1754C9.89538 16.9567 10.1921 16.8337 10.5015 16.8337H14.0015Z"
      fill="#14AE5C"
    />
    <path
      d="M25.668 6.3335H18.668"
      stroke="#14AE5C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// ToDo: Styled components cause unnecessary re-rendering in BOS
const TimelineLatch = styled.button`
  background-color: ${(props) => (props.$variant === 'current' ? '#384bff' : '#384BFF4D')};
  height: 20px;
  width: ${(props) => `${props.$width + 6}px`};
  border-radius: 6px;
  border: none;
  color: #fff;
  text-align: center;
  position: relative;
  top: -20px;
  left: -6px;
  cursor: pointer;
`

// ToDo: Styled components cause unnecessary re-rendering in BOS
const NotchLatch = styled.button`
  display: flex;
  position: fixed;
  top: ${(props) => `${props.$top}px`};
  margin-top: ${(props) => `${props.$height / 2 - 14}px`};
  margin-left: ${(props) => `${props.$position === 'right' ? props.$width : '-35'}px`};
  width: ${(props) => `${props.$position === 'right' ? '28' : '32'}px`};
  height: 29px;
  padding: 0;
  padding-right: ${(props) => `${props.$position === 'right' ? '0' : '4px'}`};
  background: none;
  border: none;
  opacity: ${(props) => (props.$variant === 'current' ? '1' : '.5')};
  cursor: pointer;
`

// ToDo: move to the engine?
const MiniOverlayTarget = {
  namespace: 'mweb',
  contextType: 'mweb-overlay',
  injectTo: 'mweb-actions-panel',
  if: { id: { eq: 'mweb-overlay' } },
  arrowTo: 'context',
}

// Random ID used in chapters and pages for a unique context ID to create nested callouts in the future.
const generateRandomId = () => {
  return Math.random().toString(16).substring(2, 10)
}

const generateNewPage = () => ({
  id: generateRandomId(),
  title: '',
  status: [],
  content: '',
})

const generateNewChapter = () => ({
  id: generateRandomId(),
  type: 'infobox',
  pages: [generateNewPage()],
  skin: 'META_GUIDE',
})

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj))

// ToDo: naive deep compare
const isDeepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

const isTargetEqual = (a, b) => {
  if (!a && !b) return true
  if (!a || !b || a.id !== b.id || a.namespace !== b.namespace || a.type !== b.type) return false
  return (!a.parent && !b.parent) || (a.parent && b.parent && isTargetEqual(a.parent, b.parent))
}

const clearTreeBranch = (node) => ({
  namespace: node.namespace,
  type: node.type,
  id: node.id,
  parent: node.parent ? clearTreeBranch(node.parent) : undefined,
})

const configTemplate = { action: true }

const { accountId: loggedInAccountId } = context
const { linkDb: LinkDb, context: appContext, getDocument, commitDocument, notify } = props

const [document, setDocument] = useState(undefined) // null will be used if not found in DB
const [guideConfig, setGuideConfig] = useState(undefined) // null will be used if not found in DB
const [editingConfig, setEditingConfig] = useState(configTemplate)
const [showApp, setShowApp] = useState(true)
const [chapterCounter, setChapterCounter] = useState(0)
const [pageCounter, setPageCounter] = useState(0)
const [isEditMode, setEditMode] = useState(false)
const [isEditTarget, setEditTarget] = useState(false)
const [noTarget, setNoTarget] = useState(false)
const [showFirstScreen, setShowFirstScreen] = useState(false)

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

const localConfigResponse = Storage.privateGet(appContext + (document ? '/' + document.id : ''))
const localConfig =
  localConfigResponse &&
  (typeof localConfigResponse === 'string' ? JSON.parse(localConfigResponse) : localConfigResponse)

// editing allowed for document owner or mutator if document is not published yet
const isEditAllowed = document
  ? loggedInAccountId === document.authorId
  : loggedInAccountId === mutatorId

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

useEffect(() => {
  setShowApp(
    (!!guideConfig && (!localConfig || !!localConfig.chapters.length)) ||
      (!!localConfig && !!localConfig.chapters.length) ||
      showFirstScreen
  )
  setShowFirstScreen((guideConfig === null && !localConfig) || showFirstScreen)

  if (localConfig) {
    if (!isDeepEqual(localConfig, editingConfig)) {
      setEditingConfig(localConfig)
    }
  } else if (guideConfig && !isDeepEqual(guideConfig, editingConfig)) {
    setEditingConfig(guideConfig)
    setChapterCounter(0)
    setPageCounter(0)
    setEditMode(false)
  }
}, [guideConfig, localConfig])

// If there is no target on the page, find the chapter to show or show the first screen to the mutator
useEffect(() => {
  if (
    !editingConfig.chapters?.length ||
    editingConfig.chapters[chapterCounter].type === 'infobox' ||
    props.query(editingConfig.chapters[chapterCounter].target)
  ) {
    setNoTarget(false)
    return
  }

  // Here is the callout chapter with no taret in the DOM
  // ToDo: it is assumed that there is only one config for the context
  if (isEditMode || (localConfig && isEditAllowed)) {
    setNoTarget(true)
    setEditMode(true)
    return
  }

  // User starts the app and there is no target for the first chapter
  for (let i = chapterCounter + 1; i < editingConfig.chapters.length; i++) {
    const nextChapter = editingConfig.chapters[i]
    if (nextChapter.type === 'infobox' || props.query(nextChapter.target)) {
      setChapterCounter(i)
      setPageCounter(0)
      return
    }
  }
  setShowApp(false)
  setChapterCounter(0)
  setPageCounter(0)
}, [editingConfig, chapterCounter])

// If there is no config and the user is not a mutator do not show anything
if (
  !isEditAllowed &&
  (!editingConfig || !editingConfig.chapters?.length || !editingConfig.chapters[0].pages?.length)
) {
  return <></>
}

const handleCreateDocument = (config) => {
  const documentId =
    loggedInAccountId +
    '/document/WebGuide-' +
    (config.title
      ?.split(' ')
      .filter((x) => x)
      .join('-') ?? Date.now())

  const documentMetadata = {
    name: config.title,
    description: config.description,
    image: config.icon,
  }

  return commitDocument(documentId, documentMetadata, appContext, { [loggedInAccountId]: config })
}

const notifyWithCountdown = ({ type, subject, body, duration, onOk, onCancelOrTimeout }) => {
  let timer

  const handleOk = () => {
    clearTimeout(timer)
    onOk()
  }

  const handleCancel = () => {
    clearTimeout(timer)
    onCancelOrTimeout()
  }

  timer = setTimeout(() => {
    onCancelOrTimeout()
  }, duration * 1000)

  notify({
    type,
    subject,
    body,
    duration,
    showProgress: true,
    actions: [
      { label: 'OK', onClick: handleOk },
      { label: 'Cancel', onClick: handleCancel },
    ],
  })
}

const handlePlacementChange = (newPlacement) => {
  const updatedConfig = deepCopy(editingConfig)
  const updatedChapter = updatedConfig.chapters[chapterCounter]
  const previousPlacement = updatedChapter.placement

  updatedChapter.placement = newPlacement
  setEditingConfig(updatedConfig)

  if (newPlacement === 'auto') {
    saveConfigToLocalStorage(updatedConfig)
    return
  }

  const commitChanges = () => {
    saveConfigToLocalStorage(updatedConfig)
  }

  const revertChanges = () => {
    const updatedConfig = deepCopy(editingConfig)
    const updatedChapter = updatedConfig.chapters[chapterCounter]

    updatedChapter.placement = previousPlacement

    setEditingConfig(updatedConfig)
    saveConfigToLocalStorage(updatedConfig)
  }

  notifyWithCountdown({
    type: 'info',
    subject: 'Change target',
    body: `Reverting changes in 9 seconds...`,
    duration: 9,
    onOk: commitChanges,
    onCancelOrTimeout: revertChanges,
  })
}

const handleSkinToggle = () => {
  const updatedConfig = deepCopy(editingConfig)

  updatedConfig.skin = updatedConfig.skin === 'DEFAULT' ? 'META_GUIDE' : 'DEFAULT'

  setEditingConfig(updatedConfig)
  saveConfigToLocalStorage(updatedConfig)
}

const saveConfigToLocalStorage = (data) => {
  Storage.privateSet(
    appContext + (document ? '/' + document.id : ''),
    !data || isDeepEqual(data, guideConfig) ? undefined : data
  )
}

const handleConfigImport = (guide) => {
  setEditingConfig(guide)
}

const handleClose = () => {
  setShowApp(false)
  setEditMode(false)
}

const handleActionClick = () => {
  setShowApp((val) => !val)
  setShowFirstScreen(
    (!guideConfig && !localConfig) || (!!localConfig && !localConfig.chapters.length)
  )
  setEditMode(false)
  setChapterCounter(0)
  setPageCounter(0)
}

const handleChapterDecrement = () => {
  if (isEditMode) {
    if (chapterCounter !== 0) {
      setChapterCounter((val) => val - 1)
      const prevChapterPagesNumber = editingConfig.chapters[chapterCounter - 1]?.pages?.length
      setPageCounter(prevChapterPagesNumber ? prevChapterPagesNumber - 1 : 0)
    }
  } else {
    // Skips chapters that doesn't have visible contexts
    for (let i = chapterCounter - 1; i >= 0; i--) {
      const prevChapter = editingConfig.chapters[i]
      if (prevChapter.type === 'infobox' || props.query(prevChapter.target)) {
        setChapterCounter(i)
        setPageCounter(prevChapter.pages?.length ? prevChapter.pages?.length - 1 : 0)
        return
      }
    }
  }
}

const handleChapterIncrement = (updatedConfig) => {
  const currentConfig = updatedConfig ?? editingConfig
  if (isEditMode) {
    setChapterCounter((val) => Math.min(val + 1, currentConfig.chapters.length - 1))
    setPageCounter(0)
  } else {
    // Skips chapters that doesn't have visible contexts
    for (let i = chapterCounter + 1; i < currentConfig.chapters.length; i++) {
      const nextChapter = currentConfig.chapters[i]
      if (nextChapter.type === 'infobox' || props.query(nextChapter.target)) {
        setChapterCounter(i)
        setPageCounter(0)
        return
      }
    }
    setShowApp(false)
    setChapterCounter(0)
    setPageCounter(0)
  }
}

const handleClickPrev = () => {
  if (!pageCounter) {
    handleChapterDecrement()
  } else {
    setPageCounter((val) => val - 1)
  }
}

const handleClickNext = () => {
  if (pageCounter === editingConfig.chapters[chapterCounter]?.pages?.length - 1) {
    handleChapterIncrement()
  } else {
    setPageCounter((val) => val + 1)
  }
}

const getEmptyPages = (config) =>
  config.chapters
    .map((chapter, i) =>
      chapter.pages
        .map((page, j) => (!page.title.trim() && !page.content.trim() ? `${i + 1}.${j + 1}` : null))
        .filter((page) => page)
    )
    .filter((val) => val?.length)
    .flat()

const saveConfig = (config) => {
  const emptyPages = getEmptyPages(config)
  if (emptyPages?.length) return emptyPages
  const isConfigEdited = !isDeepEqual(config, guideConfig)
  if (isConfigEdited) {
    ;(document
      ? LinkDb.set(appContext, { [document.authorId]: config })
      : handleCreateDocument(config)
    )
      ?.then(() => {
        console.log('Saved')
        setGuideConfig(config)
        setEditMode(false)
        setChapterCounter(0)
        setPageCounter(0)
        saveConfigToLocalStorage(null)
        setShowFirstScreen(false)
      })
      .catch(console.error)
  } else {
    console.log('Not saved')
    setGuideConfig(guideConfig)
    setEditMode(false)
    setChapterCounter(0)
    setPageCounter(0)
    saveConfigToLocalStorage(null)
  }
}

const handleSave = ({ newTitle, newContent }) => {
  const updatedConfig = deepCopy(editingConfig)
  const updatedPage = updatedConfig.chapters[chapterCounter].pages[pageCounter]
  updatedPage.title = newTitle
  updatedPage.content = newContent
  return saveConfig(updatedConfig)
}

const handleSaveFromFirstScreen = ({ newTitle, newDescription, newIcon }) => {
  const updatedConfig = deepCopy(editingConfig)
  updatedConfig.title = newTitle
  updatedConfig.description = newDescription
  updatedConfig.icon = newIcon
  return saveConfig(updatedConfig)
}

const exportConfig = (config) => {
  const jsonString = JSON.stringify(config, null, 2) // formatted json
  const blob = new Blob([jsonString], { type: 'application/json' })
  const file = new File([blob], 'webGuideConfig.json')
  return file
}

const handleExportConfig = ({ newTitle, newContent }) => {
  const updatedConfig = deepCopy(editingConfig)
  const updatedPage = updatedConfig.chapters[chapterCounter].pages[pageCounter]
  updatedPage.title = newTitle
  updatedPage.content = newContent
  return exportConfig(updatedConfig)
}

const handleExportConfigFromFirstScreen = ({ newTitle, newDescription, newIcon }) => {
  const updatedConfig = deepCopy(editingConfig)
  updatedConfig.title = newTitle
  updatedConfig.description = newDescription
  updatedConfig.icon = newIcon
  return exportConfig(updatedConfig)
}

const handleClickPageIndicator = ({ index: pageIndex, newTitle, newContent }) => {
  const updatedConfig = deepCopy(editingConfig)
  const updatedPage = updatedConfig.chapters[chapterCounter].pages[pageCounter]

  updatedPage.title = newTitle
  updatedPage.content = newContent

  setEditingConfig(updatedConfig)
  saveConfigToLocalStorage(updatedConfig)

  setPageCounter(pageIndex)
}

const handlePageDataChange = ({ newTitle, newContent }) => {
  // ToDo: code duplication
  const updatedConfig = deepCopy(editingConfig)
  const updatedPage = updatedConfig.chapters[chapterCounter].pages[pageCounter]

  updatedPage.title = newTitle
  updatedPage.content = newContent

  setEditingConfig(updatedConfig)
  saveConfigToLocalStorage(updatedConfig)
}

const handleFirstScreenDataChange = ({ newTitle, newDescription, newIcon }) => {
  const updatedConfig = deepCopy(editingConfig)
  updatedConfig.title = newTitle
  updatedConfig.description = newDescription
  updatedConfig.icon = newIcon
  setEditingConfig(updatedConfig)
  saveConfigToLocalStorage(updatedConfig)
}

const handleTargetSet = (newTarget) => {
  const updatedConfig = deepCopy(editingConfig)
  const updatedChapter = updatedConfig.chapters[chapterCounter]

  updatedChapter.type = 'callout'
  updatedChapter.target = newTarget ? clearTreeBranch(newTarget) : null
  delete updatedChapter.placement

  setEditingConfig(updatedConfig)
  saveConfigToLocalStorage(updatedConfig)

  setEditTarget(false)
}

const handleTargetRemove = ({ newTitle, newContent }) => {
  const updatedConfig = deepCopy(editingConfig)
  const updatedChapter = updatedConfig.chapters[chapterCounter]
  const updatedPage = updatedChapter.pages[pageCounter]

  updatedChapter.type = 'infobox'
  updatedChapter.target = null
  delete updatedChapter.placement
  updatedPage.title = newTitle
  updatedPage.content = newContent

  setEditingConfig(updatedConfig)
  saveConfigToLocalStorage(updatedConfig)

  setEditTarget(false)
}

const addChapter = (config, addFirst) => {
  const newChapter = generateNewChapter()
  if (addFirst) {
    config.chapters.unshift(newChapter)
  } else {
    config.chapters.splice(chapterCounter + 1, 0, newChapter)
  }
  setEditingConfig(config)
  saveConfigToLocalStorage(config)
  if (!addFirst) {
    handleChapterIncrement(config)
  } else {
    setShowFirstScreen(false)
  }
}

const handleChapterAdd = ({ newTitle, newContent }) => {
  const updatedConfig = deepCopy(editingConfig)
  const updatedChapter = updatedConfig.chapters[chapterCounter]
  const updatedPage = updatedChapter.pages[pageCounter]
  updatedPage.title = newTitle
  updatedPage.content = newContent
  addChapter(updatedConfig, false)
}

const handleAddChapterFromFirstScreen = ({ newTitle, newDescription, newIcon }) => {
  const updatedConfig = deepCopy(editingConfig)
  updatedConfig.title = newTitle
  updatedConfig.description = newDescription
  updatedConfig.icon = newIcon
  addChapter(updatedConfig, true)
}

const handlePageAdd = ({ newTitle, newContent }) => {
  const updatedConfig = deepCopy(editingConfig)
  const updatedChapter = updatedConfig.chapters[chapterCounter]
  const updatedPage = updatedChapter.pages[pageCounter]

  updatedPage.title = newTitle
  updatedPage.content = newContent

  const newPage = generateNewPage()
  updatedChapter.pages.splice(pageCounter + 1, 0, newPage)

  setEditingConfig(updatedConfig)
  saveConfigToLocalStorage(updatedConfig)

  setPageCounter((val) => val + 1)
}

const handleStartCreation = ({ newTitle, newDescription, newIcon }) => {
  const updatedConfig = deepCopy(editingConfig)
  updatedConfig.title = newTitle
  updatedConfig.description = newDescription
  updatedConfig.icon = newIcon
  const newChapter = generateNewChapter()
  if (updatedConfig.chapters) {
    updatedConfig.chapters.push(newChapter)
  } else {
    updatedConfig.chapters = [newChapter]
  }
  setEditingConfig(updatedConfig)
  saveConfigToLocalStorage(updatedConfig)
  setEditMode(true)
  setShowFirstScreen(false)
}

const handlePageRemove = () => {
  const updatedConfig = deepCopy(editingConfig)
  const updatedChapter = updatedConfig.chapters[chapterCounter]

  // remove page
  updatedChapter.pages.splice(pageCounter, 1)

  // last page was removed
  if (updatedChapter.pages.length === 0) {
    updatedConfig.chapters.splice(chapterCounter, 1)

    if (chapterCounter >= updatedConfig.chapters.length) {
      setChapterCounter((prev) => (prev > 0 ? prev - 1 : 0))
    }
  } else {
    const newPageCounter =
      pageCounter >= updatedChapter.pages.length ? updatedChapter.pages.length - 1 : pageCounter
    setPageCounter(newPageCounter)
  }

  setEditingConfig(updatedConfig)
  saveConfigToLocalStorage(updatedConfig)
  if (updatedConfig.chapters.length === 0) setShowFirstScreen(true)
}

/**
 * Reverts the changes made to the current page
 */
const handleRevertChanges = () => {
  const updatedConfig = deepCopy(editingConfig)
  const chapter = updatedConfig.chapters[chapterCounter]
  const page = chapter.pages[pageCounter]

  const originalChapter =
    guideConfig &&
    Array.isArray(guideConfig.chapters) &&
    guideConfig.chapters.find((x) => x.id === chapter.id)

  const originalPage =
    originalChapter &&
    Array.isArray(originalChapter.pages) &&
    originalChapter.pages.find((x) => x.id === page.id)

  if (!guideConfig || !originalChapter) {
    chapter.type = 'infobox'
    chapter.target = undefined
    delete chapter.placement
    page.title = ''
    page.content = ''
  } else if (!originalPage) {
    chapter.type = originalChapter.type
    chapter.target = originalChapter.target ?? null
    chapter.placement = originalChapter.placement
    page.title = ''
    page.content = ''
  } else {
    chapter.type = originalChapter.type
    chapter.target = originalChapter.target ?? null
    chapter.placement = originalChapter.placement
    page.title = originalPage.title
    page.content = originalPage.content
  }

  setEditingConfig(updatedConfig)
  saveConfigToLocalStorage(updatedConfig)
}

const handleRemoveAllChanges = () => {
  setEditingConfig(guideConfig || configTemplate)
  saveConfigToLocalStorage(null)
  setChapterCounter(0)
  setPageCounter(0)
  if (!guideConfig) setShowFirstScreen(true)
}

const openSaveChangesPopup = ({ newTitle, newContent }) => {
  const updatedConfig = deepCopy(editingConfig)
  const updatedPage = updatedConfig.chapters[chapterCounter].pages[pageCounter]

  if (updatedPage.title !== newTitle) updatedPage.title = newTitle
  if (updatedPage.content !== newContent) updatedPage.content = newContent

  setEditingConfig(updatedConfig)
  saveConfigToLocalStorage(updatedConfig)
}

const openFirstScreen = () => setShowFirstScreen(true)

const openChapters = (payload) => {
  handleFirstScreenDataChange(payload)
  setShowFirstScreen(false)
}

const currentChapter = editingConfig.chapters[chapterCounter]

const ChapterWrapper = (props) => {
  if (!currentChapter) return <></>
  const pages = currentChapter.pages
  if (!pages) return <></>
  const currentPage = pages[pageCounter]
  if (!currentPage) return <></>

  const status = currentPage.status.length && Object.entries(currentPage.status[0])[0] // ToDo: mocked!!!

  const buttons = []
  if (chapterCounter || pageCounter) {
    buttons.push({
      variant: 'secondary',
      disabled: false,
      onClick: handleClickPrev,
      label: 'Previous',
    })
  }
  if (isEditMode && chapterCounter === 0 && pageCounter === 0) {
    buttons.push({
      variant: 'secondary',
      disabled: false,
      onClick: openFirstScreen,
      label: 'Guide config',
    })
  }
  if (chapterCounter === editingConfig.chapters.length - 1 && pageCounter === pages.length - 1) {
    if (!isEditMode) {
      buttons.push({
        variant: 'primary',
        disabled: false,
        onClick: handleClose,
        label: 'Finish',
      })
    }
  } else
    buttons.push({
      variant: 'primary',
      disabled: false,
      onClick: handleClickNext,
      label: 'Next',
    })

  const isConfigEdited = !isDeepEqual(editingConfig, guideConfig)

  const originalCurrentChapter =
    guideConfig &&
    Array.isArray(guideConfig.chapters) &&
    guideConfig.chapters.find((chapter) => chapter.id === currentChapter.id)

  const isTargetChanged = () => {
    if (!originalCurrentChapter) return !!currentChapter.target || !!currentChapter.placement
    return (
      !isTargetEqual(currentChapter.target, originalCurrentChapter.target) ||
      currentChapter.placement !== originalCurrentChapter.placement
    )
  }

  const isPageEdited = () => {
    if (!isConfigEdited) return false
    const originalCurrentPage =
      originalCurrentChapter &&
      Array.isArray(originalCurrentChapter.pages) &&
      originalCurrentChapter.pages.find((page) => page.id === currentPage.id)

    const targetChanged = isTargetChanged()
    if (!originalCurrentPage) return !(!currentPage.title && !currentPage.content && !targetChanged)
    return !(isDeepEqual(currentPage, originalCurrentPage) && !targetChanged)
  }

  return (
    <Widget
      src="${REPL_ACCOUNT}/widget/WebGuide.OverlayTrigger"
      loading={<></>}
      props={{
        widgetId: '${REPL_ACCOUNT}/widget/WebGuide.Page',
        guideTitle: editingConfig.title,
        guideDescription: editingConfig.description,
        isConfigEdited,
        isPageEdited: isPageEdited(),
        id: currentChapter.id,
        type: currentChapter.type,
        contextType: currentChapter.target?.type ?? currentChapter.target?.contextType,
        contextId:
          currentChapter.target?.id ??
          currentChapter.target?.if?.id?.eq ??
          currentChapter.target?.if?.widgetSrc?.eq,
        placement: currentChapter.target && currentChapter.placement,
        strategy: currentChapter.target
          ? currentChapter.namespace === 'mweb'
            ? 'fixed'
            : undefined
          : currentChapter.strategy, // ToDo: cannot define strategy for target
        offset: [0, 20],
        navi: {
          currentChapterIndex: chapterCounter,
          totalChapters: editingConfig.chapters.length,
          currentPageIndex: pageCounter,
          totalPages: pages.length,
        },
        onClose: handleClose,
        buttons,
        status: status && {
          type: status[0],
          text: status[1],
        },
        title: currentPage.title,
        content: currentPage.content,
        showChecked: currentChapter.showChecked,
        isEditAllowed,
        onRefAttach:
          currentChapter.type === 'callout' && !noTarget
            ? ({ ref }) => {
                props.attachContextRef(ref)
              }
            : currentChapter.arrowTo === 'insPoint'
              ? ({ ref }) => {
                  props.attachInsPointRef(ref)
                }
              : props.children,
        skin: editingConfig.skin ?? 'META_GUIDE',
        onSkinToggle: handleSkinToggle,
        isEditMode,
        setEditMode,
        startEditTarget: () => setEditTarget(true),
        handleTargetRemove,
        buttonRemoveDisabled:
          currentChapterIndex + 1 === totalChapters && totalChapters === 1 && totalPages === 1,
        onPageDataChange: handlePageDataChange,
        onChapterAdd: handleChapterAdd,
        onPageAdd: handlePageAdd,
        onPageRemove: handlePageRemove,
        onRevertChanges: handleRevertChanges,
        onClickPageIndicator: handleClickPageIndicator,
        handleRemoveAllChanges,
        handleExportConfig,
        handleSave,
        noTarget,
        onPlacementChange: handlePlacementChange,
        contextLevel: props.context?.level,
      }}
    />
  )
}

const ContextTypeLatch = ({ context, variant, contextDimensions }) => {
  if (context.type === 'timeline') {
    return (
      <TimelineLatch
        $variant={variant}
        $width={contextDimensions.width}
        onClick={() => handleTargetSet(context)}
      >
        <TimelineLatchIcon color="white" />
      </TimelineLatch>
    )
  }

  if (
    (context.type === 'notch' && context.id !== 'mutate-button') ||
    context.type === 'mweb-gateway'
  ) {
    return (
      <NotchLatch
        $variant={variant}
        $width={contextDimensions.width}
        $height={contextDimensions.height}
        $top={contextDimensions.top}
        onClick={() => handleTargetSet(context)}
        $position={'right'}
      >
        <NotchLatchIcon />
      </NotchLatch>
    )
  }

  if (context.type === 'mweb-overlay' || context.type === 'mweb-overlay-action') {
    return (
      <NotchLatch
        $variant={variant}
        $width={contextDimensions.width}
        $height={contextDimensions.height}
        $top={contextDimensions.top}
        onClick={() => handleTargetSet(context)}
        $position={'left'}
      >
        <NotchLatchIcon />
      </NotchLatch>
    )
  }
  return null
}

return (
  <>
    {editingConfig.action ? (
      <DappletPortal
        target={MiniOverlayTarget}
        component={() => (
          <Widget
            src="${REPL_ACCOUNT}/widget/WebGuide.Action"
            props={{
              docId: document?.id,
              isActive: showApp,
              onClick: handleActionClick,
            }}
          />
        )}
      />
    ) : null}

    {showApp ? (
      isEditTarget ? (
        <DappletContextPicker onClick={handleTargetSet} LatchComponent={ContextTypeLatch} />
      ) : showFirstScreen ? (
        <DappletPortal
          inMemory
          target={{
            namespace: 'mweb',
            contextType: 'mweb-overlay-action',
            if: { id: { eq: `action-button-web-guide${document ? '-' + document.id : ''}` } },
          }}
          component={(props) => (
            <Widget
              src="${REPL_ACCOUNT}/widget/WebGuide.OverlayTrigger"
              props={{
                // for OverlayTrigger
                widgetId: '${REPL_ACCOUNT}/widget/WebGuide.FirstScreenEdit',
                type: 'callout',
                strategy: 'fixed',
                placement: 'left',
                offset: [0, 25],
                noArrow: true,
                onRefAttach: ({ ref }) => {
                  // ToDo: move to the engine
                  props.attachContextRef(ref)
                },

                // for FirstScreenEdit
                skin: 'FIRST_SCREEN',
                onClose: () => {
                  setShowFirstScreen(false)
                  handleClose()
                },
                onConfigImport: handleConfigImport,
                setEditMode,
                handleRemoveAllChanges,
                isConfigEdited: !isDeepEqual(editingConfig, guideConfig),
                title: document?.metadata.title ?? editingConfig.title,
                description: document?.metadata.description ?? editingConfig.description,
                icon: document?.metadata.image ?? editingConfig.icon,
                hasDocument: !!document,
                handleExportConfig: handleExportConfigFromFirstScreen,
                handleSave: handleSaveFromFirstScreen,
                hasChapters: !!editingConfig.chapters?.length,
                openChapters,
                onStart: handleStartCreation,
                onChapterAdd: handleAddChapterFromFirstScreen,
                didTheGuidePublished: !!guideConfig,
              }}
            />
          )}
        />
      ) : currentChapter?.type === 'infobox' || noTarget ? (
        <OverlayTriggerWrapper>
          <DappletOverlay>
            <ChapterWrapper />
          </DappletOverlay>
        </OverlayTriggerWrapper>
      ) : currentChapter.target ? (
        <>
          <DappletPortal
            inMemory
            target={currentChapter.target}
            component={ChapterWrapper}
            isFirstTargetOnly={currentChapter.isFirstTargetOnly}
          />
          <Highlighter
            target={currentChapter.target}
            isFirstTargetOnly={currentChapter.isFirstTargetOnly}
            styles={{
              borderColor: '#14AE5C',
              backgroundColor: 'rgb(56 255 63 / 10%)',
            }}
          />
        </>
      ) : null
    ) : null}
  </>
)
