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
  justify-content: center;
`

const Callout = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 360px;
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
`

const { isEditMode, skin, type } = props

const Page = () => (
  <Widget
    src={'${REPL_ACCOUNT}/widget/WebGuide.Pages.' + (isEditMode ? 'Edit' : 'Show')}
    loading={<></>}
    props={props}
  />
)

return (
  <Widget
    src={'${REPL_ACCOUNT}/widget/WebGuide.Themes.' + skin}
    loading={<></>}
    props={{
      children:
        type === 'callout' ? (
          <Callout>
            <Page />
            <div data-mweb-insertion-point="hidden" style={{ display: 'none' }} />
          </Callout>
        ) : type === 'infobox' ? (
          <InfoBox>
            <Page />
          </InfoBox>
        ) : null,
    }}
  />
)
