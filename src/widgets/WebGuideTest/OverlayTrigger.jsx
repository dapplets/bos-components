const CustomTooltipDefault = styled("DappletTooltip")`
  z-index: 99999999; // over the notch

  &[data-popper-reference-hidden="true"] {
    position: fixed !important;
    left: 50% !important;
    transform: translate(-100%, 0px) !important;
  }

  &.bs-tooltip-bottom[data-popper-reference-hidden="true"] {
    top: 22px !important;
  }

  &.bs-tooltip-top[data-popper-reference-hidden="true"] {
    bottom: 22px !important;
  }

  .tooltip-arrow::before {
    border: none;
    display: inline-block;
    content: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='19' height='38' viewBox='18 0 20 38' fill='none' ><path d='M34.3818 22.1845L19.5654 36.0575L19.5654 1.8284L34.3715 15.6052C36.2802 17.3812 36.285 20.4025 34.3818 22.1845Z' fill='%23FFFFFE' stroke='%2302193A' /><path d='M16.5693 2.96185L20.0642 2.96185L21.0642 3.96185L21.0642 33.9619L20.0642 34.9619H16.5693L16.5693 2.96185Z' fill='%23FFFFFE' /></svg>");
  }

  &.bs-tooltip-top .tooltip-arrow {
    bottom: -29px;

    &::before {
      transform: rotate(90deg);
    }
  }

  &.bs-tooltip-end .tooltip-arrow {
    left: -18px;

    &::before {
      transform: rotate(180deg);
    }
  }

  &.bs-tooltip-bottom .tooltip-arrow {
    top: -29px;

    &::before {
      transform: rotate(-90deg);
    }
  }

  &.bs-tooltip-start .tooltip-arrow {
    right: -18px;

    &::before {
      transform: rotate(0deg);
    }
  }
`

const CustomTooltipMeta = styled("DappletTooltip")`
  z-index: 99999999; // over the notch

  &[data-popper-reference-hidden="true"] {
    position: fixed !important;
    left: 50% !important;
    transform: translate(-100%, 0px) !important;
  }

  &.bs-tooltip-bottom[data-popper-reference-hidden="true"] {
    top: 22px !important;
  }

  &.bs-tooltip-top[data-popper-reference-hidden="true"] {
    bottom: 22px !important;
  }

  .tooltip-arrow::before {
    border: none;
    display: inline-block;
    content: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='19' height='38' viewBox='18 0 20 38' fill='none' ><path d='M34.3818 22.1845L19.5654 36.0575L19.5654 1.8284L34.3715 15.6052C36.2802 17.3812 36.285 20.4025 34.3818 22.1845Z' fill='%234E77E1' stroke='%234E77E1' /><path d='M16.5693 2.96185L20.0642 2.96185L21.0642 3.96185L21.0642 33.9619L20.0642 34.9619H16.5693L16.5693 2.96185Z' fill='%234E77E1' /></svg>");
  }

  &.bs-tooltip-top .tooltip-arrow {
    bottom: -29px;

    &::before {
      transform: rotate(90deg);
    }
  }

  &.bs-tooltip-end .tooltip-arrow {
    left: -18px;

    &::before {
      transform: rotate(180deg);
    }
  }

  &.bs-tooltip-bottom .tooltip-arrow {
    top: -29px;

    &::before {
      transform: rotate(-90deg);
    }
  }

  &.bs-tooltip-start .tooltip-arrow {
    right: -18px;

    &::before {
      transform: rotate(0deg);
    }
  }
`

const InfoBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 546px;
  height: 656px;
  border: 1px solid ${(props) => props.$border};
  background: ${(props) => props.$bg};
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  z-index: 1000;
  box-shadow: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  align-items: center;
  justify-content: center;

  animation: falling-animation 0.3s linear forwards;

  @keyframes falling-animation {
    from {
      transform: translate(-50%, -200%);
    }

    to {
      transform: translate(-50%, -50%);
    }
  }
`

const Callout = styled.div`
  display: flex;
  width: 320px;
  padding: 12px 14px 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.$border};
  background: ${(props) => props.$bg};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`

const Header = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  color: ${(props) => props.$col};
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const TopLine = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
  margin: 0;
  padding: 0;
`

const CalloutHeaderCaption = styled.div`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.$col};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 149%;
  flex: 1;
`

const PagesIndicators = styled.div`
  width: auto;
  height: 24px;
  padding: 4px;
  gap: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  flex: 1;
`

