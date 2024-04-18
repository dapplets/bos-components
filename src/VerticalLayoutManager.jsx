if (!props.widgets || props.widgets.length === 0) return <></>;

const [isWaiting, setIsWaiting] = useState(false)

const handleRemoveWidget = (linkId) => {
  setIsWaiting(true)
  props.deleteUserLink(linkId).then(() => setIsWaiting(false)).catch(() => setIsWaiting(false))
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 10px;
`;

const WidgetBadgeWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1200;
  background: rgba(255, 255, 255, 0.35);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4%;
  backdrop-filter: blur(1px);
`;

return (
  <Container>
    {props.widgets
      .filter((w) => w.isSuitable === undefined || w.isSuitable === true)
      .map((widget) => (
        <div style={{ position: "relative" }} key={widget.linkId}>
          {props.isEditMode ? (
            <WidgetBadgeWrapper
              title={
                widget.linkAuthorId === context.accountId
                  ? `Remove ${widget.src.split("widget/").pop()}`
                  : "disable in edit mode"
              }
              style={{
                opacity: widget.linkAuthorId === context.accountId ? "1" : "0",
              }}
            >
              {widget.linkAuthorId === context.accountId ? isWaiting ? (
                <span role="status" aria-hidden="true" class="spinner-grow spinner-grow-sm" />
              ) : (
                <Widget
                  src="bos.dapplets.near/widget/LayoutManager.DeleteWidgetButton"
                  props={{
                    onClick: () => handleRemoveWidget(widget.linkId),
                  }}
                />
              ) : // <Widget src="bos.dapplets.near/widget/LayoutManager.LockedWidgetBadge" />
              null}
            </WidgetBadgeWrapper>
          ) : null}

          <Widget src={widget.src} props={widget.props} />
        </div>
      ))}
  </Container>
);
