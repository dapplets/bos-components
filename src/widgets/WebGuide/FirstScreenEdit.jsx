const CustomTooltipDefault = styled('DappletTooltip')`
  z-index: 99999999; // over the notch

  &[data-popper-reference-hidden='true'] {
    visibility: hidden;
    pointer-events: none;
  }
`

const CustomTooltipMeta = styled('DappletTooltip')`
  z-index: 99999999; // over the notch

  &[data-popper-reference-hidden='true'] {
    visibility: hidden;
    pointer-events: none;
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

  background: #f8f9ff;
  box-shadow:
    0px 3px 6px 0px #4741fc0d,
    0px 11px 11px 0px #4741fc0a,
    0px 25px 15px 0px #4741fc08,
    0px 44px 17px 0px #4741fc03,
    0px 68px 19px 0px #4741fc00;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`

const Header = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: #02193a;
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

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow:
    3px 2px 8px 0px #0000000d,
    12px 8px 14px 0px #0000000a,
    27px 18px 19px 0px #00000008,
    47px 32px 23px 0px #00000003,
    74px 50px 25px 0px #00000000;
  margin-top: -20px;
  margin-bottom: 10px;
`

const WebGuideIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
  >
    <circle cx="256" cy="256" r="256" fill="#384BFF" />
    <path
      d="M277.091 233.162V214.675C282.891 212.137 288.824 210.234 294.892 208.966C300.959 207.697 307.328 207.062 314 207.062C318.57 207.062 323.051 207.425 327.445 208.15C331.839 208.875 336.145 209.781 340.364 210.869V228.269C336.145 226.637 331.882 225.416 327.572 224.604C323.262 223.792 318.738 223.382 314 223.375C307.321 223.375 300.906 224.238 294.755 225.963C288.603 227.689 282.715 230.088 277.091 233.162ZM277.091 292.975V274.487C282.891 271.95 288.824 270.047 294.892 268.778C300.959 267.509 307.328 266.875 314 266.875C318.57 266.875 323.051 267.238 327.445 267.963C331.839 268.688 336.145 269.594 340.364 270.681V288.081C336.145 286.45 331.882 285.225 327.572 284.406C323.262 283.586 318.738 283.18 314 283.188C307.321 283.188 300.906 284.003 294.755 285.634C288.603 287.266 282.715 289.712 277.091 292.975ZM277.091 263.069V244.581C282.891 242.044 288.824 240.141 294.892 238.872C300.959 237.603 307.328 236.969 314 236.969C318.57 236.969 323.051 237.331 327.445 238.056C331.839 238.781 336.145 239.688 340.364 240.775V258.175C336.145 256.544 331.882 255.319 327.572 254.499C323.262 253.68 318.738 253.274 314 253.281C307.321 253.281 300.906 254.144 294.755 255.869C288.603 257.595 282.715 259.995 277.091 263.069ZM198 299.5C206.261 299.5 214.303 300.453 222.128 302.36C229.953 304.267 237.728 307.12 245.455 310.919V203.8C238.248 199.45 230.603 196.188 222.518 194.013C214.433 191.838 206.261 190.75 198 190.75C191.673 190.75 185.388 191.384 179.145 192.653C172.902 193.922 166.884 195.825 161.091 198.362V306.025C167.242 303.85 173.352 302.219 179.419 301.131C185.486 300.044 191.68 299.5 198 299.5ZM266.545 310.919C274.279 307.112 282.058 304.26 289.883 302.36C297.707 300.461 305.746 299.507 314 299.5C320.327 299.5 326.524 300.044 332.592 301.131C338.659 302.219 344.765 303.85 350.909 306.025V198.362C345.109 195.825 339.088 193.922 332.845 192.653C326.602 191.384 320.32 190.75 314 190.75C305.739 190.75 297.567 191.838 289.482 194.013C281.397 196.188 273.751 199.45 266.545 203.8V310.919ZM256 343C247.564 336.113 238.424 330.766 228.582 326.959C218.739 323.153 208.545 321.25 198 321.25C190.618 321.25 183.37 322.247 176.255 324.241C169.141 326.234 162.328 329.044 155.818 332.669C152.127 334.662 148.57 334.572 145.146 332.397C141.722 330.222 140.007 327.05 140 322.881V191.837C140 189.844 140.485 187.941 141.455 186.128C142.425 184.316 143.874 182.956 145.8 182.05C153.885 177.7 162.321 174.438 171.109 172.263C179.897 170.088 188.861 169 198 169C208.194 169 218.17 170.359 227.928 173.078C237.686 175.797 247.043 179.875 256 185.312C264.964 179.875 274.324 175.797 284.083 173.078C293.841 170.359 303.813 169 314 169C323.139 169 332.103 170.088 340.891 172.263C349.679 174.438 358.115 177.7 366.2 182.05C368.133 182.956 369.585 184.316 370.555 186.128C371.525 187.941 372.007 189.844 372 191.837V322.881C372 327.05 370.288 330.222 366.864 332.397C363.441 334.572 359.88 334.662 356.182 332.669C349.679 329.044 342.87 326.234 335.755 324.241C328.641 322.247 321.389 321.25 314 321.25C303.454 321.25 293.261 323.153 283.418 326.959C273.576 330.766 264.436 336.113 256 343Z"
      fill="white"
    />
  </svg>
)

const CloseButton = styled.button`
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: #02193a;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26.82px;
  text-align: center;
  margin-bottom: 10px;
