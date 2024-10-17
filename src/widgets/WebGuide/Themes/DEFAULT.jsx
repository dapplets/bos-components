const DefaultTheme = styled.div`
  --bgMain: #fffffe;
  --colorMain: #02193a;
  --colorP: #777777;
  --border: #02193a;
  --cardBg: rgba(248, 249, 255, 1);
  --bgInfoBlock: #e2e2e5;
  --navActive: #384bff;
  --navInactiveBg: #e3e3e3;
  --navInactiveBorder: none;

  --statusInfoCol: #246efd;
  --statusWarningCol: #d0911a;
  --statusErrorCol: #db504a;
  --statusInfoBg: rgba(234, 241, 255, 1);
  --statusWarningBg: rgba(255, 248, 235, 1);
  --statusErrorBg: rgba(246, 240, 246, 1);

  --primBtnCol: white;
  --primBtnBg: #02193a;
  --primBtnBg01: #02193a1a;
  --primBtnBgH: #1c3559;
  --primBtnBgA: #020c19;
  --secBtnCol: #02193a;
  --secBtnBorderCol: #e2e2e5;
  --secBtnBgH: #eee;
  --secBtnBgA: #ddd;

  --dropdownColor: white;
  --bg-grey: #e2e2e5;
`

return <DefaultTheme>{props.children}</DefaultTheme>
