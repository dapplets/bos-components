const { widget, deleteUserLink } = props

const [isWaiting, setIsWaiting] = useState(false)

const handleRemoveWidget = (linkId) => {
  setIsWaiting(true)
  deleteUserLink(linkId)
    .then(() => setIsWaiting(false))
    .catch(() => setIsWaiting(false))
}

const WidgetBadgeWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 1200;
  background: rgba(255, 255, 255, 0.35);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: -2px;
  backdrop-filter: blur(1px);
`

return (
  <WidgetBadgeWrapper
    className={widget.linkAuthorId === context.accountId && !widget.static ? 'WidgetHover' : ''}
    title={
      widget.linkAuthorId === context.accountId && !widget.static
        ? `Remove ${widget.src.split('widget/').pop()}`
        : 'disable in edit mode'
    }
    style={{
      opacity: widget.linkAuthorId === context.accountId && !widget.static ? '1' : '0',
    }}
  >
    {widget.linkAuthorId === context.accountId && !widget.static ? (
      isWaiting ? (
        <span role="status" aria-hidden="true" className="spinner-grow spinner-grow-sm" />
      ) : (
        <Widget
          loading={<></>}
          src="${REPL_ACCOUNT}/widget/LayoutManager.DeleteWidgetButton"
          props={{
            onClick: () => handleRemoveWidget(widget.linkId),
          }}
        />
      ) // <Widget src="${REPL_ACCOUNT}/widget/LayoutManager.LockedWidgetBadge" />
    ) : null}
  </WidgetBadgeWrapper>
)
