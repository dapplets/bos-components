const DefaultTheme = styled.div`
  --bgMain: #fffffe;
  --colorMain: #02193a;
  --colorP: #777777;
  --border: #02193a;
  --cardBg: rgba(248, 249, 255, 1);

  --navActive: #384bff;
  --navInactiveBg: #e3e3e3;
  --navInactiveBorder: none;

  --statusInfoCol: #246efd;
  --statusWarningCol: #d0911a;
  --statusErrorCol: #db504a;
  --statusInfoBg: rgba(234, 241, 255, 1);
  --statusWarningBg: rgba(255, 248, 235, 1);
  --statusErrorBg: rgba(246, 240, 246, 1);

  --primBtnCol: white;
  --primBtnBg: #02193a;
  --primBtnBg01: #02193a1a;
  --primBtnBgH: #1c3559;
  --primBtnBgA: #020c19;
  --secBtnCol: #02193a;
  --secBtnBorderCol: #e2e2e5;
  --secBtnBgH: #eee;
  --secBtnBgA: #ddd;
`

const MetaGuideTheme = styled.div`
  --bgMain: #4e77e1;
  --colorMain: white;
  --colorP: rgba(248, 249, 255, 1);
  --border: #4e77e1;
  --cardBg: rgba(255, 255, 255, 0.1);

  --navActive: white;
  --navInactiveBg: #4e77e1;
  --navInactiveBorder: white;

  --statusInfoCol: white;
  --statusWarningCol: #d0911a;
  --statusErrorCol: #db504a;
  --statusInfoBg: rgba(255, 255, 255, 0.2);
  --statusWarningBg: rgba(255, 255, 255, 0.2);
  --statusErrorBg: rgba(255, 255, 255, 0.2);

  --primBtnCol: #4e77e1;
  --primBtnBg: white;
  --primBtnBg01: #ffffff1a;
  --primBtnBgH: rgb(242 243 255);
  --primBtnBgA: rgb(222 225 255);
  --secBtnCol: white;
  --secBtnBorderCol: white;
  --secBtnBgH: #5f84e4;
  --secBtnBgA: #6c8ee5;
`

const Theme = ({ skin, children }) => {
  switch (skin) {
    case 'DEFAULT':
      return <DefaultTheme children={children} />
    case 'META_GUIDE':
      return <MetaGuideTheme children={children} />
    default:
      return <></>
  }
}

const InfoBox = styled.div`
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 546px;
  height: 656px;
  border: 1px solid var(--border);
  background: var(--bgMain);
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  box-shadow: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  align-items: center;
  justify-content: flex-start;

  animation: falling-animation 0.3s linear forwards;

  @keyframes falling-animation {
    from {
      transform: translate(-50%, -200%);
    }

    to {
      transform: translate(-50%, -50%);
    }
  }
`

const Callout = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 320px;
  padding: 12px 14px 14px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bgMain);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  &.edit-mode {
    width: 360px;
  }
`

const Header = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: var(--colorMain);
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const TopLine = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
  margin: 0;
  padding: 0;
`

const CalloutHeaderCaption = styled.div`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--colorMain);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 149%;
  flex: 1;
`

const PagesIndicators = styled.div`
  width: auto;
  height: 24px;
  padding: 4px;
  gap: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  flex: 1;
`

const Navi = styled.button`
  box-sizing: border-box;
  padding: 0 !important;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background: var(--navActive);
    border: none;
  }

  &.inactive {
    background: var(--navInactiveBg);
    border: 1px solid var(--navInactiveBorder);
  }
`

const HeaderButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
  justify-content: flex-end;
`

const Close = styled.button`
  display: flex;
  flex-direction: row-reverse;
  background: inherit;
  outline: none;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`

const EditButton = styled.button`
  display: flex;
  flex-direction: row-reverse;
  background: inherit;
  outline: none;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`

const Title = styled.h1`
  padding: 0;
  margin: 0 0 -10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: var(--colorMain);
  font-style: normal;
  font-weight: 600;
  line-height: 149%;

  &.infobox {
    font-size: 32px;
  }

  &.callout {
    font-size: 18px;
  }
`

const Card = styled.div`
  position: relative;
  overflow: auto;
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  box-sizing: border-box;
  padding: 12px 20px;
  gap: 10px;
  border: none;
  border-radius: 20px;
  width: 100%;
  background: var(--cardBg);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  overflow-x: hidden;
`

const MarkdownWrapper = styled.div`
  width: 100%;
  word-break: break-word;

  h3 {
    padding: 8px 0 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: var(--colorMain);
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    text-indent: 16px;
  }

  img {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: auto !important;
    border-radius: 10px;
    flex: none;
    flex-grow: 0;
    border: 1px solid rgb(207, 217, 222);
  }

  p {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 149%;
    color: var(--colorP);
    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }

  a {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 149%;
    text-decoration-line: underline !important;
    color: var(--colorMain);
    cursor: 'poiner';
  }
