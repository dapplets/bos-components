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
      <Widget
        src='bos.dapplets.near/widget/PickerAdapterTester.Input'
        loading={props?.children}
        props={{
          handleClose,
          setSelectedAdapter,
          toggleIsRunningApp
        }}
      />
    )}
  >
    {typeof props.children === "function" ? (
        props.children
      ) : (
        <span>{props.children}</span>
      )}
  </DappletOverlayTrigger>
)
