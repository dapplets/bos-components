return (
  <OverlayTrigger
    placement="right"
    overlay={
      <DappletCallout
        arrow={<Widget  loading={<></>} src="${REPL_ACCOUNT}/widget/Onboarding.Arrow" />}
      >
        <Widget  loading={<></>} src="${REPL_ACCOUNT}/widget/Onboarding.Callout" />
      </DappletCallout>
    }
  >
    <div>
      <Widget  loading={<></>} src="${REPL_ACCOUNT}/widget/Onboarding.QuestionIcon" />
    </div>
  </OverlayTrigger>
);
