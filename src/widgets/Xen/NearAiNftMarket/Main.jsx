return (
  <>
    <DappletPortal
      target={{
        namespace: '${REPL_ACCOUNT}/parser/near-ai',
        contextType: 'agent',
        if: { id: { not: null, index: true } },
        injectTo: 'buttons',
      }}
      component={(props) => (
        <Widget
          src="${REPL_ACCOUNT}/widget/Xen.NearAiNftMarket.NearAiNftActionButton"
          props={{ context: props.context }}
        />
      )}
    />
    <DappletPortal
      target={{
        namespace: '${REPL_ACCOUNT}/parser/near-ai',
        contextType: 'table-header',
        if: { id: { not: null, index: true } },
        injectTo: 'addCell',
      }}
      component={() => (
        <Widget
          src="${REPL_ACCOUNT}/widget/Xen.NearAiNftMarket.PriceColumnHeader"
          props={{ context: props.context }}
        />
      )}
    />
    <DappletPortal
      target={{
        namespace: '${REPL_ACCOUNT}/parser/near-ai',
        contextType: 'agent',
        if: { id: { not: null, index: true } },
        injectTo: 'addCell',
      }}
      component={(props) => (
        <Widget
          src="${REPL_ACCOUNT}/widget/Xen.NearAiNftMarket.PriceNftItem"
          props={{ context: props.context }}
        />
      )}
    />
  </>
)
