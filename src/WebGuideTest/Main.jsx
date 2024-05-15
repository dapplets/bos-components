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

const guideConfig = {
  chapters: [
    {
      id: "bos.dapplets.near/gateway/MutableWeb",
      type: 'infobox',
      if: { id: "1694995344461894022" }, // ToDo: should be another trigger
      // showChecked: true,
      pages: [
        {
          id: "bos.dapplets.near/gateway/MutableWeb/Welcome",
          title: "You’re entering Mutable Web",
          status: [{ info: 'You must be logged in to make all features available' }],
          content: "\nMutable Web is a new web3 paradigm that allows anyone to add custom functionality to existing websites and share them within your community — no matter who owns the website.\n\nBecome the co-owner of any website you are using!\n\n### Mutation switch\n\n![](https://raw.githubusercontent.com/dapplets/bos-components/main/assets/onboarding-008.png)\n\nYou can switch between website mutations created by different communities.\n\nMutable Web also works on [Twitter](https://twitter.com/MrConCreator) — check out the Web Guide there\n",
        },
      ]
    },
    {
      id: "bos.dapplets.near/gateway/MutableWebDropdown/1",
      type: 'callout',
      placement: 'right',
      strategy: 'fixed',
      namespace: "mweb",
      contextType: "mweb-gateway",
      injectTo: "mutation-wrapper",
      if: { id: { eq: "mutation-wrapper" } },
      arrowTo: "context",
      pages: [
        {
          id: "bos.dapplets.near/gateway/MutableWebDropdown/1/1",
          title: "Mutation switch",
          status: [{ info: 'Click on the dropdown box' }],
          content: "Mutation switch allows user to choose between applications’ sets.",
        },
      ]
    },
    {
      id: "bos.dapplets.near/gateway/MutableWebDropdown/2",
      type: 'callout',
      strategy: 'fixed',
      placement: 'right',
      namespace: "mweb",
      contextType: "mweb-gateway",
      injectTo: "mutations-list",
      if: { id: { eq: "mutations-list" } },
      arrowTo: "context",
      pages: [
        {
          id: "bos.dapplets.near/gateway/MutableWebDropdown/2/1",
          title: "All mutations",
          status: [],
          content: "This is the list of all available mutations.",
        },
      ]
    },
    {
      id: "bos.dapplets.near/app/Tipping/1",
      type: 'callout',
      namespace: "bos.dapplets.near/parser/near-social-json",
      contextType: "post",
      injectTo: "avatar",
      if: { id: { eq: "dappletsproject.near/104105338" } },
      arrowTo: "insPoint",
      pages: [
        {
          id: "bos.dapplets.near/app/Tipping/1/1",
          status: [],
          title: "Tipping app",
          content: "If you want to modestly thank the author of the tweet you like...",
        },
      ],
    },
    {
      id: "bos.dapplets.near/app/Tipping/2",
      type: "callout",
      namespace: "mweb",
      contextType: "injected-widget",
      injectTo: "hidden",
      if: {
        parentContextId: { eq: "dappletsproject.near/104105338" },
        widgetSrc: { eq: "bos.dapplets.near/widget/Tipping.Main" },
      },
      arrowTo: "context",
      pages: [
        {
          id: "bos.dapplets.near/app/Tipping/2/1",
          status: [],
          title: "Tipping app",
          content: "... you can send them a tip through our application.",
        },
      ],
    },
    {
      id: "bos.dapplets.near/mutation/EarTrigger",
      type: 'callout',
      namespace: "mweb",
      contextType: "ear-trigger",
      injectTo: "hidden",
      if: { id: { eq: "dappletsproject.near/104105338" } },
      arrowTo: "context",
      pages: [
        {
          id: "bos.dapplets.near/mutation/EarTrigger/1",
          status: [],
          title: "Apps control panel",
          content: 'We add the App control panel to every post. By using it the user can add to the right-on post or inside the panel widgets, which expands the browser workflow possibilities.',
        },
      ],
    },
  ],
}

const [showApp, setShowApp] = useState(true)
const [chapterCounter, setChapterCounter] = useState(0)
const [pageCounter, setPageCounter] = useState(0)

if (
  !guideConfig
  || !guideConfig.chapters?.length
  || !guideConfig.chapters[0].pages?.length
) return <></>

const handleClose = () => {
  setShowApp(false)
}

const handleChapterDecrement = () => {
  if (chapterCounter !== 0) {
    setChapterCounter((val) => val - 1)
    setPageCounter(
      guideConfig.chapters[chapterCounter - 1]?.pages?.length
        ? guideConfig.chapters[chapterCounter - 1]?.pages?.length - 1
        : 0
    )
  }
}

const handleChapterIncrement = () => {
  setChapterCounter((val) => Math.min(val + 1, guideConfig.chapters.length - 1))
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
  if (pageCounter === guideConfig.chapters[chapterCounter]?.pages?.length - 1) {
    handleChapterIncrement()
  } else {
    setPageCounter((val) => val + 1)
  }
}

const ChapterWrapper = (props) => {
  const currentChapter = guideConfig.chapters[chapterCounter]
  if (!currentChapter) return <></>
  const pages = currentChapter.pages
  if (!pages) return <></>
  const currentPage = pages[pageCounter]
  if (!currentPage) return <></>

  const status = currentPage.status.length&& Object.entries(currentPage.status[0])[0] // ToDo: mocked!!!

  const buttons = []
  if (chapterCounter || pageCounter) {
    buttons.push({
      variant: "secondary",
      disabled: false,
      onClick: handleClickPrev,
      label: "Prev",
    })
  }
  if (chapterCounter === guideConfig.chapters.length - 1 && pageCounter === pages.length - 1) {
    buttons.push({
      variant: "primary",
      disabled: false,
      onClick: handleClose,
      label: "Finish",
    })
  } else (
    buttons.push({
      variant: "primary",
      disabled: false,
      onClick: handleClickNext,
      label: "Next",
    })
  )

  return  (
    <Widget
      src='bos.dapplets.near/widget/WebGuideTest.OverlayTrigger'
      loading={props?.children}
      props={{
        type: currentChapter.type,
        placement: currentChapter.placement,
        strategy: currentChapter.strategy,
        navi: {
          currentChapterIndex: chapterCounter,
          totalChapters: guideConfig.chapters.length,
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
        children: currentChapter.type === 'callout'
          && currentChapter.arrowTo === "context"
            ? ({ ref }) => {
                props.attachContextRef(ref);
                return props.children;
              }
            : currentChapter.arrowTo === "insPoint"
            ? ({ ref }) => {
                props.attachInsPointRef(ref);
                return props.children;
              }
            : props.children,
      }}
    />
  )
}


return showApp ? (guideConfig.chapters[chapterCounter]?.type === 'infobox' ? (
  <OverlayTriggerWrapper>
    <DappletOverlay>
      <ChapterWrapper/>
    </DappletOverlay>
  </OverlayTriggerWrapper>
) : (
  <DappletPortal
    target={{
      namespace: guideConfig.chapters[chapterCounter]?.namespace,
      contextType: guideConfig.chapters[chapterCounter]?.contextType,
      injectTo: guideConfig.chapters[chapterCounter]?.injectTo,
      if: guideConfig.chapters[chapterCounter]?.if,
      insteadOf: guideConfig.chapters[chapterCounter]?.insteadOf,
    }}
    component={ChapterWrapper}
  />
)) : <></>
