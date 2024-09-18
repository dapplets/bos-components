const MetaGuideTheme = styled.div`
  --bgMain: #4e77e1;
  --bgInfoBlock: #628bf5;
  --colorMain: white;
  --colorP: rgba(248, 249, 255, 1);
  --border: #4e77e1;
  --cardBg: rgba(255, 255, 255, 0.1);

  --navActive: white;
  --navInactiveBg: #4e77e1;
  --navInactiveBorder: white;

  --statusInfoCol: white;
  --statusWarningCol: #d0911a;
  --statusErrorCol: #db504a;
  --statusInfoBg: rgba(255, 255, 255, 0.2);
  --statusWarningBg: rgba(255, 255, 255, 0.2);
  --statusErrorBg: rgba(255, 255, 255, 0.2);

  --primBtnCol: #4e77e1;
  --primBtnBg: white;
  --primBtnBg01: #ffffff1a;
  --primBtnBgH: rgb(242 243 255);
  --primBtnBgA: rgb(222 225 255);
  --secBtnCol: white;
  --secBtnBorderCol: white;
  --secBtnBgH: #5f84e4;
  --secBtnBgA: #6c8ee5;

  --dropdownColor: #222222;
  --bg-grey: #e7ecef;
`

return <MetaGuideTheme>{props.children}</MetaGuideTheme>
