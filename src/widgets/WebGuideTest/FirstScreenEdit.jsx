State.init({
  json: null,
  isUpload: false,
  amount: 1,
})
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

const EditSpanIcon = styled.div`
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
  margin-bottom: 20px;
`

const iconPickerColor = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M27.18 3.8388C26.8085 3.4673 26.3675 3.1726 25.8822 2.97154C25.3968 2.77048 24.8766 2.66699 24.3513 2.66699C23.826 2.66699 23.3058 2.77048 22.8204 2.97154C22.3351 3.1726 21.8941 3.4673 21.5226 3.8388L18.6933 6.6668L17.7506 5.7228C17.6268 5.59901 17.4797 5.50083 17.3179 5.43387C17.1561 5.36691 16.9826 5.33247 16.8075 5.33253C16.6324 5.3326 16.459 5.36715 16.2972 5.43423C16.1354 5.50131 15.9884 5.59959 15.8646 5.72347C15.7408 5.84735 15.6427 5.9944 15.5757 6.15623C15.5087 6.31805 15.4743 6.49148 15.4744 6.66661C15.4744 6.84174 15.509 7.01514 15.5761 7.17692C15.6431 7.3387 15.7414 7.48568 15.8653 7.60947L23.408 15.1508C23.6604 15.3879 23.9952 15.5174 24.3414 15.512C24.6877 15.5066 25.0182 15.3668 25.2632 15.122C25.5081 14.8772 25.6482 14.5467 25.6539 14.2005C25.6595 13.8543 25.5302 13.5194 25.2933 13.2668L24.3506 12.3241L27.18 9.4948C27.9299 8.74469 28.3511 7.72746 28.3511 6.6668C28.3511 5.60615 27.9299 4.58892 27.18 3.8388Z"
      fill="#384BFF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.9067 9.45459L5.53608 19.8266C4.95086 20.4115 4.56135 21.1634 4.42118 21.9789C4.28102 22.7943 4.39709 23.6332 4.75341 24.3799L2.66675 26.4666L4.55208 28.3533L6.63875 26.2653C7.38536 26.6217 8.22413 26.738 9.03957 26.5981C9.85501 26.4582 10.607 26.0689 11.1921 25.4839L21.5627 15.1133L15.9067 9.45459ZM17.7921 15.1119L15.9067 13.2266L7.42141 21.7119C7.17854 21.9634 7.04415 22.3002 7.04718 22.6498C7.05022 22.9994 7.19045 23.3338 7.43766 23.581C7.68487 23.8282 8.01928 23.9685 8.36888 23.9715C8.71848 23.9745 9.05528 23.8401 9.30675 23.5973L17.7921 15.1119Z"
      fill="#384BFF"
    />
  </svg>
)

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

const Wrapper = styled.div`
  width: 100%;
  word-break: break-word;
  color: #7a818b;
  text-align: center;
  font-size: 12px;
  margin-bottom: 20px;
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

const iconClose = (color) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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

const iconImport = (
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

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;

  svg {
    path {
      stroke: #838891;
      transition-duration: 0.2s;
    }
  }

  :hover {
    svg {
      path {
        stroke: #555555;
      }
    }
  }
`

const ImportButton = styled.button`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0px 20px;
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

const { children, onClose, skin, handleCreateTheFirstChapter, handleAddNewGuide } = props

const [isEditTarget, setEditTarget] = useState(false)

const filesOnChange = (files) => {
  const [file] = files
  console.log(files)
  file
    .text()
    .then((json) => {
      const webGuideConfig = JSON.parse(json)
      console.log(webGuideConfig, 'webGuideConfig')
      handleAddNewGuide(webGuideConfig)
    })
    .catch((err) => {
      console.error(err)
    })
}

const callout = (
  <Callout
    data-mweb-context-type="wg-chapter"
    data-mweb-context-parsed={JSON.stringify({ id: props.id })}
  >
    <Header>
      <TopLine>
        <Close onClick={onClose}>{iconClose('#838891')}</Close>
      </TopLine>
    </Header>

    <EditSpanIcon>{iconPickerColor}</EditSpanIcon>
    <Title $type={props.type}>
      There's nothing here.
      <br /> Be the first to create a guide.
    </Title>

    <Wrapper>
      Select the element that will become the starting <br /> point of the sequence using the Picker
      tool.
    </Wrapper>

    <ActionButton onClick={handleCreateTheFirstChapter}>Create</ActionButton>

    <Files
      multiple={false}
      accepts={['application/json']}
      minFileSize={1}
      onChange={filesOnChange}
      clickable
    >
      <ImportButton>
        {iconImport}
        {state.json.cid ? state.json.cid : 'Import'}
      </ImportButton>
    </Files>

    <div data-mweb-insertion-point="hidden" style={{ display: 'none' }} />
  </Callout>
)

const calloutTooltip = {
  DEFAULT: <CustomTooltipDefault bsPrefix="wg-tooltip">{callout}</CustomTooltipDefault>,
  META_GUIDE: <CustomTooltipMeta bsPrefix="wg-tooltip">{callout}</CustomTooltipMeta>,
}

return (
  <DappletOverlayTrigger
    show={true}
    popperConfig="fixed"
    placement="left"
    offset={[0, 45]}
    overlay={calloutTooltip[skin]}
  >
    {typeof props.children === 'function' ? props.children : <span>{props.children}</span>}
  </DappletOverlayTrigger>
)
