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

const Theme = ({ skin, children }) => {
  switch (skin) {
    case 'DEFAULT':
      return <DefaultTheme children={children} />
    case 'META_GUIDE':
      return <MetaGuideTheme children={children} />
    default:
      return <></>
  }
}

const InfoBox = styled.div`
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 546px;
  height: 656px;
  border: 1px solid var(--border);
  background: var(--bgMain);
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  box-shadow: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 320px;
  padding: 12px 14px 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bgMain);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  &.edit-mode {
    width: 360px;
  }
`

const Header = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: var(--colorMain);
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
  color: var(--colorMain);
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

const Navi = styled.button`
  box-sizing: border-box;
  padding: 0 !important;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background: var(--navActive);
    border: none;
  }

  &.inactive {
    background: var(--navInactiveBg);
    border: 1px solid var(--navInactiveBorder);
  }
`

const HeaderButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
  justify-content: flex-end;
`

const Close = styled.button`
  display: flex;
  flex-direction: row-reverse;
  background: inherit;
  outline: none;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`

const EditButton = styled.button`
  display: flex;
  flex-direction: row-reverse;
  background: inherit;
  outline: none;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`

const Title = styled.h1`
  padding: 0;
  margin: 0 0 -10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: var(--colorMain);
  font-style: normal;
  font-weight: 600;
  line-height: 149%;

  &.infobox {
    font-size: 32px;
  }

  &.callout {
    font-size: 18px;
  }
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
  outline: none;

  &.warning {
    background: var(--primBtnBg);
    color: var(--statusWarningCol);
  }

  &.error {
    background: var(--primBtnBg);
    color: var(--statusErrorCol);
  }

  &.info {
    background: var(--statusInfoBg);
    color: var(--statusInfoCol);
  }
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
  width: 100%;
  background: var(--cardBg);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  overflow-x: hidden;
