const {
  generateNewPage,
  generateNewChapter,
  deepCopy,
  isDeepEqual,
  isTargetEqual,
  clearTreeBranch,
} = VM.require("${REPL_ACCOUNT}/widget/WebGuide.Utils")

const {
  showApp,
  closeApp,
  setShowApp,
  loggedInAccountId,
  document,
  guideConfig,
  setGuideConfig,
  saveToLinkDB,
  appContext,
  commitDocument,
  notify,
  query,
} = props

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

const configTemplate = { action: true }

const [showFirstScreen, setShowFirstScreen] = useState(false)
const [isEditMode, setEditMode] = useState(false)
const [editingConfig, setEditingConfig] = useState(configTemplate)
const [chapterCounter, setChapterCounter] = useState(0)
const [pageCounter, setPageCounter] = useState(0)
const [isEditTarget, setEditTarget] = useState(false)
const [noTarget, setNoTarget] = useState(false)

const localConfigResponse = Storage.privateGet(appContext + (document ? '/' + document.id : ''))
const localConfig =
  localConfigResponse &&
  (typeof localConfigResponse === 'string' ? JSON.parse(localConfigResponse) : localConfigResponse)

// editing allowed for document owner or mutator if document is not published yet
const isEditAllowed = document
  ? loggedInAccountId === document.authorId
  : loggedInAccountId === mutatorId

useEffect(() => {
  setShowFirstScreen(
    (!guideConfig && !localConfig) || (!!localConfig && !localConfig.chapters.length)
  )
  setEditMode(false)
  setChapterCounter(0)
  setPageCounter(0)
}, [showApp])

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
    query(editingConfig.chapters[chapterCounter].target)
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
    if (nextChapter.type === 'infobox' || query(nextChapter.target)) {
      setChapterCounter(i)
      setPageCounter(0)
      return
    }
  }
  closeApp()
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

if (!showApp) return null

const saveConfigToLocalStorage = (data) => {
  Storage.privateSet(
    appContext + (document ? '/' + document.id : ''),
    !data || isDeepEqual(data, guideConfig) ? undefined : data
  )
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

if (isEditTarget) return <Widget src="${REPL_ACCOUNT}/widget/WebGuide.Tools.Picker" props={{ handleTargetSet }} />

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

const handleConfigImport = (guide) => {
  setEditingConfig(guide)
}

const handleClose = () => {
  closeApp()
  setEditMode(false)
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
      if (prevChapter.type === 'infobox' || query(prevChapter.target)) {
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
      if (nextChapter.type === 'infobox' || query(nextChapter.target)) {
        setChapterCounter(i)
        setPageCounter(0)
        return
      }
    }
    setChapterCounter(0)
    setPageCounter(0)
    closeApp()
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
      ? saveToLinkDB(appContext, { [document.authorId]: config })
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

  if (newTitle !== undefined) updatedPage.title = newTitle
  if (newContent !== undefined) updatedPage.content = newContent

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
      src="${REPL_ACCOUNT}/widget/WebGuide.Components.OverlayTrigger"
      loading={<></>}
      props={{
        widgetId: '${REPL_ACCOUNT}/widget/WebGuide.Pages.Public',
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

const FirstScreenComponent = (props) => (
  <Widget
    src="${REPL_ACCOUNT}/widget/WebGuide.Components.OverlayTrigger"
    props={{
      // for OverlayTrigger
      widgetId: '${REPL_ACCOUNT}/widget/WebGuide.Pages.Info',
      type: 'callout',
      strategy: 'fixed',
      placement: 'left',
      offset: [0, 25],
      noArrow: true,
      onRefAttach: ({ ref }) => props.attachContextRef(ref), // ToDo: move to the engine

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
)

return showFirstScreen ? (
    <DappletPortal
      inMemory
      target={{
        namespace: 'mweb',
        contextType: 'mweb-overlay-action',
        if: { id: { eq: `action-button-web-guide${document ? '-' + document.id : ''}` } },
      }}
      component={FirstScreenComponent}
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
