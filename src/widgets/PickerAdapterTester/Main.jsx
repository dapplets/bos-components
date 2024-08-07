const [isRunnigApp, toggleIsRunningApp] = useState(false)
const [selectedAdapter, setSelectedAdapter] = useState('')
const [previousAdapter, setPreviousAdapter] = useState('')
const [selectedContext, setSelectedContext] = useState(null)

const ChapterWrapper = (props) => {
  const widgetProps = {
    id: selectedContext.id,
    type: 'callout',
    onClose: () => {
      setSelectedContext(null)
      setPreviousAdapter(selectedAdapter)
      setSelectedAdapter('')
    },
    content: `
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
      props.attachContextRef(ref)
      return props.children
    },
  }
  return (
    <Widget
      src="bos.dapplets.near/widget/WebGuide.OverlayTrigger"
      loading={props?.children}
      props={widgetProps}
    />
  )
}

return (
  <>
    {/* ACTION */}
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
          src="bos.dapplets.near/widget/ActionButton"
          props={{
            appId: 'picker-adapter-tester',
            tooltip: isRunnigApp ? 'Stop Picker Adapter Tester' : 'Run Picker Adapter Tester',
            isActive: isRunnigApp,
            children: <p>PAT</p>,
            onClick: () => {
              if (isRunnigApp) {
                setPreviousAdapter(selectedAdapter)
                setSelectedAdapter('')
              } else {
                setSelectedAdapter('')
                toggleIsRunningApp(true)
              }
            },
          }}
        />
      )}
    />

    {/* INPUT */}
    {isRunnigApp && !selectedAdapter ? (
      <DappletPortal
        target={{
          namespace: 'mweb',
          contextType: 'mweb-overlay-action',
          if: { id: { eq: 'web-guide-action-picker-adapter-tester' } },
        }}
        inMemory
        component={(props) => (
          <Widget
            src="bos.dapplets.near/widget/PickerAdapterTester.OverlayTrigger"
            loading={props?.children}
            props={{
              handleClose: () => {
                setSelectedContext(null)
                toggleIsRunningApp(false)
              },
              setSelectedAdapter,
              toggleIsRunningApp,
              previousData: previousAdapter,
              children: ({ ref }) => {
                props.attachContextRef(ref)
                return props.children
              },
            }}
          />
        )}
      />
    ) : null}

    {/* PICKER */}
    {isRunnigApp && selectedAdapter ? (
      <DappletContextPicker
        target={[
          {
            namespace: selectedAdapter,
            if: {},
          },
        ]}
        onClick={setSelectedContext}
      />
    ) : null}

    {/* CALLOUT */}
    {isRunnigApp && selectedContext ? (
      <DappletPortal target={selectedContext} inMemory component={ChapterWrapper} />
    ) : null}
  </>
)