// const Navi = styled.button` // ToDo: for navigation
const Navi = styled.div`
  box-sizing: border-box;
  padding: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) =>
    props.$active ? props.$navActive : props.$navInactiveBg};
  border: ${(props) =>
    props.$active ? "none" : `1px solid ${props.$navInactiveBorder}`};
`

const Close = styled.button`
  display: flex;
  flex-direction: row-reverse;
  background: inherit;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
`

const EditButton = styled.button`
  display: flex;
  flex-direction: row-reverse;
  background: inherit;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
`

const Title = styled.div`
  padding: 0;
  margin: 0 0 -10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  color: ${(props) => props.$col};
  font-size: ${(props) => (props.$type === "infobox" ? "32px" : "18px")};
  font-style: normal;
  font-weight: 600;
  line-height: 149%;
`

const WrapperAlert = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 4px 6px;
  gap: 6px;
  border-radius: 5px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-right: auto;
  background: ${(props) =>
    props.$status === "warning"
      ? props.$bgWarning
      : props.$status === "error"
      ? props.$bgError
      : props.$bgInfo};

  color: ${(props) =>
    props.$status === "warning"
      ? props.$colWarning
      : props.$status === "error"
      ? props.$colError
      : props.$colInfo};

  outline: none;
`

const IconAlert = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  width: 16px;
`

const TextAlert = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  margin: 0;
  padding: 0;
`

const Card = styled.div`
  position: relative;
  overflow: auto;
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  box-sizing: border-box;
  padding: 12px 20px;
  gap: 10px;
  border: none;
  border-radius: 20px;
  background: ${(props) => props.$bg};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  overflow-x: hidden;
`

const MarkdownWrapper = styled.div`
  width: 100%;
  word-break: break-word;

  h3 {
    padding: 8px 0 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.$colH};
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    text-indent: 16px;
  }

  img {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: auto !important;
    border-radius: 10px;
    flex: none;
    flex-grow: 0;
    border: 1px solid rgb(207, 217, 222);
  }

  p {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 149%;
    color: ${(props) => props.$colP};
    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }

  a {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 149%;
    text-decoration-line: underline !important;
    color: ${(props) => props.$colH};
    cursor: "poiner";
  }
`

const Footer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 20px;
`

const ContainerCheckbox = styled.div`
  display: flex;
  align-items: ${(props) =>
    props.$type === "infobox" ? "flex-end" : "flex-start"};
`

const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  border: 1px solid #384bff;
  margin-right: 8px;
`

const Label = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 17.88px;
  color: #7a818b;
  cursor: pointer;
  width: max-content;
`

const ActionsGroup = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.$type === "infobox" ? "row-reverse" : "row"};
  justify-content: ${(props) =>
    props.$type === "infobox" ? "space-between" : "center"};
  align-items: center;
  gap: 10px;
  align-self: stretch;
  flex-grow: 1;
`

const ActionsGroupEdit = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.$type === "infobox" ? "row-reverse" : "row"};
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`

const ActionButton = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 180px;
  height: 42px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 90px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  border: ${(props) =>
    props.$primary ? "initial" : `1px solid ${props.$secBorderCol}`};
  background: ${(props) => (props.$primary ? props.$primBg : "initial")};
  color: ${(props) => (props.$primary ? props.$primCol : props.$secCol)};
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;

  &:hover {
    background: ${(props) => (props.$primary ? props.$primBgH : props.$secBgH)};
  }

  &:active {
    background: ${(props) => (props.$primary ? props.$primBgA : props.$secBgA)};
  }
`

const ActionButtonEdit = styled.div`
  display: flex;
  box-sizing: border-box;
  width: auto;
  height: 30px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;
  background: inherit;
  border: none;
  border-radius: none;
  justify-content: flex-start;
  padding: 0;
  font-size: 12px;
  color: #fff;

  &:hover {
    opacity: 0.5;
  }
