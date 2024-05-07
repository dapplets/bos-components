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
      id: "bos.dapplets.near/gateway/MutableWebExtension",
      type: 'infobox',
      if: { id: "1694995344461894022" }, // ToDo: should be another trigger
      showChecked: true,
      pages: [
        {
          id: "bos.dapplets.near/gateway/MutableWebExtension/Welcome",
          title: "You’re entering Mutable Web",
          status: [{ warning: 'Warning message for Page 0' }],
          content: "\nMutable Web is a new web3 paradigm that allows anyone to add custom functionality to existing websites and share them within your community— no matter who owns the website.\n\nBecome the co-owner of any website you are using!\n\n### Mutation switch\n\n![](https://raw.githubusercontent.com/dapplets/bos-components/main/assets/onboarding-video-001.webp)\n\nYou can switch between website mutations created by different communities.\n\n[See more examples on our playground](https://twitter.com/MrConCreator)\n",
        },
      ]
    },
    {
      id: "bos.dapplets.near/gateway/MutableWebExtensionNotch",
      type: 'callout',
      namespace: "mweb",
      contextType: "notch",
      injectTo: "hidden",
      if: { id: { eq: "notch" } },
      arrowTo: "context",
      pages: [
        {
          id: "bos.dapplets.near/gateway/MutableWebExtensionNotch/Notch",
          title: "it's a mutation switch. Open it.",
          status: [{ info: 'Click on dropdown box.' }],
          content: "Aenean adipiscing nulla sollicitudin nibh enim. Nulla id vestibulum proin nullam scelerisque id.",
        },
      ]
    },
    {
      id: "bos.dapplets.near/gateway/MutableWebExtensionDropdown/1",
      type: 'callout',
      namespace: "mweb",
      contextType: "mutation",
      injectTo: "hidden",
      if: { id: { eq: "bos.dapplets.near/mutation/Sandbox" } },
      arrowTo: "context",
      pages: [
        {
          id: "bos.dapplets.near/gateway/MutableWebExtensionDropdown/1/1",
          title: "It's a sandbox story first (1/2)",
          status: [],
          content: "We are now in a sandbox mutation. Through it, we can suspendisse mattis interdum.",
        },
        {
          id: "bos.dapplets.near/gateway/MutableWebExtensionDropdown/1/2",
          title: "It's a sandbox story first (2/2)",
          status: [],
          content: "Auctor volutpat nisl quis. Scelerisque morbi eget volutpat aliquet vitae curabitur non.",
        },
      ]
    },
    {
      id: "bos.dapplets.near/gateway/MutableWebExtensionDropdown/2",
      type: 'callout',
      namespace: "mweb",
      contextType: "notch",
      injectTo: "hidden",
      if: { id: { eq: "mutations-list-block" } },
      arrowTo: "context",
      pages: [
        {
          id: "bos.dapplets.near/gateway/MutableWebExtensionDropdown/2/1",
          title: "It's a sandbox story inner",
          status: [],
          content: "We are now in a sandbox mutation. Through it, we can suspendisse mattis interdum auctor volutpat nisl quis. Scelerisque morbi eget volutpat aliquet vitae curabitur non.",
        },
      ]
    },
    {
      id: "bos.dapplets.near/gateway/MutableWebExtensionDropdown/3",
      type: 'callout',
      namespace: "mweb",
      contextType: "notch",
      injectTo: "hidden",
      if: { id: { eq: "mutate-button" } },
      arrowTo: "context",
      pages: [
        {
          id: "bos.dapplets.near/gateway/MutableWebExtensionDropdown/3/1",
          title: "It's a sandbox story last",
          status: [],
          content: "We are now in a sandbox mutation. Through it, we can suspendisse mattis interdum auctor volutpat nisl quis. Scelerisque morbi eget volutpat aliquet vitae curabitur non.",
        },
      ]
    },
    {
      id: "bos.dapplets.near/app/Tipping/1",
      type: 'callout',
      namespace: "bos.dapplets.near/parser/twitter",
      contextType: "post",
      injectTo: "avatar",
      if: { id: { eq: "1694995344461894022" } },
      arrowTo: "insPoint",
      pages: [
        {
          id: "bos.dapplets.near/app/Tipping/1/1",
          status: [],
          title: "It's a Tip app",
          content: "Tortor massa massa placerat pulvinar vestibulum. Dapibus in lacus donec laoreet fringilla massa arcu.",
        },
      ],
    },
    {
      id: "bos.dapplets.near/app/Tipping/2",
      type: 'callout',
      namespace: "bos.dapplets.near/parser/twitter",
      contextType: "post",
      injectTo: "southPanel",
      if: { id: { eq: "1694995344461894022" } },
      insteadOf: {
        linkId: "2dec2fe13441c1432d7a881e9cb58659",
      },
      pages: [
        {
          id: "bos.dapplets.near/app/Tipping/2/1",
          status: [],
          title: "It's a Tip app",
          content: "Tortor massa massa placerat pulvinar vestibulum. Dapibus in lacus donec laoreet fringilla massa arcu.",
        },
      ],
    },
    {
      id: "bos.dapplets.near/mutation/EarTrigger",
      type: 'callout',
      namespace: "mweb",
      contextType: "ear-trigger",
      injectTo: "hidden",
      if: { id: { eq: "1694995344461894022" } },
      arrowTo: "context",
      pages: [
        {
          id: "bos.dapplets.near/mutation/EarTrigger/1",
          status: [],
          title: "It's an Ear Trigger",
          content: 'Page 2 content',
        },
      ],
    },
  ],
}