`

const MarkdownWrapper = styled.div`
  width: 100%;
  word-break: break-word;

  h3 {
    padding: 8px 0 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: var(--colorMain);
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 149%;
    color: var(--colorP);
    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }

  a {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 149%;
    text-decoration-line: underline !important;
    color: var(--colorMain);
    cursor: 'poiner';
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

  &.infobox {
    align-items: flex-end;
  }

  &.callout {
    align-items: flex-start;
  }
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
  align-items: center;
  gap: 10px;
  align-self: stretch;
  flex-grow: 1;

  &.infobox {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  &.callout {
    flex-direction: row;
    justify-content: center;
  }
`

const ActionsGroupEdit = styled.div`
  display: flex;
  flex-direction: row;
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
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;

  &.primary {
    border: initial;
    background: var(--primBtnBg);
    color: var(--primBtnCol);

    &:hover&:not(:disabled) {
      background: var(--primBtnBgH);
    }

    &:active&:not(:disabled) {
      background: var(--primBtnBgA);
    }
    &:disabled {
      opacity: 0.3;
    }
  }

  &.secondary {
    border: 1px solid var(--secBtnBorderCol);
    background: initial;
    color: var(--secBtnCol);

    &:hover&:not(:disabled) {
      background: var(--secBtnBgH);
    }

    &:active&:not(:disabled) {
      background: var(--secBtnBgA);
    }

    &:disabled {
      opacity: 0.3;
    }
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
  color: var(--colorMain);

  &:hover&:not(:disabled) {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.3;
  }
`

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 6L6 18"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6.5L18 18.5"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ErrorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g clipPath="url(#clip0_358_97)">
      <path
        d="M6.54996 1.66666H13.45L18.3333 6.54999V13.45L13.45 18.3333H6.54996L1.66663 13.45V6.54999L6.54996 1.66666Z"
        stroke="var(--statusErrorCol)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 7.5L7.5 12.5"
        stroke="var(--statusErrorCol)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 7.5L12.5 12.5"
        stroke="var(--statusErrorCol)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_358_97">
        <rect width="20" height="20" fill="var(--colorMain)" />
      </clipPath>
    </defs>
  </svg>
)

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g clipPath="url(#clip0_358_90)">
      <path
        d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6023 1.66667 9.99996 1.66667C5.39759 1.66667 1.66663 5.39763 1.66663 10C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z"
        stroke="var(--statusInfoCol)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.3333V10"
        stroke="var(--statusInfoCol)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6.66667H10.0088"
        stroke="var(--statusInfoCol)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_358_90">
        <rect width="20" height="20" fill="var(--colorMain)" />
      </clipPath>
    </defs>
  </svg>
)

const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M8.57502 3.21665L1.51668 15C1.37116 15.252 1.29416 15.5377 1.29334 15.8288C1.29253 16.1198 1.36793 16.4059 1.51204 16.6588C1.65615 16.9116 1.86396 17.1223 2.11477 17.2699C2.36559 17.4174 2.65068 17.4968 2.94168 17.5H17.0583C17.3494 17.4968 17.6344 17.4174 17.8853 17.2699C18.1361 17.1223 18.3439 16.9116 18.488 16.6588C18.6321 16.4059 18.7075 16.1198 18.7067 15.8288C18.7059 15.5377 18.6289 15.252 18.4834 15L11.425 3.21665C11.2765 2.97174 11.0673 2.76925 10.8177 2.62872C10.5681 2.48819 10.2865 2.41437 10 2.41437C9.71357 2.41437 9.43196 2.48819 9.18235 2.62872C8.93275 2.76925 8.72358 2.97174 8.57502 3.21665Z"
      stroke="var(--statusWarningCol)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 7.5V10.8333"
      stroke="var(--statusWarningCol)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14.1667H10.0088"
      stroke="var(--statusWarningCol)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const iconEditTarget = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13.5901 1.9194C13.4044 1.73365 13.1839 1.5863 12.9412 1.48577C12.6985 1.38524 12.4384 1.3335 12.1758 1.3335C11.9131 1.3335 11.653 1.38524 11.4103 1.48577C11.1677 1.5863 10.9472 1.73365 10.7614 1.9194L9.34677 3.3334L8.87544 2.8614C8.8135 2.79951 8.73997 2.75042 8.65906 2.71693C8.57815 2.68345 8.49144 2.66624 8.40387 2.66627C8.3163 2.6663 8.2296 2.68358 8.14871 2.71711C8.06783 2.75065 7.99434 2.7998 7.93244 2.86174C7.87054 2.92368 7.82145 2.9972 7.78797 3.07811C7.75449 3.15902 7.73727 3.24574 7.7373 3.3333C7.73734 3.42087 7.75461 3.50757 7.78815 3.58846C7.82169 3.66935 7.87083 3.74284 7.93277 3.80474L11.7041 7.5754C11.8303 7.69393 11.9977 7.7587 12.1708 7.75601C12.3439 7.75332 12.5092 7.68338 12.6317 7.561C12.7542 7.43861 12.8242 7.27337 12.8271 7.10025C12.8299 6.92713 12.7652 6.7597 12.6468 6.6334L12.1754 6.16207L13.5901 4.7474C13.965 4.37235 14.1757 3.86373 14.1757 3.3334C14.1757 2.80307 13.965 2.29446 13.5901 1.9194Z"
      fill="var(--colorMain)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.95301 4.72754L2.76767 9.91354C2.47506 10.206 2.28031 10.582 2.21023 10.9897C2.14014 11.3974 2.19818 11.8168 2.37634 12.1902L1.33301 13.2335L2.27567 14.1769L3.31901 13.1329C3.69232 13.3111 4.1117 13.3693 4.51942 13.2993C4.92714 13.2293 5.30315 13.0347 5.59567 12.7422L10.781 7.55687L7.95301 4.72754ZM8.89567 7.55621L7.95301 6.61354L3.71034 10.8562C3.5889 10.9819 3.52171 11.1503 3.52323 11.3251C3.52474 11.4999 3.59486 11.6671 3.71846 11.7908C3.84207 11.9144 4.00928 11.9845 4.18407 11.986C4.35887 11.9875 4.52727 11.9203 4.65301 11.7989L8.89567 7.55621Z"
      fill="var(--colorMain)"
    />
  </svg>
)

const EditButtonsBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  padding: 0 10px;
`

const editIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.76923 8H5.84615C5.35652 8 4.88695 8.1945 4.54073 8.54073C4.1945 8.88695 4 9.35652 4 9.84615V18.1538C4 18.6435 4.1945 19.1131 4.54073 19.4593C4.88695 19.8055 5.35652 20 5.84615 20H14.1538C14.6435 20 15.1131 19.8055 15.4593 19.4593C15.8055 19.1131 16 18.6435 16 18.1538V17.2308"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9999 6.00009L17.9999 9.00006M19.3849 7.58508C19.7787 7.19123 20 6.65707 20 6.10009C20 5.54311 19.7787 5.00894 19.3849 4.6151C18.9911 4.22126 18.4569 4 17.8999 4C17.3429 4 16.8088 4.22126 16.4149 4.6151L8 13V16H11L19.3849 7.58508Z"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const viewIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M5.77778 20C5.28889 20 4.87052 19.8261 4.52267 19.4782C4.17481 19.1304 4.00059 18.7117 4 18.2222V5.77778C4 5.28889 4.17422 4.87052 4.52267 4.52267C4.87111 4.17481 5.28948 4.00059 5.77778 4H18.2222C18.7111 4 19.1298 4.17422 19.4782 4.52267C19.8267 4.87111 20.0006 5.28948 20 5.77778V18.2222C20 18.7111 19.8261 19.1298 19.4782 19.4782C19.1304 19.8267 18.7117 20.0006 18.2222 20H5.77778ZM5.77778 18.2222H18.2222V7.55556H5.77778V18.2222ZM12 16.4444C10.7852 16.4444 9.70015 16.115 8.74489 15.456C7.78963 14.797 7.09689 13.9413 6.66667 12.8889C7.0963 11.837 7.78904 10.9816 8.74489 10.3227C9.70074 9.6637 10.7858 9.33393 12 9.33333C13.2142 9.33274 14.2996 9.66252 15.256 10.3227C16.2124 10.9828 16.9049 11.8382 17.3333 12.8889C16.9037 13.9407 16.2113 14.7964 15.256 15.456C14.3007 16.1156 13.2154 16.445 12 16.4444ZM12 14.2222C11.6296 14.2222 11.315 14.0927 11.056 13.8338C10.797 13.5748 10.6673 13.2599 10.6667 12.8889C10.6661 12.5179 10.7959 12.2033 11.056 11.9449C11.3161 11.6865 11.6308 11.5567 12 11.5556C12.3692 11.5544 12.6841 11.6841 12.9449 11.9449C13.2056 12.2056 13.3351 12.5203 13.3333 12.8889C13.3316 13.2575 13.2021 13.5724 12.9449 13.8338C12.6877 14.0951 12.3727 14.2246 12 14.2222ZM12 15.1111C12.6222 15.1111 13.1481 14.8963 13.5778 14.4667C14.0074 14.037 14.2222 13.5111 14.2222 12.8889C14.2222 12.2667 14.0074 11.7407 13.5778 11.3111C13.1481 10.8815 12.6222 10.6667 12 10.6667C11.3778 10.6667 10.8519 10.8815 10.4222 11.3111C9.99259 11.7407 9.77778 12.2667 9.77778 12.8889C9.77778 13.5111 9.99259 14.037 10.4222 14.4667C10.8519 14.8963 11.3778 15.1111 12 15.1111Z"
      fill="var(--colorMain)"
    />
  </svg>
)

const iconPrevEdit = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M11.0837 7H2.91699"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.00033 11.0832L2.91699 6.99984L7.00033 2.9165"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const iconNextEdit = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2.91699 7H11.0837"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 2.9165L11.0833 6.99984L7 11.0832"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const iconPlus = (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path
      d="M8.49967 14.6668C12.1816 14.6668 15.1663 11.6821 15.1663 8.00016C15.1663 4.31826 12.1816 1.3335 8.49967 1.3335C4.81778 1.3335 1.83301 4.31826 1.83301 8.00016C1.83301 11.6821 4.81778 14.6668 8.49967 14.6668Z"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 5.3335V10.6668"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83301 8H11.1663"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const iconRemove = (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path
      d="M2.5 4H3.83333H14.5"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.1663 4.00016V13.3335C13.1663 13.6871 13.0259 14.0263 12.7758 14.2763C12.5258 14.5264 12.1866 14.6668 11.833 14.6668H5.16634C4.81272 14.6668 4.47358 14.5264 4.22353 14.2763C3.97348 14.0263 3.83301 13.6871 3.83301 13.3335V4.00016M5.83301 4.00016V2.66683C5.83301 2.31321 5.97348 1.97407 6.22353 1.72402C6.47358 1.47397 6.81272 1.3335 7.16634 1.3335H9.83301C10.1866 1.3335 10.5258 1.47397 10.7758 1.72402C11.0259 1.97407 11.1663 2.31321 11.1663 2.66683V4.00016"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.16699 7.3335V11.3335"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.83301 7.3335V11.3335"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const iconRevert = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M5.33333 2L2 5.33333L5.33333 8.66667M8 13.3333H10C10.5253 13.3333 11.0454 13.2299 11.5307 13.0289C12.016 12.8278 12.457 12.5332 12.8284 12.1618C13.1999 11.7903 13.4945 11.3494 13.6955 10.8641C13.8965 10.3788 14 9.85862 14 9.33333C14 8.80805 13.8965 8.2879 13.6955 7.8026C13.4945 7.3173 13.1999 6.87634 12.8284 6.50491C12.457 6.13347 12.016 5.83883 11.5307 5.63782C11.0454 5.4368 10.5253 5.33333 10 5.33333H2.66667"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
    />
  </svg>
)

const SuccessButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 12px !important;
  min-width: 125px;
  background: var(--primBtnCol);
  border-radius: 10px;
  border: 1px solid var(--primBtnBg);
  cursor: pointer;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 149%;
  text-align: center;
  color: var(--primBtnBg);
  transition-duration: 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover:not(:disabled) {
    background: var(--primBtnBg01);
  }
`

const EditInputsBlock = styled.div`
  width: 100%;
  padding: 10px;
  padding-bottom: 0;
  border-radius: 10px;
  background: var(--bgInfoBlock);
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`
const TargetBlock = styled.div`
  display: flex;
  width: 100%;
  column-gap: 10px;
`
const FloatingLabelContainer = styled.div`
  background: var(--bgMain);
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  position: relative;
  flex: 1 1 auto;
  display: flex;
`

const FloatingLabelContainerArea = styled.div`
  background: var(--bgMain);
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  position: relative;
  flex: 1 1 auto;
  display: flex;
  border: 1px solid rgb(226, 226, 229);
  border-radius: 10px;
`

const StyledInput = styled.input`
  padding: 25px 10px 10px 10px;
  background: inherit;
  color: var(--colorMain);
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

const StyledLabel = styled.label`
  position: absolute;
  top: 25px;
  left: 10px;
  font-size: 1rem;
  color: #bbccd0;
  pointer-events: none;
  transition: all 0.2s ease 0s;
`

const StyledTextarea = styled.textarea`
  padding: 25px 10px 10px;
  background: inherit;
  color: var(--colorMain);
  line-height: 100%;
  font-size: 13px;
  border-radius: 10px;
  width: 100%;
  outline: none;
  min-height: 150px;
  position: relative;
  border: none;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    height: 25px;
    width: 99%;
    background: inherit;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    top: 0;
    left: 10px;
    font-size: 12px;
  }
`

const InputButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 6px;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 6px;
  right: 10px;
`

const EditTargetButton = styled.button`
  outline: none;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0 !important;
  margin: 0;
  cursor: pointer;
`

const OptionsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`

const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--colorMain);
  font-size: 12px;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.3;
  }
`

const ButtonRevert = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--colorMain);
  font-size: 12px;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover:not(:disabled) {
    opacity: 0.5;
  }
`

const AddedBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`

const AddedPageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--colorMain);
  width: 50%;
  font-size: 12px;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  &:hover&:not(:disabled) {
    opacity: 0.5;
  }
`

const AddedChapterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--colorMain);
  width: 50%;
  font-size: 12px;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  &:hover&:not(:disabled) {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.3;
  }
