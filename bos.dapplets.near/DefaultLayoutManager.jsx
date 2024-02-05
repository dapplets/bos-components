if (!props.widgets || props.widgets.length === 0) return <></>;

const handleRemoveWidget = (linkId) => {
  props.deleteUserLink(linkId);
};

const Container = styled.div`
  display: flex;
  position: relative;
`;

const WidgetWrapper = styled.div`
  max-width: 100%;
`;

const WidgetBadgeWrapper = styled.div`
 position: absolute;
    right: 0px;
    top: 0px;
    z-index: 1200;
    background: rgba(255, 255, 255, 0.35);
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 4%;
    backdrop-filter: blur(0.5px);
    div {
        padding: 2px;
    }
`;

return (
  <Container>
    {props.widgets.map((widget) => (
      <WidgetWrapper key={widget.linkId}>
        {props.isEditMode ? (
          <WidgetBadgeWrapper
            style={{
              display:
                widget.linkAuthorId === context.accountId ? "flex" : "none",
            }}
          >
            {widget.linkAuthorId === context.accountId ? (
              <Widget
                src="bos.dapplets.near/widget/LayoutManager.DeleteWidgetButton"
                props={{
                  onClick: () => handleRemoveWidget(widget.linkId),
                }}
              />
            ) : //   <Widget src="bos.dapplets.near/widget/LayoutManager.LockedWidgetBadge" />
            null}
          </WidgetBadgeWrapper>
        ) : null}
        <Widget src={widget.src} props={widget.props} />
      </WidgetWrapper>
    ))}
  </Container>
);
