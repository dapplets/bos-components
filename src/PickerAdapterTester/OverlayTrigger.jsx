const {
  handleClose,
  setSelectedAdapter,
  toggleIsRunningApp
} = props

return (
  <DappletOverlayTrigger
    show={true}
    popperConfig='fixed'
    placement='left'
    offset={[0, 45]}
    overlay={(
      <div>
        <Widget
          src='bos.dapplets.near/widget/PickerAdapterTester.Input'
          loading={props?.children}
          props={{
            handleClose,
            setSelectedAdapter,
            toggleIsRunningApp
          }}
        />
      </div>
    )}
  >
    {typeof props.children === "function" ? (
        props.children
      ) : (
        <span>{props.children}</span>
      )}
  </DappletOverlayTrigger>
)
