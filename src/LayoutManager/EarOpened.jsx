const {
  widgets,
  isEditMode,
  enableEditMode,
  disableEditMode,
  handleOpenMenu,
  handleOnMouseLeave,
  deleteUserLink,
} = props

const TriggerShowPanel = styled.div`
  width: 40px;
  height: auto;
  border-radius: 0px 4px 4px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: -33px;
  top: -20px;
  z-index: 79;
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6px;
  border: 1px solid #384bff;
  border-radius: 0px 4px 4px 0px;
  right: 60px;
  width: 40px;
  min-height: 34px;
  height: auto;
  background: #fff;
  z-index: 1080;

  @keyframes translateAnimation {
    from {
      display: none;
      opacity: 0;
    }
    to {
      display: flex;
      opacity: 1;
    }
  }
  animation: translateAnimation 0.3s ease forwards;
  transition: all 0.2s;
`;

const ActionBlock = styled.span`
  position: relative;

  div {
    z-index: 1000;
  }
`;

return (
  <TriggerShowPanel
    onMouseOut={handleOnMouseLeave}
    style={{
      margin: "0px -7px",
      top: widgets && widgets.length ? "" : "-20px",
    }}
  >
    <Widget src='bos.dapplets.near/widget/LayoutManager.SupportingSpan'/>
    <ActionsWrapper
      style={{
        backgroundColor:
          widgets && widgets.length ? "" : "#DB504A!important",
      }}
    >
      {widgets.map((widget) => (
        <ActionBlock key={widget.linkId}>
          {isEditMode ? (
            <Widget
              src='bos.dapplets.near/widget/LayoutManager.WidgetBadgeWrapper'
              props={{
                widget,
                deleteUserLink
              }}
            />
          ) : null}
          <Widget src={widget.src} props={widget.props} />
        </ActionBlock>
      ))}
      {isEditMode ? (
          <Widget
            src='bos.dapplets.near/widget/LayoutManager.Buttons.Apply'
            props={{ onClick: disableEditMode }}
          />
        ) : (
          <Widget
            src='bos.dapplets.near/widget/LayoutManager.Buttons.Edit'
            props={{ onClick: enableEditMode }}
          />
        )
      }
      <Widget
        src="bos.dapplets.near/widget/LayoutManager.Buttons.Plus"
        props={{ widgets, onClick: handleOpenMenu }}
      />
    </ActionsWrapper>
    {widgets && widgets.length
      ? <Widget src='bos.dapplets.near/widget/LayoutManager.SupportingSpan'/>
      : null}
  </TriggerShowPanel>
)