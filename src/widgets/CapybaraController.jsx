return (
  <>
    <DappletPortal
      target={{
        namespace: '${REPL_ACCOUNT}/parser/near-ai',
        contextType: 'agent',
        if: { id: { not: null, index: true } },
        injectTo: 'addCell',
        componentId: '${REPL_ACCOUNT}/widget/CapybaraBtn',
      }}
      component={() => <Widget src="${REPL_ACCOUNT}/widget/CapybaraBtn" />}
    />
    <DappletPortal
      target={{
        namespace: '${REPL_ACCOUNT}/parser/near-ai',
        contextType: 'agent',
        if: { id: { not: null, index: true } },
        injectTo: 'buttons',
        componentId: '${REPL_ACCOUNT}/widget/CapybaraBtn',
      }}
      component={() => <Widget src="${REPL_ACCOUNT}/widget/CapybaraBtn" />}
    />
    <DappletPortal
      target={{
        namespace: '${REPL_ACCOUNT}/parser/near-ai',
        contextType: 'table-header',
        if: { id: { not: null, index: true } },
        injectTo: 'addCell',
        componentId: '${REPL_ACCOUNT}/widget/CapybaraBtn',
      }}
      component={() => <Widget src="${REPL_ACCOUNT}/widget/CapybaraBtn" />}
    />
  </>
)
