const CustomTooltip = styled('DappletTooltip')`
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

  background: #fff;
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

  width: 100%;
  justify-content: center;
  align-items: flex-start;
`

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  background: inherit;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
`

const AddedChapterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: #4e77e1;
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
const iconPlus = (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path
      d="M8.49967 14.6668C12.1816 14.6668 15.1663 11.6821 15.1663 8.00016C15.1663 4.31826 12.1816 1.3335 8.49967 1.3335C4.81778 1.3335 1.83301 4.31826 1.83301 8.00016C1.83301 11.6821 4.81778 14.6668 8.49967 14.6668Z"
      stroke="#4E77E1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 5.3335V10.6668"
      stroke="#4E77E1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83301 8H11.1663"
      stroke="#4E77E1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

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
  color: #384bff;

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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9417 7.6995C10.8245 7.58012 10.6657 7.51306 10.5 7.51306C10.3344 7.51306 10.1756 7.58012 10.0584 7.6995L8.62504 9.1615V2.2C8.62504 2.03092 8.55919 1.86877 8.44198 1.74922C8.32477 1.62966 8.1658 1.5625 8.00004 1.5625C7.83428 1.5625 7.6753 1.62966 7.55809 1.74922C7.44088 1.86877 7.37504 2.03092 7.37504 2.2V9.1615L5.9417 7.6995C5.82322 7.58689 5.66652 7.52559 5.5046 7.5285C5.34268 7.53141 5.18819 7.59832 5.07368 7.71512C4.95917 7.83192 4.89358 7.9895 4.89072 8.15466C4.88787 8.31981 4.94797 8.47965 5.05837 8.6005L7.55837 11.1505C7.67556 11.2699 7.83441 11.3369 8.00004 11.3369C8.16566 11.3369 8.32451 11.2699 8.4417 11.1505L10.9417 8.6005C11.0587 8.48097 11.1245 8.31894 11.1245 8.15C11.1245 7.98106 11.0587 7.81903 10.9417 7.6995Z"
      fill="#4E77E1"
    />
    <path
      d="M12.7902 9C12.4168 9 12.0902 9.2329 11.826 9.50235L9.326 12.0523C9.15189 12.2299 8.94519 12.3708 8.7177 12.4669C8.49021 12.563 8.24639 12.6125 8.00016 12.6125C7.75393 12.6125 7.51011 12.563 7.28263 12.4669C7.05514 12.3708 6.84844 12.2299 6.67433 12.0523L4.17433 9.50235C3.91016 9.2329 3.5835 9 3.21016 9H1.3335C1.3335 10.8035 2.03588 12.5331 3.28612 13.8083C4.53636 15.0836 6.23205 15.8 8.00016 15.8C9.76827 15.8 11.464 15.0836 12.7142 13.8083C13.9645 12.5331 14.6668 10.8035 14.6668 9H12.7902Z"
      fill="#4E77E1"
    />
  </svg>
)

const iconNextEdit = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2.91699 7H11.0837"
      stroke="#384BFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 2.9165L11.0833 6.99984L7 11.0832"
      stroke="#384BFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ImportButton = styled.button`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  font-size: 12px;
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

const ButtonsCreateBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const EditInputsBlock = styled.div`
  width: 100%;
  padding: 10px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

const FloatingLabelContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  background: #f8f9ff;
`

const FloatingLabelContainerArea = styled.div`
  background: #f8f9ff;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  position: relative;
  flex: 1 1 auto;
  display: flex;
  border-radius: 10px;
`

const StyledInput = styled.input`
  padding: 20px 10px 5px;
  background: inherit;
  color: #02193a;
  line-height: 100%;
  font-size: 14px;
  border-radius: 10px;
  border: none;
  width: 100%;
  outline: none;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.2rem;
    font-size: 12px;
    color: #bbccd0;
    left: 10px;
  }
`