`

const LoaderBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
`

const Loader = styled.div`
  width: ${(props) => (props.$halfSize ? '24px' : '48px')};
  height: ${(props) => (props.$halfSize ? '24px' : '48px')};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #282828 #282828 transparent transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent transparent #4e77e1 #4e77e1;
    width: ${(props) => (props.$halfSize ? '20px' : '40px')};
    height: ${(props) => (props.$halfSize ? '20px' : '40px')};
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }
  &::before {
    width: ${(props) => (props.$halfSize ? '16px' : '32px')};
    height: ${(props) => (props.$halfSize ? '16px' : '32px')};
    border-color: #282828 #282828 transparent transparent;
    animation: rotation 1.5s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`

const AutoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <mask id="path-1-inside-1_2231_331" fill="var(--colorMain)">
      <path d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z" />
    </mask>
    <path
      d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z"
      fill="var(--colorMain)"
      fillOpacity="0.15"
    />
    <path
      d="M0.333984 0H18.334H0.333984ZM18.334 18H0.333984H18.334ZM2.33398 18C0.124845 18 -1.66602 16.2091 -1.66602 14V4C-1.66602 1.79086 0.124845 0 2.33398 0C2.33398 0 2.33398 0.895431 2.33398 2V16C2.33398 17.1046 2.33398 18 2.33398 18ZM16.334 0C18.5431 0 20.334 1.79086 20.334 4V14C20.334 16.2091 18.5431 18 16.334 18C16.334 18 16.334 17.1046 16.334 16V2C16.334 0.895431 16.334 0 16.334 0Z"
      fill="var(--colorMain)"
      mask="url(#path-1-inside-1_2231_331)"
    />
    <rect x="7.33398" y="7" width="4" height="4" rx="1" fill="var(--colorMain)" />
  </svg>
)

const LeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <mask id="path-1-inside-1_2231_333" fill="var(--colorMain)">
      <path d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z" />
    </mask>
    <path
      d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z"
      fill="#4E77E1"
      fillOpacity="0.15"
    />
    <path
      d="M0.333984 0H18.334H0.333984ZM18.334 18H0.333984H18.334ZM0.333984 18V0V18ZM16.334 0C18.5431 0 20.334 1.79086 20.334 4V14C20.334 16.2091 18.5431 18 16.334 18C16.334 18 16.334 17.1046 16.334 16V2C16.334 0.895431 16.334 0 16.334 0Z"
      fill="#4E77E1"
      mask="url(#path-1-inside-1_2231_333)"
    />
    <path
      d="M7.83398 12L10.834 9L7.83398 6"
      stroke="#4E77E1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const RightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <mask id="path-1-inside-1_2231_316" fill="var(--colorMain)">
      <path d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z" />
    </mask>
    <path
      d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z"
      fill="#4E77E1"
      fillOpacity="0.15"
    />
    <path
      d="M0.333984 0H18.334H0.333984ZM18.334 18H0.333984H18.334ZM2.33398 18C0.124845 18 -1.66602 16.2091 -1.66602 14V4C-1.66602 1.79086 0.124845 0 2.33398 0C2.33398 0 2.33398 0.895431 2.33398 2V16C2.33398 17.1046 2.33398 18 2.33398 18ZM18.334 0V18V0Z"
      fill="#4E77E1"
      mask="url(#path-1-inside-1_2231_316)"
    />
    <path
      d="M10.834 12L7.83398 9L10.834 6"
      stroke="#4E77E1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const TopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <mask id="path-1-inside-1_2231_329" fill="var(--colorMain)">
      <path d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z" />
    </mask>
    <path
      d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z"
      fill="#4E77E1"
      fillOpacity="0.15"
    />
    <path
      d="M0.333984 0H18.334H0.333984ZM18.334 16C18.334 18.2091 16.5431 20 14.334 20H4.33398C2.12485 20 0.333984 18.2091 0.333984 16C0.333984 16 1.22941 16 2.33398 16H16.334C17.4386 16 18.334 16 18.334 16ZM0.333984 18V0V18ZM18.334 0V18V0Z"
      fill="#4E77E1"
      mask="url(#path-1-inside-1_2231_329)"
    />
    <path
      d="M6.33398 7.5L9.33398 10.5L12.334 7.5"
      stroke="#4E77E1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const BottomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <mask id="path-1-inside-1_2231_327" fill="var(--colorMain)">
      <path d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z" />
    </mask>
    <path
      d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z"
      fill="#4E77E1"
      fillOpacity="0.15"
    />
    <path
      d="M0.333984 2C0.333984 -0.209139 2.12485 -2 4.33398 -2H14.334C16.5431 -2 18.334 -0.209139 18.334 2C18.334 2 17.4386 2 16.334 2H2.33398C1.22941 2 0.333984 2 0.333984 2ZM18.334 18H0.333984H18.334ZM0.333984 18V0V18ZM18.334 0V18V0Z"
      fill="#4E77E1"
      mask="url(#path-1-inside-1_2231_327)"
    />
    <path
      d="M12.334 10.5L9.33398 7.5L6.33398 10.5"
      stroke="#4E77E1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SwitchThemesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M19.1144 12.672C18.7253 12.2824 18.2219 12.0274 17.6776 11.944L18.1888 11.432C18.4288 11.1888 18.6184 10.9008 18.7472 10.584C18.8792 10.2699 18.9472 9.93268 18.9472 9.592C18.9472 9.25132 18.8792 8.91406 18.7472 8.6C18.6196 8.28289 18.4297 7.99455 18.1888 7.752L16.1376 5.704C15.9136 5.46187 15.6421 5.26851 15.34 5.136C15.025 5.00528 14.6874 4.938 14.3464 4.938C14.0054 4.938 13.6678 5.00528 13.3528 5.136C13.0522 5.26799 12.7808 5.45833 12.5544 5.696L12.044 6.208C11.9525 5.5949 11.6442 5.03492 11.1752 4.6296C10.7071 4.22475 10.1093 4.00134 9.4904 4H6.5936C5.90593 4.00237 5.2472 4.27708 4.7616 4.764C4.27532 5.25147 4.00155 5.91146 4 6.6V17.4C4 18.0896 4.2736 18.7512 4.76 19.2384C5.2464 19.7264 5.9056 20 6.5936 20H17.3664C17.7101 19.9946 18.0494 19.9212 18.3645 19.7839C18.6797 19.6466 18.9645 19.4481 19.2024 19.2C19.4509 18.9617 19.6494 18.6762 19.7864 18.3603C19.9233 18.0443 19.9959 17.7043 20 17.36V14.496C19.9821 14.1481 19.8945 13.8074 19.7423 13.4941C19.5902 13.1808 19.3767 12.9012 19.1144 12.672ZM7.9424 17.88C7.57109 17.8803 7.20808 17.7702 6.89953 17.5636C6.59098 17.3571 6.35082 17.0634 6.2096 16.72C6.06806 16.3763 6.03112 15.9985 6.10341 15.6339C6.17571 15.2692 6.35402 14.9341 6.616 14.6704C6.87799 14.4066 7.21258 14.2267 7.57714 14.1537C7.9417 14.0808 8.31974 14.1179 8.66311 14.2605C9.00647 14.4031 9.29963 14.6447 9.50522 14.9545C9.71082 15.2642 9.81957 15.6282 9.8176 16C9.8176 16.4984 9.62 16.9768 9.268 17.3296C8.916 17.6824 8.4392 17.88 7.9424 17.88ZM11.988 7.864L13.3048 6.544C13.4344 6.4136 13.5896 6.3096 13.76 6.24C14.1008 6.104 14.48 6.104 14.8208 6.24C14.9899 6.31467 15.1416 6.416 15.276 6.544L17.3264 8.6C17.4532 8.73339 17.556 8.88765 17.6304 9.056C17.7684 9.40002 17.7684 9.78398 17.6304 10.128C17.5584 10.296 17.4552 10.448 17.3264 10.576L11.988 15.936V7.864Z"
      fill="var(--colorMain)"
    />
  </svg>
)

const ButtonPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 40px;
  border: 1px solid #ffffff99;
  border-radius: 10px;
  background: #ffffff55;
`

const {
  guideTitle,
  guideDescription,
  isConfigEdited,
  isPageEdited,
  contextId,
  contextType,
  navi,
  onClose,
  // status, - conflict with deprecated Window.status property
  buttons,
  showChecked,
  checked,
  onDoNotShowChange,
  skin,
  onSkinToggle,
  title,
  content,
  mutatorId,
  isEditMode,
  setEditMode,
  startEditTarget,
  handleTargetRemove,
  onPageDataChange,
  onPageAdd,
  onChapterAdd,
  onPageRemove,
  buttonRemoveDisabled,
  onRevertChanges,
  handleRemoveAllChanges,
  closeSaveChangesPopup,
  onClickPageIndicator,
  handleExportConfig,
  handleSave,
  noTarget,
  onPlacementChange,
  placement,
} = props

const [newTitle, setNewTitle] = useState(title)
const [newContent, setNewContent] = useState(content)
const [savingStarted, setSavingStarted] = useState(false)
const [publishStatusMessage, setPublishStatusMessage] = useState(null)

useEffect(() => {
  setNewTitle(title)
  setNewContent(content)
  setPublishStatusMessage(null)
}, [navi, title, content, contextType, contextId])

useEffect(() => {
  setSavingStarted(false)
}, [isEditMode])

const handleMainButtonClick = (editActionValue) => {
  switch (editActionValue) {
    case 'publish':
      setSavingStarted(true)
      const emptyPages = handleSave({
        newTitle,
        newContent,
      })
      if (emptyPages) {
        setSavingStarted(false)
        setPublishStatusMessage({
          type: 'error',
          text: `There ${emptyPages.length === 1 ? `is ${emptyPages[0]} empty page` : `are ${emptyPages.join(', ')} empty pages`} in this guide. Please, fill or remove ${emptyPages.length === 1 ? `it` : `them`} before publishing.`,
        })
      }
      break
    case 'export':
      return handleExportConfig({
        newTitle,
        newContent,
      })
    default:
      console.error('No such an edit action')
  }
}

const handleSavePageChanges = () => {
  onPageDataChange({
    newTitle,
    newContent,
  })
}

const header = (
  <Header>
    <TopLine>
      <HeaderButtonGroup>
        {isEditMode ? (
          <EditButton onClick={onSkinToggle}>
            <SwitchThemesIcon />
          </EditButton>
        ) : null}

        {context.accountId === mutatorId ? (
          <EditButton
            onClick={() => {
              handleSavePageChanges()
              setEditMode(!isEditMode)
            }}
          >
            {isEditMode ? viewIcon : editIcon}
          </EditButton>
        ) : null}
        <Close onClick={onClose}>
          <CloseIcon />
        </Close>
      </HeaderButtonGroup>
      {navi ? (
        <>
          <PagesIndicators>
            {navi.totalPages > 1 &&
              [...Array(navi?.totalPages)].map((_, index) => (
                <Navi
                  key={index}
                  className={index == navi?.currentPageIndex ? 'active' : 'inactive'}
                  title={`Page ${index + 1}`}
                  onClick={() => onClickPageIndicator({ index, newTitle, newContent })}
                />
              ))}
          </PagesIndicators>
          <CalloutHeaderCaption>
            Chapter {navi?.currentChapterIndex + 1} of {navi?.totalChapters}
          </CalloutHeaderCaption>
        </>
      ) : null}
    </TopLine>
  </Header>
)

const statuses = (status) => (
  <WrapperAlert className={status.type}>
    <IconAlert>
      {status.type === 'warning' ? (
        <WarningIcon />
      ) : status.type === 'error' ? (
        <ErrorIcon />
      ) : (
        <InfoIcon />
      )}
    </IconAlert>
    <TextAlert>{status.text}</TextAlert>
  </WrapperAlert>
)

const checkbox = (
  <ContainerCheckbox className={props.type}>
    <CheckboxInput type="checkbox" checked={checked} onChange={onDoNotShowChange} />
    <Label htmlFor="checkbox">Don't show this guide again</Label>
  </ContainerCheckbox>
)

const actionButton = (btn) => (
  <ActionButton
    key={btn.label}
    className={btn.variant}
    onClick={btn.onClick}
    disabled={btn.disabled}
  >
    {btn.label}
  </ActionButton>
)

const actionButtonEdit = (btn) => (
  <ActionButtonEdit
    key={btn.label}
    onClick={() => {
      handleSavePageChanges()
      btn.onClick()
    }}
    disabled={btn.disabled}
  >
    {btn.variant === 'secondary' ? iconPrevEdit : null}
    {btn.label}
    {btn.variant === 'primary' ? iconNextEdit : null}
  </ActionButtonEdit>
)

const navButtons = !buttons ? null : props.type === 'callout' ? (
  <ActionsGroup className={props.type}>{buttons.map((btn) => actionButton(btn))}</ActionsGroup>
) : buttons?.length > 1 ? (
  <ActionsGroup className={props.type}>
    {actionButton(buttons[1])}
    {actionButton(buttons[0])}
  </ActionsGroup>
) : buttons?.length === 1 ? (
  <ActionsGroup className={props.type}>{actionButton(buttons[0])}</ActionsGroup>
) : (
  <></>
)

const navButtonsEdit = !buttons?.length ? null : buttons?.length > 1 ? (
  <ActionsGroupEdit>
    {actionButtonEdit(buttons[0])}
    {actionButtonEdit(buttons[1])}
  </ActionsGroupEdit>
) : buttons[0].variant === 'primary' ? (
  <ActionsGroupEdit>
    <div></div>
    {actionButtonEdit(buttons[0])}
  </ActionsGroupEdit>
) : (
  <ActionsGroupEdit>
    {actionButtonEdit(buttons[0])}
    <div></div>
  </ActionsGroupEdit>
)

const editPage = (
  <>
    {navButtonsEdit}

    {noTarget ? (
      <div style={{ width: '100%', marginTop: -10 }}>
        {statuses({
          type: 'warning',
          text: 'There is no target for this chapter on the web page',
        })}
      </div>
    ) : null}

    {props.status?.text ? statuses(props.status) : null}

    <EditInputsBlock>
      <OptionsBlock>
        <ButtonRemove disabled={buttonRemoveDisabled} onClick={onPageRemove}>
          {iconRemove} Remove page
        </ButtonRemove>
        <ButtonRevert
          disabled={!(isPageEdited || newTitle !== title || newContent !== content)}
          onClick={() => {
            setNewTitle(title)
            setNewContent(content)
            onRevertChanges()
          }}
        >
          {iconRevert}Delete page changes
        </ButtonRevert>
      </OptionsBlock>
      <TargetBlock>
        <FloatingLabelContainer>
          <StyledInput
            id={'target'}
            type={'text'}
            readonly
            disabled
            value={contextType && contextId ? `${contextType}/${contextId}` : 'No target'}
          />
          <StyledLabel htmlFor={'target'}>Target</StyledLabel>
          <InputButtons>
            {props.type === 'callout' && (
              <EditTargetButton
                title="Delete target"
                onClick={() => handleTargetRemove({ newTitle, newContent })}
              >
                <CloseIcon />
              </EditTargetButton>
            )}
            <EditTargetButton
              title="Pick target"
              onClick={() => {
                handleSavePageChanges()
                startEditTarget()
              }}
            >
              {iconEditTarget}
            </EditTargetButton>
          </InputButtons>
        </FloatingLabelContainer>
        {contextType && contextId ? (
          <Widget
            src="${REPL_ACCOUNT}/widget/WebGuide.TargetDropdown"
            loading={<></>}
            props={{
              onItemClick: onPlacementChange,
              oldPosition: placement,
            }}
          />
        ) : null}
      </TargetBlock>
      <FloatingLabelContainer>
        <StyledInput
          id={'title'}
          type={'text'}
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value)
          }}
        />
        <StyledLabel htmlFor={'title'}>Page name</StyledLabel>
      </FloatingLabelContainer>

      <FloatingLabelContainerArea>
        <StyledTextarea
          id={'content'}
          type={'text'}
          value={newContent}
          onChange={(e) => {
            setNewContent(e.target.value)
          }}
        />
        <StyledLabel htmlFor={'content'}>Description</StyledLabel>
      </FloatingLabelContainerArea>
    </EditInputsBlock>

    <AddedBlock>
      <AddedPageButton
        title="Up to 5 pages for the chapter"
        disabled={navi.totalPages >= 5}
        onClick={() => onPageAdd({ newTitle, newContent })}
      >
        {iconPlus}Add new page
      </AddedPageButton>
      <AddedChapterButton onClick={() => onChapterAdd({ newTitle, newContent })}>
        {iconPlus}Add new chapter
      </AddedChapterButton>
    </AddedBlock>

    {publishStatusMessage?.text ? (
      <div style={{ padding: '0 10px', width: '100%' }}>{statuses(publishStatusMessage)}</div>
    ) : null}

    <EditButtonsBlock>
      <SuccessButton
        onClick={() => {
          setEditMode(false)
          handleRemoveAllChanges()
        }}
      >
        {isConfigEdited || newTitle !== title || newContent !== content
          ? 'Delete all local changes'
          : 'Cancel'}
      </SuccessButton>

      <Widget
        src="${REPL_ACCOUNT}/widget/WebGuide.PublishDropdown"
        loading={
          <ButtonPlaceholder>
            <Loader $halfSize />
          </ButtonPlaceholder>
        }
        props={{
          disabled: !(isConfigEdited || newTitle !== title || newContent !== content),
          onMainButtonClick: handleMainButtonClick,
          customActions: [
            { value: 'publish', title: 'Publish' },
            { value: 'export', title: 'Export guide' },
          ],
          skin,
        }}
      />
    </EditButtonsBlock>
  </>
)

return (
  <Theme skin={skin}>
    {props.type === 'callout' ? (
      <Callout className={isEditMode ? 'edit-mode' : ''}>
        {header}
        {isEditMode ? (
          editPage
        ) : (
          <>
            {props.status?.text ? statuses(props.status) : null}
            {title ? <Title className={props.type}>{title}</Title> : null}
            {content ? (
              <MarkdownWrapper>
                <Markdown text={content} />
              </MarkdownWrapper>
            ) : null}
            {showChecked ? checkbox : null}
            {navButtons}
          </>
        )}
        {savingStarted && (
          <LoaderBackground>
            <Loader />
          </LoaderBackground>
        )}
        <div data-mweb-insertion-point="hidden" style={{ display: 'none' }} />
      </Callout>
    ) : props.type === 'infobox' ? (
      <InfoBox>
        {header}
        {isEditMode ? (
          editPage
        ) : (
          <>
            {title ? <Title className={props.type}>{title}</Title> : null}
            <Card>
              {props.status?.text ? statuses(props.status) : null}
              {content ? (
                <MarkdownWrapper>
                  <Markdown text={content} />
                </MarkdownWrapper>
              ) : null}
            </Card>
            <Footer>
              {showChecked ? checkbox : null}
              {navButtons}
            </Footer>
          </>
        )}
        {savingStarted && (
          <LoaderBackground>
            <Loader />
          </LoaderBackground>
        )}
      </InfoBox>
    ) : (
      <></>
    )}
  </Theme>
)
