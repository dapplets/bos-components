/**
 * Based on: mob.near/widget/N.Common.OverlayTrigger
 */

const showTimer = 250;
const hideTimer = 300;

const [show, setShow] = useState(false);
const [debounce, setDebounce] = useState(null);

const handleOnMouseEnter = () => {
  setDebounce((debounce) => {
    clearTimeout(debounce);
    setTimeout(() => setShow(true), showTimer);
  });
};

const handleOnMouseLeave = () => {
  setDebounce((debounce) => {
    clearTimeout(debounce);
    setTimeout(() => setShow(false), showTimer);
  });
};

const CustomTooltip = styled("Tooltip")`
  all: unset;
  opacity: unset !important;

  .tooltip-inner {
    all: unset;
  }

  .tooltip-arrow::before {
    border: none;
    content: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='19' height='38' viewBox='18 0 20 38' fill='none' ><path d='M34.3818 22.1845L19.5654 36.0575L19.5654 1.8284L34.3715 15.6052C36.2802 17.3812 36.285 20.4025 34.3818 22.1845Z' fill='%23FFFFFE' stroke='%2302193A' /><path d='M16.5693 2.96185L20.0642 2.96185L21.0642 3.96185L21.0642 33.9619L20.0642 34.9619H16.5693L16.5693 2.96185Z' fill='%23FFFFFE' /></svg>");
  }

  &.bs-tooltip-top .tooltip-arrow {
    &::before {
      top: -12px;
      transform: rotate(90deg);
    }
  }

  &.bs-tooltip-end .tooltip-arrow {
    &::before {
      transform: rotate(180deg);
    }
  }

  &.bs-tooltip-bottom .tooltip-arrow {
    &::before {
      top: -12px;
      transform: rotate(-90deg);
    }
  }

  &.bs-tooltip-start .tooltip-arrow {
    &::before {
      transform: rotate(0deg);
    }
  }
`;

const overlay = (
  <CustomTooltip
    onMouseEnter={handleOnMouseEnter}
    onMouseLeave={handleOnMouseLeave}
  >
    <Widget src="bos.dapplets.near/widget/WebGuide.Callout" />
  </CustomTooltip>
);

return (
  <OverlayTrigger show={true} overlay={overlay} placement="auto">
    <span onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      {props.children}
    </span>
  </OverlayTrigger>
);