`

const iconClose = (color) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 6L6 18"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6.5L18 18.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const errorIcon = (color) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <g clipPath="url(#clip0_358_97)">
      <path
        d="M6.54996 1.66666H13.45L18.3333 6.54999V13.45L13.45 18.3333H6.54996L1.66663 13.45V6.54999L6.54996 1.66666Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 7.5L7.5 12.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 7.5L12.5 12.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_358_97">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const infoIcon = (color) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <g clipPath="url(#clip0_358_90)">
      <path
        d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6023 1.66667 9.99996 1.66667C5.39759 1.66667 1.66663 5.39763 1.66663 10C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.3333V10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6.66667H10.0088"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_358_90">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const warningIcon = (color) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M8.57502 3.21665L1.51668 15C1.37116 15.252 1.29416 15.5377 1.29334 15.8288C1.29253 16.1198 1.36793 16.4059 1.51204 16.6588C1.65615 16.9116 1.86396 17.1223 2.11477 17.2699C2.36559 17.4174 2.65068 17.4968 2.94168 17.5H17.0583C17.3494 17.4968 17.6344 17.4174 17.8853 17.2699C18.1361 17.1223 18.3439 16.9116 18.488 16.6588C18.6321 16.4059 18.7075 16.1198 18.7067 15.8288C18.7059 15.5377 18.6289 15.252 18.4834 15L11.425 3.21665C11.2765 2.97174 11.0673 2.76925 10.8177 2.62872C10.5681 2.48819 10.2865 2.41437 10 2.41437C9.71357 2.41437 9.43196 2.48819 9.18235 2.62872C8.93275 2.76925 8.72358 2.97174 8.57502 3.21665Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 7.5V10.8333"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14.1667H10.0088"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const iconEditTarget = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M13.5901 1.9194C13.4044 1.73365 13.1839 1.5863 12.9412 1.48577C12.6985 1.38524 12.4384 1.3335 12.1758 1.3335C11.9131 1.3335 11.653 1.38524 11.4103 1.48577C11.1677 1.5863 10.9472 1.73365 10.7614 1.9194L9.34677 3.3334L8.87544 2.8614C8.8135 2.79951 8.73997 2.75042 8.65906 2.71693C8.57815 2.68345 8.49144 2.66624 8.40387 2.66627C8.3163 2.6663 8.2296 2.68358 8.14871 2.71711C8.06783 2.75065 7.99434 2.7998 7.93244 2.86174C7.87054 2.92368 7.82145 2.9972 7.78797 3.07811C7.75449 3.15902 7.73727 3.24574 7.7373 3.3333C7.73734 3.42087 7.75461 3.50757 7.78815 3.58846C7.82169 3.66935 7.87083 3.74284 7.93277 3.80474L11.7041 7.5754C11.8303 7.69393 11.9977 7.7587 12.1708 7.75601C12.3439 7.75332 12.5092 7.68338 12.6317 7.561C12.7542 7.43861 12.8242 7.27337 12.8271 7.10025C12.8299 6.92713 12.7652 6.7597 12.6468 6.6334L12.1754 6.16207L13.5901 4.7474C13.965 4.37235 14.1757 3.86373 14.1757 3.3334C14.1757 2.80307 13.965 2.29446 13.5901 1.9194Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.95301 4.72754L2.76767 9.91354C2.47506 10.206 2.28031 10.582 2.21023 10.9897C2.14014 11.3974 2.19818 11.8168 2.37634 12.1902L1.33301 13.2335L2.27567 14.1769L3.31901 13.1329C3.69232 13.3111 4.1117 13.3693 4.51942 13.2993C4.92714 13.2293 5.30315 13.0347 5.59567 12.7422L10.781 7.55687L7.95301 4.72754ZM8.89567 7.55621L7.95301 6.61354L3.71034 10.8562C3.5889 10.9819 3.52171 11.1503 3.52323 11.3251C3.52474 11.4999 3.59486 11.6671 3.71846 11.7908C3.84207 11.9144 4.00928 11.9845 4.18407 11.986C4.35887 11.9875 4.52727 11.9203 4.65301 11.7989L8.89567 7.55621Z"
      fill="white"
    />
  </svg>
)

const themes = {
  DEFAULT: {
    bgMain: "#fffffe",
    colorMain: "#02193a",
    colorP: "#777777",
    border: "#02193a",
    cardBg: "rgba(248, 249, 255, 1)",

    navActive: "#384BFF",
    navInactiveBg: "#E3E3E3",
    navInactiveBorder: "none",

    statusInfoCol: "#246EFD",
    statusWarningCol: "#D0911A",
    statusErrorCol: "#DB504A",
    statusInfoBg: "rgba(234, 241, 255, 1)",
    statusWarningBg: "rgba(255, 248, 235, 1)",
    statusErrorBg: "rgba(246, 240, 246, 1)",

    primBtnCol: "white",
    primBtnBg: "#02193a",
    primBtnBgH: "#1c3559",
    primBtnBgA: "#020c19",
    secBtnCol: "#02193a",
    secBtnBorderCol: "#E2E2E5",
    secBtnBgH: "#eee",
    secBtnBgA: "#ddd",
  },
  META_GUIDE: {
    bgMain: "#4E77E1",
    colorMain: "white",
    colorP: "rgba(248, 249, 255, 1)",
    border: "#4E77E1",
    cardBg: "rgba(255, 255, 255, 0.1)",

    navActive: "white",
    navInactiveBg: "#4E77E1",
    navInactiveBorder: "white",

    statusInfoCol: "white",
    statusWarningCol: "white",
    statusErrorCol: "white",
    statusInfoBg: "rgba(255, 255, 255, 0.2)",
    statusWarningBg: "rgba(255, 255, 255, 0.2)",
    statusErrorBg: "rgba(255, 255, 255, 0.2)",

    primBtnCol: "#4E77E1",
    primBtnBgH: "rgb(242 243 255)",
    primBtnBgA: "rgb(222 225 255)",
    primBtnBg: "white",
    secBtnCol: "white",
    secBtnBorderCol: "white",
    secBtnBgH: "#5f84e4",
    secBtnBgA: "#6c8ee5",
  },
}

const EditButtonsBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-evenly;
`

const editIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6.76923 8H5.84615C5.35652 8 4.88695 8.1945 4.54073 8.54073C4.1945 8.88695 4 9.35652 4 9.84615V18.1538C4 18.6435 4.1945 19.1131 4.54073 19.4593C4.88695 19.8055 5.35652 20 5.84615 20H14.1538C14.6435 20 15.1131 19.8055 15.4593 19.4593C15.8055 19.1131 16 18.6435 16 18.1538V17.2308"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9999 6.00009L17.9999 9.00006M19.3849 7.58508C19.7787 7.19123 20 6.65707 20 6.10009C20 5.54311 19.7787 5.00894 19.3849 4.6151C18.9911 4.22126 18.4569 4 17.8999 4C17.3429 4 16.8088 4.22126 16.4149 4.6151L8 13V16H11L19.3849 7.58508Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const viewIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5.77778 20C5.28889 20 4.87052 19.8261 4.52267 19.4782C4.17481 19.1304 4.00059 18.7117 4 18.2222V5.77778C4 5.28889 4.17422 4.87052 4.52267 4.52267C4.87111 4.17481 5.28948 4.00059 5.77778 4H18.2222C18.7111 4 19.1298 4.17422 19.4782 4.52267C19.8267 4.87111 20.0006 5.28948 20 5.77778V18.2222C20 18.7111 19.8261 19.1298 19.4782 19.4782C19.1304 19.8267 18.7117 20.0006 18.2222 20H5.77778ZM5.77778 18.2222H18.2222V7.55556H5.77778V18.2222ZM12 16.4444C10.7852 16.4444 9.70015 16.115 8.74489 15.456C7.78963 14.797 7.09689 13.9413 6.66667 12.8889C7.0963 11.837 7.78904 10.9816 8.74489 10.3227C9.70074 9.6637 10.7858 9.33393 12 9.33333C13.2142 9.33274 14.2996 9.66252 15.256 10.3227C16.2124 10.9828 16.9049 11.8382 17.3333 12.8889C16.9037 13.9407 16.2113 14.7964 15.256 15.456C14.3007 16.1156 13.2154 16.445 12 16.4444ZM12 14.2222C11.6296 14.2222 11.315 14.0927 11.056 13.8338C10.797 13.5748 10.6673 13.2599 10.6667 12.8889C10.6661 12.5179 10.7959 12.2033 11.056 11.9449C11.3161 11.6865 11.6308 11.5567 12 11.5556C12.3692 11.5544 12.6841 11.6841 12.9449 11.9449C13.2056 12.2056 13.3351 12.5203 13.3333 12.8889C13.3316 13.2575 13.2021 13.5724 12.9449 13.8338C12.6877 14.0951 12.3727 14.2246 12 14.2222ZM12 15.1111C12.6222 15.1111 13.1481 14.8963 13.5778 14.4667C14.0074 14.037 14.2222 13.5111 14.2222 12.8889C14.2222 12.2667 14.0074 11.7407 13.5778 11.3111C13.1481 10.8815 12.6222 10.6667 12 10.6667C11.3778 10.6667 10.8519 10.8815 10.4222 11.3111C9.99259 11.7407 9.77778 12.2667 9.77778 12.8889C9.77778 13.5111 9.99259 14.037 10.4222 14.4667C10.8519 14.8963 11.3778 15.1111 12 15.1111Z"
      fill="white"
    />
  </svg>
)

