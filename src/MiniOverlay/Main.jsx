const MiniOverlayWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 10px;
`;
return (
  <MiniOverlayWrapper>
    <Widget
      loading={<></>}
      src="bos.dapplets.near/widget/MiniOverlay.Profile"
      props={{ connected: true }}
    />
    <Widget
      loading={<></>}
      src="bos.dapplets.near/widget/MiniOverlay.SidePanel"
    />
  </MiniOverlayWrapper>
);
