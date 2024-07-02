const [isRunnigApp, toggleIsRunningApp] = useState(false)
const [selectedAdapter, setSelectedAdapter] = useState(false)
const [selectedContext, setSelectedContext] = useState(null)

const handleClose = () => {
  setSelectedContext(null)
  toggleIsRunningApp(false)
}

const ChapterWrapper = (props) => {
  const widgetProps = {
    id: selectedContext.id,
    type: 'callout',
    onClose: handleClose,
    content:`
**ID:** ${selectedContext.id}

**Context type:** ${selectedContext.type}

**Namespace:** ${selectedContext.namespace}

**Parsed context:**

\`\`\`js
${JSON.stringify(selectedContext.parsed, null, 2)}
\`\`\`
`,
    skin: 'META_GUIDE',
    children: ({ ref }) => {
      props.attachContextRef(ref);
      return props.children;
    }
  }
  return (
    <Widget
      src='bos.dapplets.near/widget/WebGuide.OverlayTrigger'
      loading={props?.children}
      props={widgetProps}
    />
  )
}



const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 630px;
  height: 690px;
  background: #FFFFFE;
  border: 1px solid #02193A;
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  z-index: 1000;
  box-shadow: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  align-items: center;
  justify-content: center;
`

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #02193A;

  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    padding: 0;
    margin: 0;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;

  svg {
    path {
      stroke: #838891;
      transition-duration: .2s;
    }
  }
  
  :hover {
    svg {
      path {
        stroke: #555555;
      }
    }
  }
`

const closeIcon =  (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6.5L18 18.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SuccessButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  width: 180px;
  height: 42px;
  background: #02193A;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 149%;
  text-align: center;
  color: #FFFFFF;
  transition-duration: 0.2s;

  :hover {
    background-color: rgb(32 45 63);
  }
`

return (
  <>
    {/* ACTION */}
    <DappletPortal
      target={{
        namespace: "mweb",
        contextType: "mweb-overlay",
        injectTo: "mweb-actions-panel",
        if: { id: { eq: "mweb-overlay" } },
        arrowTo: "context",
      }}
      component={() => <Widget
        src='bos.dapplets.near/widget/WebGuide.Action'
        props={{
          appId: 'picker-adapter-tester',
          tooltip: isRunnigApp ? 'Stop Picker Adapter Tester' : 'Run Picker Adapter Tester',
          isActive: isRunnigApp,
          children: (<p>PAT</p>),
          handleAction: () => {
            if (isRunnigApp) {
              handleClose()
            } else {
              toggleIsRunningApp(true)
            }
          },
        }}
      />}
    />

    {/* INPUT */}
    {isRunnigApp && !isAdapterSelected ? (
      <DappletPortal
        target={{
          namespace: 'mweb',
          contextType: 'mweb-overlay',
          if: { id: { eq: "mweb-overlay" } }
        }}
        component={() => (
          <Container>
            <Header>
              <h1>Add data</h1>
              <CloseButton onClick={() => handleClose(false, viewedPages)}>
                {closeIcon}
              </CloseButton>
            </Header>
            <textarea
              autofocus
              style={{ width: '100%', height: '100%' }}
              onChange={(e) => setNewData(e.target.value)}
              value={newData}
            />
            <div style={{ display: 'flex', width: '80%', justifyContent: 'space-evenly' }}>
              {isEditMode ? (
                <SuccessButton onClick={() => setSelectedAdapter(false)}>
                  Cancel
                </SuccessButton>
              ) : null}
              <SuccessButton onClick={() => {
                saveData(newData)
                setNewData('')
                setShow(false)
              }}>
                Save
              </SuccessButton>
            </div>
          </Container>
        )}
      />
    ) : null}

    {/* PICKER */}
    {isRunnigApp && isAdapterSelected ? (
      <DappletContextPicker
        target={
          [
            {
              namespace: 'bos.dapplets.near/parser/twitter',
              contextType: 'timeline',
              if: {}
            },
            {
              namespace: 'bos.dapplets.near/parser/twitter',
              contextType: 'post',
              if: {}
            },
            {
              namespace: 'bos.dapplets.near/parser/twitter',
              contextType: 'postSouthButton',
              if: {}
            },
            {
              namespace: 'bos.dapplets.near/parser/twitter',
              contextType: 'profile',
              if: {}
            }
          ]
        }
        onClick={setSelectedContext}
      />
    ) : null}

    {/* CALLOUT */}
    {isRunnigApp && selectedContext ? (
      <DappletPortal
        target={selectedContext}
        component={ChapterWrapper}
      />
    ) : null}
  </>
)