const iconPrevEdit = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M11.0837 7H2.91699"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.00033 11.0832L2.91699 6.99984L7.00033 2.9165"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const iconNextEdit = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M2.91699 7H11.0837"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 2.9165L11.0833 6.99984L7 11.0832"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const SuccessButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  width: 155px;
  height: 42px;
  background: ${(props) => props.$background};
  border-radius: 10px;
  border: 1px solid ${(props) => props.$border};
  cursor: pointer;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 149%;
  text-align: center;
  color: ${(props) => props.$color};
  transition-duration: 0.2s;

  :hover {
    opacity: 0.5;
  }
`

const EditInputsBlock = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: #628bf5;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

const FloatingLabelContainer = styled.div`
  background: #4e77e1;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  position: relative;
  flex: 0 1 auto;
  display: flex;
`

const FloatingLabelContainerArea = styled.div`
  background: #4e77e1;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  position: relative;
  flex: 1 1 auto;
  display: flex;
`

const StyledInput = styled.input`
  padding: 25px 10px 10px 10px;
  background: inherit;
  color: #fff;
  line-height: 100%;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #e2e2e5;
  width: 100%;
  outline: none;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.5rem;
    font-size: 12px;
    color: #bbccd0;
    left: 10px;
  }
`

const StyledTextarea = styled.textarea`
  padding: 25px 10px 10px;
  background: inherit;
  color: rgb(255, 255, 255);
  line-height: 100%;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid rgb(226, 226, 229);
  width: 100%;
  outline: none;
  min-height: 150px;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.5rem;
    font-size: 12px;
    color: #bbccd0;
    left: 10px;
  }
`

const StyledLabel = styled.label`
  position: absolute;
  top: 25px;
  left: 10px;
  font-size: 1rem;
  color: #bbccd0;
  pointer-events: none;
  transition: all 0.2s ease 0s;
`

const EditTargetSpan = styled.button`
  outline: none;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
  margin: none;
  position: absolute;
  top: 17px;
  right: 10px;