const StyledInputOwner = styled.input`
  padding: 20px 10px 5px;
  background: #fff;
  color: #02193a;
  line-height: 100%;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #f8f9ff;
  width: 100%;
  outline: none;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.2rem;
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
  color: #02193a;
  line-height: 100%;
  font-size: 13px;
  border-radius: 10px;
  width: 100%;
  outline: none;
  min-height: 150px;
  position: relative;
  border: none;

  &::-webkit-resizer {
    display: none;
  }

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

const ImageBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  div:last-child {
    width: 100%;
  }
`

const InputContainer = styled.div`
  display: flex;
`
const CustomFileUpload = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 10%;
  border: 1px solid #f8f9ff;
  background: #fff;
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`

const UploadInput = styled.input`
  display: none;
`

const CancelButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 12px !important;
  width: 135px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid #e2e2e5;
  cursor: pointer;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 149%;
  text-align: center;
  color: #e2e2e5;
  transition-duration: 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: default;
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
      <Title>
        There's nothing here.
        <br /> Be the first to create a guide.
      </Title>

      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
    </Header>
    {btn && (
      <ButtonsCreateBlock>
        <ActionButton
          key={btn.label}
          onClick={() => {
            btn.onClick()
          }}
          disabled={btn.disabled}
        >
          {btn.label.toLowerCase().includes('next') ? iconNextEdit : null}
        </ActionButton>
      </ButtonsCreateBlock>
    )}

    <EditInputsBlock>
      <FloatingLabelContainer>
        <StyledInputOwner
          id={'Owner'}
          type={'text'}
          value={'Owner'}
          onChange={(e) => {
            //  todo: onChange
          }}
        />
        <StyledLabel htmlFor={'Owner'}>Owner</StyledLabel>
      </FloatingLabelContainer>
      <ImageBlock>
        <InputContainer>
          <CustomFileUpload>
            <UploadInput
              value={''}
              onChange={handleImageChange}
              type="file"
              accept=".png, .jpeg, .jpg, .svg"
            />
            {image?.ipfs_cid ? <Image image={image} /> : null}
          </CustomFileUpload>
        </InputContainer>
        <FloatingLabelContainer>
          <StyledInput
            id={'Webguide_Icon'}
            type={'text'}
            value={'Webguide_Icon'}
            onChange={(e) => {
              //  todo: onChange
            }}
          />
          <StyledLabel htmlFor={'Webguide_Icon'}>Webguide Icon</StyledLabel>
        </FloatingLabelContainer>
      </ImageBlock>
      <FloatingLabelContainer>
        <StyledInput
          id={'Guide title'}
          type={'text'}
          value={'Guide title'}
          onChange={(e) => {
            //  todo: onChange
          }}
        />
        <StyledLabel htmlFor={'Guide title'}>Guide title</StyledLabel>
      </FloatingLabelContainer>

      <FloatingLabelContainerArea>
        <StyledTextarea
          id={'Description'}
          value={'Description'}
          onChange={(e) => {
            //  todo: onChange
          }}
        ></StyledTextarea>
        <StyledLabel htmlFor={'contDescriptionent'}>Description</StyledLabel>
      </FloatingLabelContainerArea>
    </EditInputsBlock>
    <ButtonsCreateBlock>
      <AddedChapterButton onClick={onStart}>{iconPlus}Add chapter</AddedChapterButton>
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
    </ButtonsCreateBlock>
    <ButtonsCreateBlock>
      <CancelButton
        onClick={() => {
          // todo: cancel
        }}
      >
        Cancel
      </CancelButton>

      {/* todo: need merge 4707 */}
    </ButtonsCreateBlock>
  </Callout>
)

return (
  <DappletOverlayTrigger
    show={true}
    popperConfig="fixed"
    placement="left"
    offset={[0, 45]}
    overlay={<CustomTooltip bsPrefix="wg-tooltip">{callout}</CustomTooltip>}
  >
    {props.onRefAttach}
  </DappletOverlayTrigger>
)
