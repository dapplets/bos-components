// CONFIG EXAMPLE:
//
// guideConfig={
//   navi: ['PREV', 'NEXT'],
//   load_timeout: '5s',
//   chapterPfx: 'step',
//   chapters: [
//     {
//       pages: [
//         {
//           status: [{ WARN: 'Warning message for Page 1' }],
//           navi: {
//             NEXT: 'waitFor',
//           },
//           contenttype: 'markdown',
//           content: 'Page 1 content',
//         },
//         {
//           status: [{ ERR: 'Error message for Page 2' }],
//           navi: {
//             NEXT: 'waitFor',
//           },
//           contenttype: 'markdown',
//           content: 'Page 2 content',
//         },
//         {
//           status: [{ INFO: 'Information message for Page 3' }],
//           navi: {
//             NEXT: 'waitFor',
//           },
//           contenttype: 'markdown',
//           content: 'Page 3 content',
//         },
//       ],
//     },
//   ],
// }

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
      contextType: "mutation",
      injectTo: "hidden",
      if: { id: { eq: "bos.dapplets.near/mutation/Testing2" } },
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
      id: "bos.dapplets.near/app/Tipping/0",
      type: 'callout',
      namespace: "bos.dapplets.near/parser/twitter",
      contextType: "post",
      injectTo: "avatar",
      if: { id: { eq: "1694995344461894022" } },
      arrowTo: "insPoint",
      pages: [
        {
          id: "bos.dapplets.near/app/Tipping/0/1",
          status: [],
          title: "It's a Tip app.",
          content: "Tortor massa massa placerat pulvinar vestibulum. Dapibus in lacus donec laoreet fringilla massa arcu.",
        },
      ],
    },
    {
      id: "bos.dapplets.near/app/Tipping/1",
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
          id: "bos.dapplets.near/app/Tipping/1/1",
          status: [{ warning: 'Warning message for Page 1' }],
          title: "It's a Tip app.",
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
      if: { id: { eq: "1694995303642939408" } },
      insteadOf: {
        linkId: "2dec2fe13441c1432d7a881e9cb58659",
      },
      pages: [
        {
          id: "bos.dapplets.near/app/Tipping/2/1",
          status: [{ error: 'Error message for Page 2' }],
          content: 'Page 2 content',
        },
      ],
    },
    {
      id: "bos.dapplets.near/app/Tipping/3",
      type: 'callout',
      namespace: "bos.dapplets.near/parser/twitter",
      contextType: "post",
      injectTo: "southPanel",
      if: { id: { eq: "1694995269547438149" } },
      insteadOf: {
        linkId: "2dec2fe13441c1432d7a881e9cb58659",
      },
      pages: [
        {
          id: "bos.dapplets.near/app/Tipping/3/1",
          status: [{ info: 'Information message for Page 3' }],
          content: 'Page 3 content',
        }
      ],
    },
  ],
}

const [chapterCounter, setChapterCounter] = useState(0)
const [pageCounter, setPageCounter] = useState(0)

const handleChapterDecrement = () => {
  setChapterCounter((val) => Math.max(val - 1, 0))
}

const handleChapterIncrement = () => {
  setChapterCounter((val) => Math.min(val + 1, guideConfig?.chapters?.length - 1))
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
  
  //return context?.id !== currentPage?.if?.id || !currentPage
    //? children :
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
        buttons: [
          {
            variant: "secondary",
            disabled: pageCounter === 0,
            onClick: handleClickPrev,
            label: "Prev",
          },
          {
            variant: "primary",
            disabled: pageCounter === pages.length - 1,
            onClick: handleClickNext,
            label: "Next",
          },
        ],
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
        buttons: [
          {
            variant: "secondary",
            disabled: pageCounter === 0,
            onClick: handleClickPrev,
            label: "Prev",
          },
          {
            variant: "primary",
            disabled: pageCounter === pages.length - 1,
            onClick: handleClickNext,
            label: "Next",
          },
        ],
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

return guideConfig?.chapters[chapterCounter]?.type === 'infobox' ? (
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
)


// const CalloutForContext =
//   ({ arrowTo }) =>
//   ({ children, context, attachContextRef, attachInsPointRef }) => {
//     return (
//       <Widget
//         src="bos.dapplets.near/widget/WebGuide.OverlayTrigger"
//         loading={children}
//         props={{
//           type: "callout",
//           navi: {
//             currentStepIndex: counter,
//             totalSteps: stepsCount,
//           },
//           buttons: [
//             {
//               variant: "secondary",
//               disabled: counter === 0,
//               onClick: handleDecrement,
//               label: "Prev",
//             },
//             {
//               variant: "primary",
//               disabled: counter === stepsCount - 1,
//               onClick: handleIncrement,
//               label: "Next",
//             },
//           ],
//           status: {
//             type: "info",
//             text: context.type,
//           },
//           content: context.parsed.id,
//           children:
//             arrowTo === "context"
//               ? ({ ref }) => {
//                   attachContextRef(ref);
//                   return children;
//                 }
//               : arrowTo === "insPoint"
//               ? ({ ref }) => {
//                   attachInsPointRef(ref);
//                   return children;
//                 }
//               : children,
//         }}
//       />
//     );
//   };

// return (
//   <>
//     {counter == 0 ? (
//       <MuWebWrapperPortal
//         target={{
//           namespace: "mweb",
//           contextType: "notch",
//           injectTo: "hidden",
//           if: { id: { eq: "notch" } },
//         }}
//         component={CalloutForContext({ arrowTo: "context" })}
//       />
//     ) : null}

//     {counter == 1 ? (
//       <MuWebWrapperPortal
//         target={{
//           namespace: "mweb",
//           contextType: "mutation",
//           injectTo: "hidden",
//           if: { id: { eq: "bos.dapplets.near/mutation/Testing2" } },
//         }}
//         component={CalloutForContext({ arrowTo: "context" })}
//       />
//     ) : null}

//     {counter == 2 ? (
//       <MuWebWrapperPortal
//         target={{
//           namespace: "bos.dapplets.near/parser/twitter",
//           contextType: "post",
//           injectTo: "avatar",
//           if: { id: { eq: "1694995344461894022" } },
//         }}
//         component={CalloutForContext({ arrowTo: "insPoint" })}
//       />
//     ) : null}

//     {counter == 3 ? (
//       <MuWebWrapperPortal
//         target={{
//           namespace: "bos.dapplets.near/parser/twitter",
//           contextType: "post",
//           injectTo: "southPanel",
//           if: { id: { eq: "1694995344461894022" } },
//           insteadOf: {
//             linkId: "2dec2fe13441c1432d7a881e9cb58659",
//           },
//         }}
//         component={CalloutForContext()}
//       />
//     ) : null}

//     {counter == 4 ? (
//       <MuWebWrapperPortal
//         target={{
//           namespace: "mweb",
//           contextType: "ear-trigger",
//           injectTo: "hidden",
//           if: { id: { eq: "1694995344461894022" } },
//         }}
//         component={CalloutForContext({ arrowTo: "context" })}
//       />
//     ) : null}
//   </>
// );
