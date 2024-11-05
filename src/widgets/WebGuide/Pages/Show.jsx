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

const NavigationGroup = styled.div`
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

const NavigationButton = styled.div`
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

const { navi, onClose, buttons, title, content, isEditAllowed, setEditMode, onClickPageIndicator } =
  props

const Header = () => (
  <Widget
    src="${REPL_ACCOUNT}/widget/WebGuide.Components.Header"
    loading={<div style={{ height: 25 }}></div>}
    props={{
      navi,
      onClose,
      mutatorId,
      isEditMode: false,
      onEditButtonClick: () => setEditMode(true),
      isEditAllowed,
      onClickPageIndicator: (index) => onClickPageIndicator({ index }),
    }}
  />
)

const Status = () => (
  <Widget
    src="${REPL_ACCOUNT}/widget/WebGuide.Components.Status"
    loading={<></>}
    props={{ status: props.status }}
  />
)

const NavButton = ({ btn }) => (
  <NavigationButton
    key={btn.label}
    className={btn.variant}
    onClick={btn.onClick}
    disabled={btn.disabled}
  >
    {btn.label}
  </NavigationButton>
)

const NavButtons = () =>
  !buttons ? null : props.type === 'callout' ? (
    <NavigationGroup className={props.type}>
      {buttons.map((btn) => (
        <NavButton btn={btn} key={btn.label} />
      ))}
    </NavigationGroup>
  ) : buttons?.length > 1 ? (
    <NavigationGroup className={props.type}>
      <NavButton btn={buttons[1]} />
      <NavButton btn={buttons[0]} />
    </NavigationGroup>
  ) : buttons?.length === 1 ? (
    <NavigationGroup className={props.type}>
      <NavButton btn={buttons[0]} />
    </NavigationGroup>
  ) : (
    <></>
  )

switch (props.type) {
  case 'infobox':
    return (
      <>
        <Header />
        {title ? <Title className={props.type}>{title}</Title> : null}
        <Card>
          {props.status?.text ? <Status /> : null}
          {content ? (
            <MarkdownWrapper>
              <Markdown text={content} />
            </MarkdownWrapper>
          ) : null}
        </Card>
        <Footer>
          <NavButtons />
        </Footer>
      </>
    )

  case 'callout':
    return (
      <>
        <Header />
        {props.status?.text ? <Status /> : null}
        {title ? <Title className={props.type}>{title}</Title> : null}
        {content ? (
          <MarkdownWrapper>
            <Markdown text={content} />
          </MarkdownWrapper>
        ) : null}
        <NavButtons />
      </>
    )

  default:
    return null
}
