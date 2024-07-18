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
`;

const { link } = props;
const [showApp, setShowApp] = useState(true);
const [chapterCounter, setChapterCounter] = useState(0);
const [pageCounter, setPageCounter] = useState(0);
const [isEditMode, setEditMode] = useState(false);
const [isEditTarget, setEditTarget] = useState(false);
const [editingConfig, setEditingConfig] = useState(null);

const response = Near.view('app.webguide.near', 'get_guide', {
  guide_id: link?.id,
});
const guideConfig = response && JSON.parse(response);

if (
  !guideConfig ||
  !guideConfig.chapters?.length ||
  !guideConfig.chapters[0].pages?.length
)
  return <></>;

useEffect(() => {
  setEditingConfig(guideConfig);
}, [guideConfig]);

const handleClose = () => {
  setShowApp(false);
};

const handleAction = () => {
  setShowApp((val) => !val);
  setChapterCounter(0);
  setPageCounter(0);
};

const handleChapterDecrement = () => {
  if (chapterCounter !== 0) {
    setChapterCounter((val) => val - 1);
    setPageCounter(
      editingConfig.chapters[chapterCounter - 1]?.pages?.length
        ? editingConfig.chapters[chapterCounter - 1]?.pages?.length - 1
        : 0
    );
  }
};

const handleChapterIncrement = () => {
  setChapterCounter((val) =>
    Math.min(val + 1, editingConfig.chapters.length - 1)
  );
  setPageCounter(0);
};

const handleClickPrev = () => {
  if (!pageCounter) {
    handleChapterDecrement();
  } else {
    setPageCounter((val) => val - 1);
  }
};

const handleClickNext = () => {
  if (pageCounter === editingConfig.chapters[chapterCounter]?.pages?.length - 1) {
    handleChapterIncrement();
  } else {
    setPageCounter((val) => val + 1);
  }
};

const saveData = (inputData) => {
  if (context?.accountId) {
    Near.call('app.webguide.near', 'set_guide', {
      guide_id: link.id,
      data: inputData,
    });
  }
};

const handleTitleChange = (newTitle) => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig));

  if (
    updatedConfig.chapters[chapterCounter] &&
    updatedConfig.chapters[chapterCounter].pages[pageCounter]
  ) {
    updatedConfig.chapters[chapterCounter].pages[pageCounter].title = newTitle;
  }

  setEditingConfig(updatedConfig);
};

const handleDescriptionChange = (newDescription) => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig));

  if (
    updatedConfig.chapters[chapterCounter] &&
    updatedConfig.chapters[chapterCounter].pages[pageCounter]
  ) {
    updatedConfig.chapters[chapterCounter].pages[pageCounter].content =
      newDescription;
  }

  setEditingConfig(updatedConfig);
};

const addChapter = (newChapter) => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig));
  updatedConfig.chapters.push(newChapter);
  setEditingConfig(updatedConfig);
};


const addPage = (chapterIndex, newPage) => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig));

  if (updatedConfig.chapters[chapterIndex]) {
    updatedConfig.chapters[chapterIndex].pages.push(newPage);
    setEditingConfig(updatedConfig);
  } else {
    console.error("Chapter not found at index:", chapterIndex);
  }
};

const removePage = (chapterIndex, pageIndex) => {
  const updatedConfig = JSON.parse(JSON.stringify(editingConfig));
  
  if (updatedConfig.chapters[chapterIndex] && updatedConfig.chapters[chapterIndex].pages[pageIndex]) {
    updatedConfig.chapters[chapterIndex].pages.splice(pageIndex, 1);
    setEditingConfig(updatedConfig);
  } else {
    console.error("Chapter or page not found at the specified index:", chapterIndex, pageIndex);
  }
};

const ChapterWrapper = (props) => {
  const currentChapter = editingConfig.chapters[chapterCounter];
  if (!currentChapter) return <></>;
  const pages = currentChapter.pages;
  if (!pages) return <></>;
  const currentPage = pages[pageCounter];
  if (!currentPage) return <></>;

  const status =
    currentPage.status.length && Object.entries(currentPage.status[0])[0]; // ToDo: mocked!!!

  const buttons = [];
  if (chapterCounter || pageCounter) {
    buttons.push({
      variant: 'secondary',
      disabled: false,
      onClick: handleClickPrev,
      label: 'Prev',
    });
  }
  if (
    chapterCounter === editingConfig.chapters.length - 1 &&
    pageCounter === pages.length - 1
  ) {
    buttons.push({
      variant: 'primary',
      disabled: false,
      onClick: handleClose,
      label: 'Finish',
    });
  } else
    buttons.push({
      variant: 'primary',
      disabled: false,
      onClick: handleClickNext,
      label: 'Next',
    });

  return (
    <Widget
      src='${REPL_ACCOUNT}/widget/WebGuideTest.OverlayTrigger'
      loading={props?.children}
      props={{
        id: currentChapter.id,
        type: currentChapter.type,
        placement: currentChapter.placement,
        strategy: currentChapter.strategy,
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
          currentChapter.type === 'callout' &&
          currentChapter.arrowTo === 'context'
            ? ({ ref }) => {
                props.attachContextRef(ref);
                return props.children;
              }
            : currentChapter.arrowTo === 'insPoint'
            ? ({ ref }) => {
                props.attachInsPointRef(ref);
                return props.children;
              }
            : props.children,
        skin: currentChapter.skin ?? 'DEFAULT',
        isEditMode,
        setEditMode,
        isEditTarget,
        setEditTarget,
        onTitleChange: handleTitleChange,
        onDescriptionChange: handleDescriptionChange,
        addChapter:addChapter,
        addPage:addPage,
        removePage:removePage,
      }}
    />
  );
};

const iconQuestionMark = (isActive) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
  >
    <rect width='18' height='18' rx='9' fill={isActive ? 'white' : '#02193A'} />
    <path
      d='M7.84446 12.85H9.60281V14.5H7.84446V12.85ZM9.01669 3.5C12.1524 3.621 13.5181 6.591 11.6542 8.8185C11.1677 9.3685 10.3823 9.7315 9.9955 10.1935C9.60281 10.65 9.60281 11.2 9.60281 11.75H7.84446C7.84446 10.8315 7.84446 10.056 8.23716 9.506C8.62399 8.956 9.40939 8.6315 9.89586 8.2685C11.3143 7.0365 10.9626 5.293 9.01669 5.15C8.55035 5.15 8.10311 5.32384 7.77335 5.63327C7.4436 5.94271 7.25835 6.36239 7.25835 6.8H5.5C5.5 5.92479 5.87051 5.08542 6.53001 4.46655C7.18952 3.84768 8.08401 3.5 9.01669 3.5Z'
      fill={isActive ? '#384BFF' : 'white'}
    />
  </svg>
);

const iconTimelineLatch = (color) => (
  <svg
    width='15'
    height='19'
    viewBox='0 0 15 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 18.6H0.39L7.27 8.42C7.36 8.24 7.31 8.15 7.12 8.15H4.28L7.27 2.7C7.36 2.52 7.29 2.43 7.07 2.43H3.26C3.15 2.43 3.06 2.49 2.97 2.61L0.19 10.01C0.17 10.19 0.23 10.28 0.38 10.28H3.13L0 18.6ZM8.5 12.27H8.77L13.99 4.6C14.04 4.52 14.05 4.45 14.03 4.4C14.01 4.35 13.95 4.33 13.86 4.33H11.76L13.94 0.3C14.06 0.1 14 0 13.76 0H11.02C10.89 0 10.79 0.0600001 10.72 0.19L8.64 5.67C8.61 5.76 8.61 5.83 8.65 5.88C8.69 5.93 8.75 5.95 8.84 5.95H10.88L8.5 12.27Z'
      fill={color}
    />
  </svg>
);

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
            src='${REPL_ACCOUNT}/widget/WebGuideTest.Action'
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
      editingConfig.chapters[chapterCounter]?.type === 'infobox' ? (
        <OverlayTriggerWrapper>
          <DappletOverlay>
            <ChapterWrapper />
          </DappletOverlay>
        </OverlayTriggerWrapper>
      ) : (
        <>
          <DappletPortal
            target={{
              namespace: editingConfig.chapters[chapterCounter]?.namespace,
              contextType: editingConfig.chapters[chapterCounter]?.contextType,
              injectTo: editingConfig.chapters[chapterCounter]?.injectTo,
              if: editingConfig.chapters[chapterCounter]?.if,
              insteadOf: editingConfig.chapters[chapterCounter]?.insteadOf,
            }}
            component={ChapterWrapper}
          />
          <Highlighter
            target={{
              namespace: editingConfig.chapters[chapterCounter]?.namespace,
              contextType: editingConfig.chapters[chapterCounter]?.contextType,
              if: editingConfig.chapters[chapterCounter]?.if,
            }}
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
);
