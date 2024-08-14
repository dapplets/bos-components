const { handleClose, setSelectedAdapter, toggleIsRunningApp, previousData, onRefAttach } = props

return (
  <DappletOverlayTrigger
    show={true}
    popperConfig="fixed"
    placement="left"
    offset={[0, 45]}
    overlay={
      <div>
        <Widget
          src="bos.dapplets.near/widget/PickerAdapterTester.Input"
          loading={<></>}
          props={{
            handleClose,
            setSelectedAdapter,
            toggleIsRunningApp,
            previousData,
          }}
        />
      </div>
    }
  >
    {onRefAttach}
  </DappletOverlayTrigger>
)
