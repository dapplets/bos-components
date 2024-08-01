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

const iconQuestionMark = (isActive) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="9" fill={isActive ? 'white' : '#02193A'} />
    <path
      d="M7.84446 12.85H9.60281V14.5H7.84446V12.85ZM9.01669 3.5C12.1524 3.621 13.5181 6.591 11.6542 8.8185C11.1677 9.3685 10.3823 9.7315 9.9955 10.1935C9.60281 10.65 9.60281 11.2 9.60281 11.75H7.84446C7.84446 10.8315 7.84446 10.056 8.23716 9.506C8.62399 8.956 9.40939 8.6315 9.89586 8.2685C11.3143 7.0365 10.9626 5.293 9.01669 5.15C8.55035 5.15 8.10311 5.32384 7.77335 5.63327C7.4436 5.94271 7.25835 6.36239 7.25835 6.8H5.5C5.5 5.92479 5.87051 5.08542 6.53001 4.46655C7.18952 3.84768 8.08401 3.5 9.01669 3.5Z"
      fill={isActive ? '#384BFF' : 'white'}
    />
  </svg>
)

const iconTimelineLatch = (color) => (
  <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 18.6H0.39L7.27 8.42C7.36 8.24 7.31 8.15 7.12 8.15H4.28L7.27 2.7C7.36 2.52 7.29 2.43 7.07 2.43H3.26C3.15 2.43 3.06 2.49 2.97 2.61L0.19 10.01C0.17 10.19 0.23 10.28 0.38 10.28H3.13L0 18.6ZM8.5 12.27H8.77L13.99 4.6C14.04 4.52 14.05 4.45 14.03 4.4C14.01 4.35 13.95 4.33 13.86 4.33H11.76L13.94 0.3C14.06 0.1 14 0 13.76 0H11.02C10.89 0 10.79 0.0600001 10.72 0.19L8.64 5.67C8.61 5.76 8.61 5.83 8.65 5.88C8.69 5.93 8.75 5.95 8.84 5.95H10.88L8.5 12.27Z"
      fill={color}
    />
  </svg>
)

const iconNotchLatch = (
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

const NotchLatch = styled.button`
  display: flex;
  position: absolute;
  top: ${(props) => `${props.$height / 2 - 14}px`};
  left: ${(props) => `${props.$position === 'right' ? props.$width : '-35'}px`};
  width: ${(props) => `${props.$position === 'right' ? '28' : '32'}px`};
  height: 29px;
  padding: 0;
  padding-right: ${(props) => `${props.$position === 'right' ? '0' : '4px'}`};
  background: none;
  border: none;
  opacity: ${(props) => (props.$variant === 'current' ? '1' : '.5')};
  cursor: pointer;
`

const { link } = props
const [showApp, setShowApp] = useState(true)
const [chapterCounter, setChapterCounter] = useState(0)
const [pageCounter, setPageCounter] = useState(0)
const [isEditMode, setEditMode] = useState(false)
const [isEditTarget, setEditTarget] = useState(false)
const [editingConfig, setEditingConfig] = useState(null)

const pageTemplate = {
  title: '',
  status: [],
  content: '',
}

const chapterTemplate = {
  type: 'infobox',
  pages: [pageTemplate],
  skin: 'META_GUIDE',
}

const response = Near.view('app.webguide.near', 'get_guide', {
  guide_id: link?.id,
})
const guideConfig = response && JSON.parse(response)

if (
  context.accountId !== link.authorId &&
  (!guideConfig || !guideConfig.chapters?.length || !guideConfig.chapters[0].pages?.length)
)
  return <></>

useEffect(() => {
  setEditingConfig(guideConfig)
}, [guideConfig])

const handleClose = () => {
  setShowApp(false)
  setEditMode(false)
}

const handleAction = () => {
  setShowApp((val) => !val)
  setEditMode(false)
  setChapterCounter(0)
  setPageCounter(0)
}

const handleChapterDecrement = () => {
  if (chapterCounter !== 0) {
    setChapterCounter((val) => val - 1)
    setPageCounter(
      editingConfig.chapters[chapterCounter - 1]?.pages?.length
        ? editingConfig.chapters[chapterCounter - 1]?.pages?.length - 1
        : 0
    )
  }
}

const handleChapterIncrement = () => {
  setChapterCounter((val) => Math.min(val + 1, editingConfig.chapters.length - 1))
  setPageCounter(0)
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

const saveData = (value) => {
  console.log(value);
  switch (value) {
    case 'publish':
      // if (context?.accountId) {
      //   Near.call('app.webguide.near', 'set_guide', {
      //     guide_id: link.id,
      //     data: inputData,
      //   })
      // }
      break
    case 'export':
      return handleExportClick()

    default:
    //   if (context?.accountId) {
    //   Near.call('app.webguide.near', 'set_guide', {
    //     guide_id: link.id,
    //     data: inputData,
    //   })
    // }
  }
}

const handleClickPageIndicator = (index) => {
  if (editingConfig.chapters[chapterCounter]?.pages?.length <= index) {
    return
  } else {
    setPageCounter((val) => (val = index))
  }
}

const handleTitleChange = (newTitle) => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig))

  if (
    updatedConfig.chapters[chapterCounter] &&
    updatedConfig.chapters[chapterCounter].pages[pageCounter]
  ) {
    updatedConfig.chapters[chapterCounter].pages[pageCounter].title = newTitle
  }

  setEditingConfig(updatedConfig)
}