const [showApp, setShowApp] = useState(true)
const [chapterCounter, setChapterCounter] = useState(0)
const [pageCounter, setPageCounter] = useState(0)

const handleClose = () => {
  setShowApp(false)
}

const handleChapterDecrement = () => {
  if (chapterCounter !== 0) {
    setChapterCounter((val) => val - 1)
    setPageCounter(
      guideConfig?.chapters[chapterCounter - 1]?.pages?.length
        ? guideConfig?.chapters[chapterCounter - 1]?.pages?.length - 1
        : 0
    )
  }
}

const handleChapterIncrement = () => {
  setChapterCounter((val) => Math.min(val + 1, guideConfig?.chapters?.length - 1))
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
  if (pageCounter === guideConfig?.chapters[chapterCounter]?.pages.length - 1) {
    handleChapterIncrement()
  } else {
    setPageCounter((val) => val + 1)
  }
}

const CalloutsWrapper = (arrowTo) => ({ children, attachContextRef, attachInsPointRef }) => {
  const currentChapter = guideConfig?.chapters[chapterCounter]
  const pages = currentChapter?.pages
  const currentPage = pages[pageCounter]
  const status = currentPage?.status.length && Object.entries(currentPage?.status[0])[0] // ToDo: mocked!!!

  const buttons = []
  if (chapterCounter || pageCounter) {
    buttons.push({
      variant: "secondary",
      disabled: false,
      onClick: handleClickPrev,
      label: "Prev",
    })
  }
  if (chapterCounter === guideConfig?.chapters?.length - 1 && pageCounter === guideConfig?.chapters[chapterCounter]?.pages.length - 1) {
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
      src="bos.dapplets.near/widget/WebGuide.OverlayTrigger"
      loading={children}
      props={{
        type: currentChapter?.type,
        navi: {
          currentChapterIndex: chapterCounter,
          totalChapters: guideConfig?.chapters?.length,
          currentPageIndex: pageCounter,
          totalPages: pages.length,
        },
        onClose: handleClose,
        buttons,
        status: status && {
          type: status[0],
          text: status[1],
        },
        title: currentPage?.title,
        content: currentPage?.content,
        showChecked: currentChapter.showChecked,
        children:
          arrowTo === "context"
            ? ({ ref }) => {
                attachContextRef(ref);
                return children;
              }
            : arrowTo === "insPoint"
            ? ({ ref }) => {
                attachInsPointRef(ref);
                return children;
              }
            : children,
      }}
    />
  )
}

const InfoBoxesWrapper = () => {
  const currentChapter = guideConfig?.chapters[chapterCounter]
  const pages = currentChapter?.pages
  const currentPage = pages[pageCounter]
  const status = currentPage?.status.length && Object.entries(currentPage?.status[0])[0] // ToDo: mocked!!!

  const buttons = []
  if (chapterCounter || pageCounter) {
    buttons.push({
      variant: "secondary",
      disabled: false,
      onClick: handleClickPrev,
      label: "Prev",
    })
  }
  if (chapterCounter === guideConfig?.chapters?.length - 1 && pageCounter === guideConfig?.chapters[chapterCounter]?.pages.length - 1) {
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

  return (
    <Widget
      src="bos.dapplets.near/widget/WebGuide.InfoBox"
      props={{
        type: currentPage.type,
        navi: {
          currentChapterIndex: chapterCounter,
          totalChapters: guideConfig?.chapters?.length,
          currentPageIndex: pageCounter,
          totalPages: pages.length,
        },
        onClose: handleClose,
        buttons,
        status: status && {
          type: status[0],
          text: status[1],
        },
        title: currentPage?.title,
        content: currentPage?.content,
        showChecked: currentChapter.showChecked,
      }}
    />
  )
}

return showApp ? (guideConfig?.chapters[chapterCounter]?.type === 'infobox' ? (
  <OverlayTriggerWrapper>
    <DappletOverlay>
      <InfoBoxesWrapper />
    </DappletOverlay>
  </OverlayTriggerWrapper>
  ) : (
  <MuWebWrapperPortal
    target={{
      namespace: guideConfig?.chapters[chapterCounter]?.namespace,
      contextType: guideConfig?.chapters[chapterCounter]?.contextType,
      injectTo: guideConfig?.chapters[chapterCounter]?.injectTo,
      if: guideConfig?.chapters[chapterCounter]?.if,
      insteadOf: guideConfig?.chapters[chapterCounter]?.insteadOf,
    }}
    component={CalloutsWrapper(guideConfig?.chapters[chapterCounter]?.arrowTo)}
  />
)) : <></>
