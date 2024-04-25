const CalloutHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
  position: relative;
`;

const CalloutHeaderCaption = styled.div`
  display: inline-block;
  max-width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #02193a;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 149%;
`;
const Container = styled.div`
  width: auto;
  height: 24px;
  padding: 4px;
  gap: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
`;

const Navi = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.$active ? "#384BFF" : "#E3E3E3")};
  border: none;
`;

const Close = styled.button`
  background: inherit;
  outline: none;
  border: none;
`;

const Arrow = styled.button`
  position: absolute;
  top: -5px;
  right: -46px;
  background: inherit;
  border: none;
  outline: none;
`;

const iconClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 6L6 18"
      stroke="#02193A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6.5L18 18.5"
      stroke="#02193A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const iconArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="39"
    height="38"
    viewBox="0 0 39 38"
    fill="none"
  >
    <path
      d="M34.3818 22.1845L19.5654 36.0575L19.5654 1.8284L34.3715 15.6052C36.2802 17.3812 36.285 20.4025 34.3818 22.1845Z"
      fill="#FFFFFE"
      stroke="#02193A"
    />
    <path
      d="M16.5693 2.96185L20.0642 2.96185L21.0642 3.96185L21.0642 33.9619L20.0642 34.9619H16.5693L16.5693 2.96185Z"
      fill="#FFFFFE"
    />
  </svg>
);
console.log(props)
return (
  <CalloutHeader>
    <CalloutHeaderCaption>
      Step {props.navi.currentStepIndex ? props.navi.currentStepIndex : 1} of{" "}
      {props.navi.totalSteps ? props.navi.totalSteps : 3}
    </CalloutHeaderCaption>
    <Container>
      {[...Array(props.navi.totalSteps ? props.navi.totalSteps : 3)].map(
        (_, index) => (
          <Navi
            key={index}
            $active={index == props.navi.currentStepIndex ? true : false}
          />
        )
      )}
    </Container>
    <Close onClick={props.onClose}>{iconClose}</Close>
    {props.type == "infobox" ? null : <Arrow>{iconArrow}</Arrow>}
  </CalloutHeader>
);