`

const Footer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 20px;
`

const ContainerCheckbox = styled.div`
  display: flex;

  &.infobox {
    align-items: flex-end;
  }

  &.callout {
    align-items: flex-start;
  }
`

const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  border: 1px solid #384bff;
  margin-right: 8px;
`

const Label = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 17.88px;
  color: #7a818b;
  cursor: pointer;
  width: max-content;
`

const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  flex-grow: 1;

  &.infobox {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  &.callout {
    flex-direction: row;
    justify-content: center;
  }
`

const ActionButton = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 180px;
  height: 42px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 90px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;

  &.primary {
    border: initial;
    background: var(--primBtnBg);
    color: var(--primBtnCol);

    &:hover&:not(:disabled) {
      background: var(--primBtnBgH);
    }

    &:active&:not(:disabled) {
      background: var(--primBtnBgA);
    }
    &:disabled {
      opacity: 0.3;
    }
  }

  &.secondary {
    border: 1px solid var(--secBtnBorderCol);
    background: initial;
    color: var(--secBtnCol);

    &:hover&:not(:disabled) {
      background: var(--secBtnBgH);
    }

    &:active&:not(:disabled) {
      background: var(--secBtnBgA);
    }

    &:disabled {
      opacity: 0.3;
    }
  }
`

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 6L6 18"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6.5L18 18.5"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const editIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.76923 8H5.84615C5.35652 8 4.88695 8.1945 4.54073 8.54073C4.1945 8.88695 4 9.35652 4 9.84615V18.1538C4 18.6435 4.1945 19.1131 4.54073 19.4593C4.88695 19.8055 5.35652 20 5.84615 20H14.1538C14.6435 20 15.1131 19.8055 15.4593 19.4593C15.8055 19.1131 16 18.6435 16 18.1538V17.2308"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9999 6.00009L17.9999 9.00006M19.3849 7.58508C19.7787 7.19123 20 6.65707 20 6.10009C20 5.54311 19.7787 5.00894 19.3849 4.6151C18.9911 4.22126 18.4569 4 17.8999 4C17.3429 4 16.8088 4.22126 16.4149 4.6151L8 13V16H11L19.3849 7.58508Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const viewIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M5.77778 20C5.28889 20 4.87052 19.8261 4.52267 19.4782C4.17481 19.1304 4.00059 18.7117 4 18.2222V5.77778C4 5.28889 4.17422 4.87052 4.52267 4.52267C4.87111 4.17481 5.28948 4.00059 5.77778 4H18.2222C18.7111 4 19.1298 4.17422 19.4782 4.52267C19.8267 4.87111 20.0006 5.28948 20 5.77778V18.2222C20 18.7111 19.8261 19.1298 19.4782 19.4782C19.1304 19.8267 18.7117 20.0006 18.2222 20H5.77778ZM5.77778 18.2222H18.2222V7.55556H5.77778V18.2222ZM12 16.4444C10.7852 16.4444 9.70015 16.115 8.74489 15.456C7.78963 14.797 7.09689 13.9413 6.66667 12.8889C7.0963 11.837 7.78904 10.9816 8.74489 10.3227C9.70074 9.6637 10.7858 9.33393 12 9.33333C13.2142 9.33274 14.2996 9.66252 15.256 10.3227C16.2124 10.9828 16.9049 11.8382 17.3333 12.8889C16.9037 13.9407 16.2113 14.7964 15.256 15.456C14.3007 16.1156 13.2154 16.445 12 16.4444ZM12 14.2222C11.6296 14.2222 11.315 14.0927 11.056 13.8338C10.797 13.5748 10.6673 13.2599 10.6667 12.8889C10.6661 12.5179 10.7959 12.2033 11.056 11.9449C11.3161 11.6865 11.6308 11.5567 12 11.5556C12.3692 11.5544 12.6841 11.6841 12.9449 11.9449C13.2056 12.2056 13.3351 12.5203 13.3333 12.8889C13.3316 13.2575 13.2021 13.5724 12.9449 13.8338C12.6877 14.0951 12.3727 14.2246 12 14.2222ZM12 15.1111C12.6222 15.1111 13.1481 14.8963 13.5778 14.4667C14.0074 14.037 14.2222 13.5111 14.2222 12.8889C14.2222 12.2667 14.0074 11.7407 13.5778 11.3111C13.1481 10.8815 12.6222 10.6667 12 10.6667C11.3778 10.6667 10.8519 10.8815 10.4222 11.3111C9.99259 11.7407 9.77778 12.2667 9.77778 12.8889C9.77778 13.5111 9.99259 14.037 10.4222 14.4667C10.8519 14.8963 11.3778 15.1111 12 15.1111Z"
      fill="white"
    />
  </svg>
)

