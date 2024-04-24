const { context } = props;

return (
  // <MutableWebPortal context={context} insertionPoint="afterText">
  //   <div>Test</div>
  // </MutableWebPortal>
  <>
     <Widget
      src="bos.dapplets.near/widget/WebGuide.Chapter"
      props={{ type: "collaut" }}
    ></Widget>
    <Widget
      src="bos.dapplets.near/widget/WebGuide.Chapter"
      props={{ type: "infobox" }}
    ></Widget>
  
  </>
);