`

const ActionButton = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 160px;
  height: 42px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;

  background: #3848ff;
  color: #fff;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;

  &:hover {
    opacity: 0.5;
  }
`

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 6L6 18"
      stroke="#838891"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6.5L18 18.5"
      stroke="#838891"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ImportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.9417 7.6995C10.8245 7.58012 10.6657 7.51306 10.5 7.51306C10.3344 7.51306 10.1756 7.58012 10.0584 7.6995L8.62504 9.1615V2.2C8.62504 2.03092 8.55919 1.86877 8.44198 1.74922C8.32477 1.62966 8.1658 1.5625 8.00004 1.5625C7.83428 1.5625 7.6753 1.62966 7.55809 1.74922C7.44088 1.86877 7.37504 2.03092 7.37504 2.2V9.1615L5.9417 7.6995C5.82322 7.58689 5.66652 7.52559 5.5046 7.5285C5.34268 7.53141 5.18819 7.59832 5.07368 7.71512C4.95917 7.83192 4.89358 7.9895 4.89072 8.15466C4.88787 8.31981 4.94797 8.47965 5.05837 8.6005L7.55837 11.1505C7.67556 11.2699 7.83441 11.3369 8.00004 11.3369C8.16566 11.3369 8.32451 11.2699 8.4417 11.1505L10.9417 8.6005C11.0587 8.48097 11.1245 8.31894 11.1245 8.15C11.1245 7.98106 11.0587 7.81903 10.9417 7.6995Z"
      fill="#4E77E1"
    />
    <path
      d="M12.7902 9C12.4168 9 12.0902 9.2329 11.826 9.50235L9.326 12.0523C9.15189 12.2299 8.94519 12.3708 8.7177 12.4669C8.49021 12.563 8.24639 12.6125 8.00016 12.6125C7.75393 12.6125 7.51011 12.563 7.28263 12.4669C7.05514 12.3708 6.84844 12.2299 6.67433 12.0523L4.17433 9.50235C3.91016 9.2329 3.5835 9 3.21016 9H1.3335C1.3335 10.8035 2.03588 12.5331 3.28612 13.8083C4.53636 15.0836 6.23205 15.8 8.00016 15.8C9.76827 15.8 11.464 15.0836 12.7142 13.8083C13.9645 12.5331 14.6668 10.8035 14.6668 9H12.7902Z"
      fill="#4E77E1"
    />
  </svg>
)

const ImportButton = styled.button`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 20px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: #4e77e1;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;

  svg {
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.5;
  }
`

const { skin, onClose, onStart, onConfigImport } = props

const filesOnChange = (files) => {
  if (!files?.length) return

  const [file] = files
  file
    .text()
    .then((json) => {
      const webGuideConfig = JSON.parse(json)
      onConfigImport(webGuideConfig)
    })
    .catch((err) => {
      console.error(err)
    })
}

const callout = (
  <Callout>
    <Header>
      <TopLine>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </TopLine>
    </Header>

    <LogoWrapper>
      <WebGuideIcon />
    </LogoWrapper>

    <Title>Create a web guide for your mutation</Title>
    <ActionButton onClick={onStart}>Start</ActionButton>

    <Files
      multiple={false}
      accepts={['application/json']}
      minFileSize={1}
      onChange={filesOnChange}
      clickable
    >
      <ImportButton>
        <ImportIcon />
        Import
      </ImportButton>
    </Files>
  </Callout>
)

const calloutTooltip = {
  DEFAULT: () => <CustomTooltipDefault bsPrefix="wg-tooltip">{callout}</CustomTooltipDefault>,
  META_GUIDE: () => <CustomTooltipMeta bsPrefix="wg-tooltip">{callout}</CustomTooltipMeta>,
}

return (
  <DappletOverlayTrigger
    show={true}
    popperConfig="fixed"
    placement="left"
    offset={[0, 45]}
    overlay={calloutTooltip[skin]()}
  >
    {typeof props.children === 'function' ? props.children : <span>{props.children}</span>}
  </DappletOverlayTrigger>
)
