const { onClose, onRefAttach, content } = props

return (
  <DappletOverlayTrigger
    show={true}
    popperConfig="fixed"
    placement="right"
    offset={[0, 10]}
    overlay={
      <div>
        <Widget
          src="${REPL_ACCOUNT}/widget/AiAgent.CalloutContent"
          loading={<></>}
          props={{
            onClose,
            content,
          }}
        />
      </div>
    }
  >
    {onRefAttach}
  </DappletOverlayTrigger>
)