const handleDescriptionChange = (newDescription) => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig))

  if (
    updatedConfig.chapters[chapterCounter] &&
    updatedConfig.chapters[chapterCounter].pages[pageCounter]
  ) {
    updatedConfig.chapters[chapterCounter].pages[pageCounter].content = newDescription
  }

  setEditingConfig(updatedConfig)
}

const handleTargetChange = (newTarget) => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig))

  if (
    updatedConfig.chapters[chapterCounter] &&
    updatedConfig.chapters[chapterCounter].pages[pageCounter]
  ) {
    if (newTarget === null) {
      updatedConfig.chapters[chapterCounter].type = 'infobox'
      updatedConfig.chapters[chapterCounter].target = {}
    } else {
      updatedConfig.chapters[chapterCounter].type = 'callout'
      updatedConfig.chapters[chapterCounter].target = newTarget
    }
  }

  setEditingConfig(updatedConfig)
  setEditTarget(false)
}

const handleChapterAdd = () => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig))
  const newChapter = JSON.parse(JSON.stringify(chapterTemplate))
  newChapter.id = `${context.accountId}/chapter/${Math.trunc(Math.random() * 1000000000)}`
  newChapter.pages[0].id = `${newChapter.id}/page/${Math.trunc(Math.random() * 1000000000)}`
  updatedConfig.chapters.splice(chapterCounter + 1, 0, newChapter)
  setEditingConfig(updatedConfig)
  handleChapterIncrement()
}

const handlePageAdd = () => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig))
  const newPage = JSON.parse(JSON.stringify(pageTemplate))
  newPage.id = `${updatedConfig.chapters[chapterCounter].id}/page/${Math.trunc(Math.random() * 1000000000)}`
  updatedConfig.chapters[chapterCounter].pages.splice(pageCounter + 1, 0, newPage)
  setPageCounter((val) => val + 1)
  setEditingConfig(updatedConfig)
}

const handleCreateTheFirstChapter = () => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig))
  const newChapter = JSON.parse(JSON.stringify(chapterTemplate))
  newChapter.id = `${context.accountId}/chapter/${Math.trunc(Math.random() * 1000000000)}`
  newChapter.pages[0].id = `${newChapter.id}/page/${Math.trunc(Math.random() * 1000000000)}`
  updatedConfig.chapters = [newChapter]
  setEditingConfig(updatedConfig)
}

const handlePageRemove = () => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig))

  if (
    updatedConfig.chapters[chapterCounter] &&
    updatedConfig.chapters[chapterCounter].pages[pageCounter]
  ) {
    updatedConfig.chapters[chapterCounter].pages.splice(pageCounter, 1)

    if (updatedConfig.chapters[chapterCounter].pages.length === 0) {
      updatedConfig.chapters.splice(chapterCounter, 1)

      if (chapterCounter >= updatedConfig.chapters.length) {
        setChapterCounter((prev) => (prev > 0 ? prev - 1 : 0))
      }
    } else {
      const newPageCounter =
        pageCounter >= updatedConfig.chapters[chapterCounter].pages.length
          ? updatedConfig.chapters[chapterCounter].pages.length - 1
          : pageCounter
      setPageCounter(newPageCounter)
    }

    setEditingConfig(updatedConfig)
  } else {
    console.error('Chapter or page not found at the specified index:', chapterCounter, pageCounter)
  }
}