const {
  isConfigEdited,
  isPageEdited,
  contextId,
  contextType,
  navi,
  onClose,
  buttons,
  skin,
  title,
  content,
  mutatorId,
  isEditMode,
  setEditMode,
  startEditTarget,
  handleTargetRemove,
  onPageDataChange,
  onPageAdd,
  onChapterAdd,
  onPageRemove,
  buttonRemoveDisabled,
  onRevertChanges,
  handleRemoveAllChanges,
  onClickPageIndicator,
  handleExportConfig,
  handleSave,
  noTarget,
} = props

const header = (
  <Header>
    <TopLine>
      <HeaderButtonGroup>
        {context.accountId === mutatorId ? (
          <EditButton onClick={() => setEditMode((val) => !val)}>
            {isEditMode ? viewIcon : editIcon}
          </EditButton>
        ) : null}
        <Close onClick={onClose}>
          <CloseIcon />
        </Close>
      </HeaderButtonGroup>
      {navi ? (
        <>
          <PagesIndicators>
            {navi.totalPages > 1 &&
              [...Array(navi?.totalPages)].map((_, index) => (
                <Navi
                  key={index}
                  className={index == navi?.currentPageIndex ? 'active' : 'inactive'}
                  title={`Page ${index + 1}`}
                  onClick={() => onClickPageIndicator({ index, newTitle, newContent })}
                />
              ))}
          </PagesIndicators>
          <CalloutHeaderCaption>
            Chapter {navi?.currentChapterIndex + 1} of {navi?.totalChapters}
          </CalloutHeaderCaption>
        </>
      ) : null}
    </TopLine>
  </Header>
)

const actionButton = (btn) => (
  <ActionButton
    key={btn.label}
    className={btn.variant}
    onClick={btn.onClick}
    disabled={btn.disabled}
  >
    {btn.label}
  </ActionButton>
)

const navButtons = !buttons ? null : props.type === 'callout' ? (
  <ActionsGroup className={props.type}>{buttons.map((btn) => actionButton(btn))}</ActionsGroup>
) : buttons?.length > 1 ? (
  <ActionsGroup className={props.type}>
    {actionButton(buttons[1])}
    {actionButton(buttons[0])}
  </ActionsGroup>
) : buttons?.length === 1 ? (
  <ActionsGroup className={props.type}>{actionButton(buttons[0])}</ActionsGroup>
) : (
  <></>
)

return (
  <Theme skin={skin}>
    {props.type === 'callout' ? (
      <Callout
        data-mweb-context-type="wg-chapter"
        data-mweb-context-parsed={JSON.stringify({ id: props.id })}
        className={isEditMode ? 'edit-mode' : ''}
      >
        {header}
        {isEditMode ? (
          <Widget
            src="${REPL_ACCOUNT}/widget/WebGuide.PageEdit"
            loading={<></>}
            props={{
              isConfigEdited,
              isPageEdited,
              contextId,
              contextType,
              navi,
              buttons,
              skin,
              title,
              content,
              setEditMode,
              startEditTarget,
              handleTargetRemove,
              onPageDataChange,
              onPageAdd,
              onChapterAdd,
              onPageRemove,
              buttonRemoveDisabled,
              onRevertChanges,
              handleRemoveAllChanges,
              handleExportConfig,
              handleSave,
              noTarget,
            }}
          />
        ) : (
          <>
            {props.status?.text ? (
              <Widget
                src="${REPL_ACCOUNT}/widget/WebGuide.Status"
                loading={<></>}
                props={{ status: props.status }}
              />
            ) : null}
            {title ? <Title className={props.type}>{title}</Title> : null}
            {content ? (
              <MarkdownWrapper>
                <Markdown text={content} />
              </MarkdownWrapper>
            ) : null}
            {navButtons}
          </>
        )}
        <div data-mweb-insertion-point="hidden" style={{ display: 'none' }} />
      </Callout>
    ) : props.type === 'infobox' ? (
      <InfoBox>
        {header}
        {isEditMode ? (
          <Widget
            src="${REPL_ACCOUNT}/widget/WebGuide.PageEdit"
            loading={<></>}
            props={{
              isConfigEdited,
              isPageEdited,
              contextId,
              contextType,
              navi,
              buttons,
              skin,
              title,
              content,
              setEditMode,
              startEditTarget,
              handleTargetRemove,
              onPageDataChange,
              onPageAdd,
              onChapterAdd,
              onPageRemove,
              buttonRemoveDisabled,
              onRevertChanges,
              handleRemoveAllChanges,
              handleExportConfig,
              handleSave,
              noTarget,
            }}
          />
        ) : (
          <>
            {title ? <Title className={props.type}>{title}</Title> : null}
            <Card>
              {props.status?.text ? (
                <Widget
                  src="${REPL_ACCOUNT}/widget/WebGuide.Status"
                  loading={<></>}
                  props={{ status: props.status }}
                />
              ) : null}
              {content ? (
                <MarkdownWrapper>
                  <Markdown text={content} />
                </MarkdownWrapper>
              ) : null}
            </Card>
            <Footer>{navButtons}</Footer>
          </>
        )}
      </InfoBox>
    ) : (
      <></>
    )}
  </Theme>
)