`

const {
  children,
  content,
  title,
  navi,
  onClose,
  // status, - conflict with deprecated Window.status property
  buttons,
  showChecked,
  checked,
  onDoNotShowChange,
  skin,
  // todo: new props
  saveTitle,
  saveData,
  link,
} = props

// todo: new
const [newData, setNewData] = useState(content ?? "")
const [newTitle, setNewTitle] = useState(title ?? "")
const [isEditMode, setEditMode] = useState(false);
const [isEditTarget, setEditTarget] = useState(false)
// todo: new

// useEffect(() => {
//   try {
//     const storedData = localStorage.setItem(`${props.id}newData`, newData)
//     const storedTitle = localStorage.setItem(`${props.id}newTitle`, newTitle)

//     if (storedData) {
//       setNewData(storedData)
//     }
//     if (storedTitle) {
//       setNewTitle(storedTitle)
//     }
//   } catch (error) {
//     console.error("Error accessing localStorage", error)
//   }
// }, [])

// todo: new
const handleSave = () => {
  // todo: uncomment when will be contract function
  // saveData(newData);
  // saveTitle(newTitle);

  // try {
  //   localStorage.setItem(`${props.id}newData`, newData)
  //   localStorage.setItem(`${props.id}newTitle`, newTitle)
  //   setEditMode(false)
  // } catch (error) {
  //   console.error("Error accessing localStorage", error)
  // }
}

const header = (
  <Header $col={themes[skin].colorMain}>
    {/* todo: new */}
    {/* {context.accountId === props.link?.authorId ? 
       ( */}
    <TopLine>
      {context.accountId === link.authorId ? (
        <EditButton onClick={() => setEditMode(!isEditMode)}>
          {isEditMode ? viewIcon : editIcon}
        </EditButton>
      ) : (
        <Close onClick={onClose}>{iconClose(themes[skin].colorMain)}</Close>
      )}
      {navi ? (
        <>
          <PagesIndicators>
            {navi.totalPages > 1 &&
              [...Array(navi?.totalPages)].map((_, index) => (
                <Navi
                  key={index}
                  $active={index == navi?.currentPageIndex ? true : false}
                  $navActive={themes[skin].navActive}
                  $navInactiveBg={themes[skin].navInactiveBg}
                  $navInactiveBorder={themes[skin].navInactiveBorder}
                />
              ))}
          </PagesIndicators>
          <CalloutHeaderCaption $col={themes[skin].colorMain}>
            Step {navi?.currentChapterIndex + 1} of {navi?.totalChapters}
          </CalloutHeaderCaption>
        </>
      ) : null}
    </TopLine>
    {/* ) 
          : (
           <TopLine>
      <Close onClick={onClose}>{iconClose(themes[skin].colorMain)}</Close>
      {navi ? (
        <>
          <PagesIndicators>
            {navi.totalPages > 1 && [...Array(navi?.totalPages)].map(
              (_, index) => (
                <Navi
                  key={index}
                  $active={index == navi?.currentPageIndex ? true : false}
                  $navActive={themes[skin].navActive}
                  $navInactiveBg={themes[skin].navInactiveBg}
                  $navInactiveBorder={themes[skin].navInactiveBorder}
                />
              )
            )}
          </PagesIndicators>
          <CalloutHeaderCaption $col={themes[skin].colorMain}>
            Step {navi?.currentChapterIndex + 1} of {navi?.totalChapters}
          </CalloutHeaderCaption>
        </>
      ) : null}
    </TopLine>
          )} */}
  </Header>
)

const statuses = (
  <WrapperAlert
    $status={props.status.type}
    $colInfo={themes[skin].statusInfoCol}
    $colWarning={themes[skin].statusWarningCol}
    $colError={themes[skin].statusErrorCol}
    $bgInfo={themes[skin].statusInfoBg}
    $bgWarning={themes[skin].statusWarningBg}
    $bgError={themes[skin].statusErrorBg}
  >
    <IconAlert>
      {props.status.type === "warning"
        ? warningIcon(themes[skin].statusWarningCol)
        : props.status.type === "error"
        ? errorIcon(themes[skin].statusErrorCol)
        : infoIcon(themes[skin].statusInfoCol)}
    </IconAlert>
    <TextAlert>{props.status.text}</TextAlert>
  </WrapperAlert>
)

const checkbox = (
  <ContainerCheckbox $type={props.type}>
    <CheckboxInput
      type="checkbox"
      checked={checked}
      onChange={onDoNotShowChange}
    />
    <Label htmlFor="checkbox">Don't show this guide again</Label>
  </ContainerCheckbox>
)

const actionButton = (btn) => (
  <ActionButton
    key={btn.label}
    $primary={btn.variant == "primary" ? true : false}
    $primCol={themes[skin].primBtnCol}
    $primBg={themes[skin].primBtnBg}
    $primBgH={themes[skin].primBtnBgH}
    $primBgA={themes[skin].primBtnBgA}
    $secCol={themes[skin].secBtnCol}
    $secBorderCol={themes[skin].secBtnBorderCol}
    $secBgH={themes[skin].secBtnBgH}
    $secBgA={themes[skin].secBtnBgA}
    onClick={btn.onClick}
    disabled={btn.disabled}
  >
    {btn.label}
  </ActionButton>
)

const actionButtonEdit = (btn) => (
  <ActionButtonEdit
    key={btn.label}
    $primary={btn.variant == "primary" ? true : false}
    $primCol={themes[skin].primBtnCol}
    $primBg={themes[skin].primBtnBg}
    $primBgH={themes[skin].primBtnBgH}
    $primBgA={themes[skin].primBtnBgA}
    $secCol={themes[skin].secBtnCol}
    $secBorderCol={themes[skin].secBtnBorderCol}
    $secBgH={themes[skin].secBtnBgH}
    $secBgA={themes[skin].secBtnBgA}
    onClick={() => {
      btn.onClick();
    }}
    disabled={btn.disabled}
  >
    {btn.label.toLowerCase().includes("prev") ? iconPrevEdit : null} {btn.label}{" "}
    {btn.label.toLowerCase().includes("next") ? iconNextEdit : null}
  </ActionButtonEdit>
)

const navButtons = !buttons ? null : props.type === "callout" ? (
  <ActionsGroup $type={props.type}>
    {buttons.map((btn) => actionButton(btn))}
  </ActionsGroup>
) : buttons?.length > 1 ? (
  <ActionsGroup $type={props.type}>
    {actionButton(buttons[1])}
    {actionButton(buttons[0])}
  </ActionsGroup>
) : buttons?.length === 1 ? (
  <ActionsGroup $type={props.type}>{actionButton(buttons[0])}</ActionsGroup>
) : (
  <></>
)

const navButtonsEdit = !buttons ? null : props.type === "callout" ? (
  <ActionsGroupEdit $type={props.type}>
    {buttons.map((btn) => actionButtonEdit(btn))}
  </ActionsGroupEdit>
) : buttons?.length > 1 ? (
  <ActionsGroupEdit $type={props.type}>
    {actionButtonEdit(buttons[1])}
    {actionButtonEdit(buttons[0])}
  </ActionsGroupEdit>
) : buttons?.length === 1 ? (
  <ActionsGroupEdit $type={props.type}>
    {actionButtonEdit(buttons[0])}
  </ActionsGroupEdit>
) : (
  <></>
)

const callout = (
  <Callout
    data-mweb-context-type="wg-chapter"
    data-mweb-context-parsed={JSON.stringify({ id: props.id })}
    $border={themes[skin].border}
    $bg={themes[skin].bgMain}
  >
    {header}
    {isEditTarget ? (
      <DappletContextPicker
        target={[
          {
            namespace: NAMESPACE,
            contextType: "timeline",
            if: {},
          },
          {
            namespace: NAMESPACE,
            contextType: "post",
            if: {},
          },
          {
            namespace: NAMESPACE,
            contextType: "postSouthButton",
            if: {},
          },
          {
            namespace: NAMESPACE,
            contextType: "profile",
            if: {},
          },
          {
            namespace: "mweb",
            contextType: "mweb-overlay",
            if: { id: { eq: "mutation-button" } },
          },
          {
            namespace: "mweb",
            contextType: "mweb-overlay",
            if: { id: { eq: "open-apps-button" } },
          },
          {
            namespace: "mweb",
            contextType: "mweb-overlay-action",
            if: {},
          },
          {
            namespace: "mweb",
            contextType: "injected-widget",
            if: {},
          },
          {
            namespace: "mweb",
            contextType: "notch",
            if: {},
          },
        ]}
        onClick={setSelectedContext}
        LatchComponent={ContextTypeLatch}
      />
    ) : null}

    {!content || isEditMode ? (
      <>
     
        {navButtonsEdit}
        <EditInputsBlock>
          <FloatingLabelContainer>
            <StyledInput
              id={"target"}
              readonly
              type={"text"}
              value={props.type}
            />
            <StyledLabel htmlFor={"target"}>Target</StyledLabel>
            <EditTargetSpan onClick={() => setEditTarget(!isEditTarget)}>
              {iconEditTarget}
            </EditTargetSpan>
          </FloatingLabelContainer>
          {title ? (
            <FloatingLabelContainer>
              <StyledInput
                id={"title"}
                type={"text"}
                defaultValue={newTitle}
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setNewTitle(e.target.value);
                }}
              />
              <StyledLabel htmlFor={"title"}>Page name</StyledLabel>
            </FloatingLabelContainer>
          ) : null}

          <FloatingLabelContainerArea>
            <StyledTextarea
              id={"description"}
              defaultValue={newData}
              onChange={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setNewData(e.target.value);
              }}
            ></StyledTextarea>
            <StyledLabel htmlFor={"description"}>Description</StyledLabel>
          </FloatingLabelContainerArea>
        </EditInputsBlock>
        <EditButtonsBlock>
          {isEditMode ? (
            <SuccessButton
              $background={"#4E77E1"}
              $border={"#fff"}
              $color={"#fff"}
              onClick={() => setEditMode(false)}
            >
              Cancel
            </SuccessButton>
          ) : null}
          <SuccessButton
            $background={"#fff"}
            $border={"#fff"}
            $color={"#4E77E1"}
            onClick={handleSave}
          >
            Save guide
          </SuccessButton>
        </EditButtonsBlock>
      </>
    ) : (
      <>
        {props.status?.text ? statuses : null}
        {title ? (
          <Title $type={props.type} $col={themes[skin].colorMain}>
            {title}
          </Title>
        ) : null}
        <MarkdownWrapper
          $colH={themes[skin].colorMain}
          $colP={themes[skin].colorP}
        >
          <Markdown text={content} />
        </MarkdownWrapper>
        {showChecked ? checkbox : null}
        {navButtons}
      </>
    )}
    <div data-mweb-insertion-point="hidden" style={{ display: "none" }} />
  </Callout>
)

const calloutTooltip = {
  DEFAULT: (
    <CustomTooltipDefault bsPrefix="wg-tooltip">{callout}</CustomTooltipDefault>
  ),
  META_GUIDE: (
    <CustomTooltipMeta bsPrefix="wg-tooltip">{callout}</CustomTooltipMeta>
  ),
}

const infobox = (
  <InfoBox $border={themes[skin].border} $bg={themes[skin].bgMain}>
    {header}
    {isEditTarget ? (
      <DappletContextPicker
        target={[
          {
            namespace: NAMESPACE,
            contextType: "timeline",
            if: {},
          },
          {
            namespace: NAMESPACE,
            contextType: "post",
            if: {},
          },
          {
            namespace: NAMESPACE,
            contextType: "postSouthButton",
            if: {},
          },
          {
            namespace: NAMESPACE,
            contextType: "profile",
            if: {},
          },
          {
            namespace: "mweb",
            contextType: "mweb-overlay",
            if: { id: { eq: "mutation-button" } },
          },
          {
            namespace: "mweb",
            contextType: "mweb-overlay",
            if: { id: { eq: "open-apps-button" } },
          },
          {
            namespace: "mweb",
            contextType: "mweb-overlay-action",
            if: {},
          },
          {
            namespace: "mweb",
            contextType: "injected-widget",
            if: {},
          },
          {
            namespace: "mweb",
            contextType: "notch",
            if: {},
          },
        ]}
        onClick={setSelectedContext}
        LatchComponent={ContextTypeLatch}
      />
    ) : null}
    {!content || isEditMode ? (
      <>
        {navButtonsEdit}
        <EditInputsBlock>
          <FloatingLabelContainer>
            <StyledInput id={"target"} type={"text"} value={props.type} />
            <StyledLabel htmlFor={"target"}>Target</StyledLabel>
            <EditTargetSpan onClick={() => setEditTarget(!isEditTarget)}>
              {iconEditTarget}
            </EditTargetSpan>
          </FloatingLabelContainer>
          {title ? (
            <FloatingLabelContainer>
              <StyledInput
                id={"title"}
                type={"text"}
                defaultValue={newTitle}
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setNewTitle(e.target.value);
                }}
              />
              <StyledLabel htmlFor={"title"}>Page name</StyledLabel>
            </FloatingLabelContainer>
          ) : null}

          <FloatingLabelContainerArea>
            <StyledTextarea
              id={"description"}
              defaultValue={newData}
              onChange={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setNewData(e.target.value);
              }}
            ></StyledTextarea>
            <StyledLabel htmlFor={"description"}>Description</StyledLabel>
          </FloatingLabelContainerArea>
        </EditInputsBlock>
        <EditButtonsBlock>
          {isEditMode ? (
            <SuccessButton
              $background={"#4E77E1"}
              $border={"#fff"}
              $color={"#fff"}
              onClick={() => setEditMode(false)}
            >
              Cancel
            </SuccessButton>
          ) : null}
          <SuccessButton
            $background={"#fff"}
            $border={"#fff"}
            $color={"#4E77E1"}
            onClick={handleSave}
          >
            Save guide
          </SuccessButton>
        </EditButtonsBlock>
      </>
    ) : (
      <>
        {title ? (
          <Title $type={props.type} $col={themes[skin].colorMain}>
            {title}
          </Title>
        ) : null}
        <Card $bg={themes[skin].cardBg}>
          {props.status?.text ? statuses : null}
          <MarkdownWrapper
            $colH={themes[skin].colorMain}
            $colP={themes[skin].colorP}
          >
            <Markdown text={content} />
          </MarkdownWrapper>
        </Card>
        <Footer>
          {showChecked ? checkbox : null}
          {navButtons}
        </Footer>
      </>
    )}
  </InfoBox>
)

const overlayByType = {
  callout: (
    <DappletOverlayTrigger
      show={true}
      overlay={calloutTooltip[skin]}
      placement={props.placement ?? "auto"}
      offset={[0, 20]}
      popperConfig={{ strategy: props.strategy ?? "absolute" }}
    >
      {typeof props.children === "function" ? (
        props.children
      ) : (
        <span>{props.children}</span>
      )}
    </DappletOverlayTrigger>
  ),
  infobox,
}

return overlayByType[props.type]
