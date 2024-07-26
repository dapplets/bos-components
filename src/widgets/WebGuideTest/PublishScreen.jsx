const Background = styled.div`
  box-sizing: content-box;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffffc4;
  z-index: 1000;
  backdrop-filter: blur(4px);
`

const Popup = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 20px;
  padding-bottom: 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow:
    0px 5px 11px 0px #02193a1a,
    0px 19px 19px 0px #02193a17,
    0px 43px 26px 0px #02193a0d,
    0px 77px 31px 0px #02193a03,
    0px 120px 34px 0px #02193a00;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
`

const iconExport = (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.69497 5.09398C5.81997 5.21336 5.98941 5.28042 6.16608 5.28042C6.34275 5.28042 6.51219 5.21336 6.63719 5.09398L8.16608 3.63198V10.5935C8.16608 10.7626 8.23632 10.9247 8.36134 11.0443C8.48637 11.1638 8.65594 11.231 8.83275 11.231C9.00956 11.231 9.17913 11.1638 9.30415 11.0443C9.42918 10.9247 9.49941 10.7626 9.49941 10.5935V3.63198L11.0283 5.09398C11.0893 5.15662 11.1629 5.20685 11.2447 5.2417C11.3265 5.27654 11.4148 5.29527 11.5043 5.29678C11.5938 5.2983 11.6827 5.28255 11.7657 5.25049C11.8487 5.21842 11.9241 5.1707 11.9874 5.11016C12.0508 5.04963 12.1007 4.97752 12.1342 4.89814C12.1677 4.81876 12.1842 4.73374 12.1826 4.64814C12.181 4.56254 12.1614 4.47812 12.125 4.39992C12.0886 4.32173 12.036 4.25134 11.9705 4.19298L9.30386 1.64298C9.17886 1.5236 9.00941 1.45654 8.83275 1.45654C8.65608 1.45654 8.48664 1.5236 8.36164 1.64298L5.69497 4.19298C5.57012 4.31251 5.5 4.47454 5.5 4.64348C5.5 4.81242 5.57012 4.97445 5.69497 5.09398Z"
      fill="#4E77E1"
    />
    <path
      d="M8.83377 15.6936C10.7198 15.6936 12.5285 14.9771 13.8621 13.7019C15.1957 12.4266 15.9449 10.697 15.9449 8.89355H12.6115C11.7733 8.89355 11.3547 8.89355 11.0942 9.1426C10.8338 9.39165 10.8338 9.792 10.8338 10.5936C10.8338 11.1008 10.6231 11.5872 10.248 11.9459C9.87291 12.3046 9.3642 12.5061 8.83377 12.5061C8.30333 12.5061 7.79463 12.3046 7.41955 11.9459C7.04448 11.5872 6.83377 11.1008 6.83377 10.5936C6.83377 9.792 6.83377 9.39165 6.57332 9.1426C6.31288 8.89355 5.89421 8.89355 5.05599 8.89355H1.72266C1.72266 10.697 2.47186 12.4266 3.80545 13.7019C5.13904 14.9771 6.94778 15.6936 8.83377 15.6936Z"
      fill="#4E77E1"
    />
  </svg>
)

const CancelButton = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 135px;
  height: 42px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #02193a;
  background: #fff;
  color: #02193a;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;

  &:hover {
    opacity: 0.5;
  }
`

const SaveButton = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 135px;
  height: 42px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;

  background: #3cb391;
  color: #fff;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;
  padding: 0;

  &:hover {
    opacity: 0.5;
  }
`

const ExportButton = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  background: #fff;
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

const FloatingLabelContainer = styled.div`
  background: #fff;

  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  position: relative;
  flex: 0 1 auto;
  display: flex;
`

const FloatingLabelContainerArea = styled.div`
  background: #fff;

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
  background: #f8f9ff;
  color: #02193a;
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

const StyledInputOwner = styled.input`
  padding: 25px 10px 10px 10px;
  background: #fff;
  color: #99989a;
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
  background: #f8f9ff;
  color: #02193a;
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

const StyledButtonsBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const { onSave, onCancel, oldTitle, oldDescription } = props

const [title, onTitleChange] = useState(oldTitle ?? '')
const [description, onDescriptionChange] = useState(oldDescription ?? '')

return (
  <Background>
    <Popup>
      <Title $type={props.type}>
        You're going to push
        <br /> changes into the blockchain
      </Title>

      <Wrapper>
        <FloatingLabelContainer>
          <StyledInputOwner
            id={'owner'}
            readonly
            disabled
            type={'text'}
            value={context.accountId}
          />
          <StyledLabel htmlFor={'owner'}>Owner</StyledLabel>
        </FloatingLabelContainer>

        <FloatingLabelContainer>
          <StyledInput
            id={'title'}
            type={'text'}
            value={title}
            onChange={(e) => {
              onTitleChange(e.target.value)
            }}
          />
          <StyledLabel htmlFor={'title'}>Guide title</StyledLabel>
        </FloatingLabelContainer>

        <FloatingLabelContainerArea>
          <StyledTextarea
            id={'description'}
            type={'text'}
            value={description}
            onChange={(e) => {
              onDescriptionChange(e.target.value)
            }}
          ></StyledTextarea>
          <StyledLabel htmlFor={'description'}>Description</StyledLabel>
        </FloatingLabelContainerArea>
      </Wrapper>
      <StyledButtonsBottom>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
        <SaveButton onClick={onSave}>Save & Publish</SaveButton>
      </StyledButtonsBottom>
      <ExportButton>{iconExport}Export</ExportButton>
    </Popup>
  </Background>
)
