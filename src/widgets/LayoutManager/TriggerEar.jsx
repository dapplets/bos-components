const { show, context } = props

return (
  <div
    style={{
      opacity: show ? 0 : 1,
      position: 'absolute',
      background: '#384bff',
      border: '1px solid #384bff',
      width: '6px',
      height: '49px',
      right: '-6px',
      top: '10px',
      borderRadius: '0px 4px 4px 0px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      zIndex: '79',
      transition: 'all 0.2s',
    }}
    data-mweb-context-type="ear-trigger"
    data-mweb-context-parsed={JSON.stringify({ id: context?.id })}
  >
    <svg width="2" height="49" viewBox="0 0 2 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="17.5" width="2" height="2" rx="1" fill="white" />
      <rect y="23.5" width="2" height="2" rx="1" fill="white" />
      <rect y="29.5" width="2" height="2" rx="1" fill="white" />
    </svg>
    <div data-mweb-insertion-point="hidden" style={{ display: 'none' }} />
  </div>
)