const handleRevertChanges = () => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig))

  if (
    !guideConfig.chapters.find(
      (chapter) => chapter.id === updatedConfig.chapters[chapterCounter].id
    )
  ) {
    updatedConfig.chapters[chapterCounter].type = 'infobox'
    updatedConfig.chapters[chapterCounter].target = undefined
    updatedConfig.chapters[chapterCounter].pages[pageCounter].title = ''
    updatedConfig.chapters[chapterCounter].pages[pageCounter].content = ''
  } else if (
    !guideConfig.chapters[chapterCounter].pages.find(
      (page) => page.id === updatedConfig.chapters[chapterCounter].pages[pageCounter].id
    )
  ) {
    updatedConfig.chapters[chapterCounter].type = guideConfig.chapters[chapterCounter].type
    updatedConfig.chapters[chapterCounter].target =
      guideConfig.chapters[chapterCounter].target ?? undefined
    updatedConfig.chapters[chapterCounter].pages[pageCounter].title = ''
    updatedConfig.chapters[chapterCounter].pages[pageCounter].content = ''
  } else {
    updatedConfig.chapters[chapterCounter].type = guideConfig.chapters[chapterCounter].type
    updatedConfig.chapters[chapterCounter].target =
      guideConfig.chapters[chapterCounter].target ?? undefined
    updatedConfig.chapters[chapterCounter].pages[pageCounter].title =
      guideConfig.chapters[chapterCounter].pages[pageCounter].title
    updatedConfig.chapters[chapterCounter].pages[pageCounter].content =
      guideConfig.chapters[chapterCounter].pages[pageCounter].content
  }

  setEditingConfig(updatedConfig)
}

const handleExportClick = () => {
  const jsonString = JSON.stringify(editingConfig, null, 2)

  const blob = new Blob([jsonString], { type: 'application/json' })
  const file = new File([blob], 'webGuideConfig.json')

  return file
}

const ChapterWrapper = (props) => {
  const currentChapter = editingConfig.chapters[chapterCounter]
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
      label: 'Prev',
    })
  }
  if (chapterCounter === editingConfig.chapters.length - 1 && pageCounter === pages.length - 1) {
    buttons.push({
      variant: 'primary',
      disabled: false,
      onClick: handleClose,
      label: 'Finish',
    })
  } else
    buttons.push({
      variant: 'primary',
      disabled: false,
      onClick: handleClickNext,
      label: 'Next',
    })

  return (
    <Widget
      src="${REPL_ACCOUNT}/widget/WebGuideTest.OverlayTrigger"
      loading={props?.children}
      props={{
        guideTitle: editingConfig.title,
        guideDescription: editingConfig.description,
        id: currentChapter.id,
        type: currentChapter.type,
        contextType: currentChapter.target
          ? currentChapter.target.type
          : currentChapter.contextType,
        contextId: currentChapter.target ? currentChapter.target.id : currentChapter.if?.id?.eq,
        placement: currentChapter.target ? undefined : currentChapter.placement, // ToDo: cannot define placement for target
        strategy: currentChapter.target ? undefined : currentChapter.strategy, // ToDo: cannot define strategy for target
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
        saveData,
        link,
        children:
          currentChapter.type === 'callout' && currentChapter.arrowTo === 'context'
            ? ({ ref }) => {
                props.attachContextRef(ref)
                return props.children
              }
            : currentChapter.arrowTo === 'insPoint'
              ? ({ ref }) => {
                  props.attachInsPointRef(ref)
                  return props.children
                }
              : props.children,
        skin: currentChapter.skin ?? 'DEFAULT',
        isEditMode,
        setEditMode,
        startEditTarget: () => setEditTarget(true),
        handleTargetChange,
        buttonRemoveDisabled:
          currentChapterIndex + 1 === totalChapters && totalChapters === 1 && totalPages === 1,
        onTitleChange: handleTitleChange,
        onDescriptionChange: handleDescriptionChange,
        onChapterAdd: handleChapterAdd,
        onPageAdd: handlePageAdd,
        onPageRemove: handlePageRemove,
        onRevertChanges: handleRevertChanges,
        onClickPageIndicator: handleClickPageIndicator,
        items: [
          { value: 'publish', title: 'Publish' },
          { value: 'export', title: 'Export guide' },
        ],
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
        onClick={() => handleTargetChange(context)}
      >
        {iconTimelineLatch('white')}
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
        onClick={() => handleTargetChange(context)}
        $position={'right'}
      >
        {iconNotchLatch}
      </NotchLatch>
    )
  }
  if (context.type === 'mweb-overlay' || context.type === 'mweb-overlay-action') {
    return (
      <NotchLatch
        $variant={variant}
        $width={contextDimensions.width}
        $height={contextDimensions.height}
        onClick={() => handleTargetChange(context)}
        $position={'left'}
      >
        {iconNotchLatch}
      </NotchLatch>
    )
  }
  return null
}

return (
  <>
    {editingConfig.action ? (
      <DappletPortal
        target={{
          namespace: 'mweb',
          contextType: 'mweb-overlay',
          injectTo: 'mweb-actions-panel',
          if: { id: { eq: 'mweb-overlay' } },
          arrowTo: 'context',
        }}
        component={() => (
          <Widget
            src="${REPL_ACCOUNT}/widget/WebGuideTest.Action"
            props={{
              appId: 'web-guide-test',
              tooltip: showApp ? 'Stop Web Guide' : 'Run Web Guide',
              isActive: showApp,
              handleAction,
              children: iconQuestionMark(showApp),
            }}
          />
        )}
      />
    ) : null}
    {showApp ? (
      isEditTarget ? (
        <DappletContextPicker
          target={[
            {
              namespace: NAMESPACE,
              contextType: 'timeline',
              if: {},
            },
            {
              namespace: NAMESPACE,
              contextType: 'post',
              if: {},
            },
            {
              namespace: NAMESPACE,
              contextType: 'postSouthButton',
              if: {},
            },
            {
              namespace: NAMESPACE,
              contextType: 'profile',
              if: {},
            },
            {
              namespace: 'mweb',
              contextType: 'mweb-overlay',
              if: { id: { eq: 'mutation-button' } },
            },
            {
              namespace: 'mweb',
              contextType: 'mweb-overlay',
              if: { id: { eq: 'open-apps-button' } },
            },
            {
              namespace: 'mweb',
              contextType: 'mweb-overlay-action',
              if: {},
            },
            {
              namespace: 'mweb',
              contextType: 'injected-widget',
              if: {},
            },
            {
              namespace: 'mweb',
              contextType: 'notch',
              if: {},
            },
          ]}
          onClick={handleTargetChange}
          LatchComponent={ContextTypeLatch}
        />
      ) : !editingConfig.chapters.length ? (
        <DappletPortal
          target={{
            namespace: 'mweb',
            contextType: 'mweb-overlay-action',
            if: { id: { eq: 'web-guide-action-web-guide-test' } },
          }}
          component={(props) => (
            <Widget
              src="${REPL_ACCOUNT}/widget/WebGuideTest.FirstScreenEdit"
              props={{
                skin: 'META_GUIDE',
                handleCreateTheFirstChapter,
                onClose: handleClose,
                children: ({ ref }) => {
                  props.attachContextRef(ref)
                  return props.children
                },
              }}
            />
          )}
        />
      ) : editingConfig.chapters[chapterCounter]?.type === 'infobox' ? (
        <OverlayTriggerWrapper>
          <DappletOverlay>
            <ChapterWrapper />
          </DappletOverlay>
        </OverlayTriggerWrapper>
      ) : (
        <>
          <DappletPortal
            target={
              editingConfig.chapters[chapterCounter]?.target ?? {
                namespace: editingConfig.chapters[chapterCounter]?.namespace,
                contextType: editingConfig.chapters[chapterCounter]?.contextType,
                injectTo: editingConfig.chapters[chapterCounter]?.injectTo,
                if: editingConfig.chapters[chapterCounter]?.if,
                insteadOf: editingConfig.chapters[chapterCounter]?.insteadOf,
              }
            }
            component={ChapterWrapper}
          />
          <Highlighter
            target={
              editingConfig.chapters[chapterCounter]?.target ?? {
                namespace: editingConfig.chapters[chapterCounter]?.namespace,
                contextType: editingConfig.chapters[chapterCounter]?.contextType,
                if: editingConfig.chapters[chapterCounter]?.if,
              }
            }
            styles={{
              borderColor: '#14AE5C',
              backgroundColor: 'rgb(56 255 63 / 10%)',
              // borderStyle: 'dashed',
            }}
            // filled
            // icon={iconTimelineLatch('#14AE5C')}
            // icon={() => <></>}
            // action={() => console.log('Highlighter action')}
          />
        </>
      )
    ) : null}
  </>
)
