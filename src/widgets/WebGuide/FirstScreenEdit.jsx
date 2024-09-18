const FirstScreenEdit = styled.div`
  --bgMain: #fffffe;
  --colorMain: #02193a;
  --colorP: #777777;
  --border: #02193a;
  --cardBg: rgba(248, 249, 255, 1);

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
  --primBtnBg: #384bff;
  --primBtnBg01: #02193a1a;
  --primBtnBgH: #1c3559;
  --primBtnBgA: #020c19;
  --secBtnCol: #02193a;
  --secBtnBorderCol: #e2e2e5;
  --secBtnBgH: #eee;
  --secBtnBgA: #ddd;
`

const Theme = ({ skin, children }) => {
  switch (skin) {
    case 'FIRST_SCREEN':
      return <FirstScreenEdit children={children} />
    default:
      return <></>
  }
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 360px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 10px;

  background: #fff;
  box-shadow:
    0px 68px 19px rgba(34, 34, 34, 0.01),
    0px 44px 17px rgba(34, 34, 34, 0.01),
    0px 25px 15px rgba(34, 34, 34, 0.03),
    0px 11px 11px rgba(34, 34, 34, 0.04),
    0px 3px 6px rgba(34, 34, 34, 0.05);

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
  flex: 1;
  padding: 0;
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

const Title = styled.h1`
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: #02193a;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26.82px;
  text-align: ${(props) => (props.$didTheGuidePublished ? 'left' : 'center')};
`

const ActionsGroup = styled.div`
  box-sizing: content-box;
  width: 100%;
  border: none;
  border-radius: none;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;
  font-size: 12px;
  color: #fff;
  background: inherit;
  cursor: pointer;

  &:hover&:not(:disabled) {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.3;
  }
`

const ActionButton = styled.div`
  display: flex;
  box-sizing: border-box;
  width: auto;
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
  gap: 20px;

  & > div {
    flex: 1;
  }
`

const EditInputsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 10px;
`

const FloatingLabelContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  display: flex;
  background: #f8f9ff;
  flex-grow: 1;
`

const FloatingLabelContainerArea = styled.div`
  background: #f8f9ff;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
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

  &:disabled {
    background: #fff;
    color: #7a818b;
    border: 1px solid #f8f9ff;
  }

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
  color: #7a818b;
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
  height: 110px;
  position: relative;
  border: none;

  &:disabled {
    background: #fff;
    color: #7a818b;
    border: 1px solid #f8f9ff;
  }

  &::-webkit-resizer {
    display: none;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    height: 25px;
    width: 99%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    top: 0;
    left: 10px;
    font-size: 12px;
  }
`

const ImageBlock = styled.div`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.$fromDocument ? '' : '100%')};

  & > .d-inline-block {
    width: ${(props) => (props.$hasImage ? '100%' : '')};
    display: flex !important;
    justify-content: space-between;
    align-items: center;

    & > div:has(img) {
      width: 42px !important;
      height: 42px !important;
    }

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 42px;
      height: 42px;
      border-radius: 10%;
      border: 1px solid #f8f9ff;
      background: #fff;
      box-sizing: border-box;
      overflow: hidden;
    }

    & > div:last-child {
      height: fit-content;
      color: var(--primBtnBg) !important;
      border-color: var(--primBtnBg) !important;
      font-size: 14px;

      &:hover {
        color: #fff !important;
        background: var(--primBtnBg) !important;
      }

      &:active {
        color: #fff !important;
        background: #3445e2 !important;
      }
    }
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 10%;
  border: 1px solid #f8f9ff;
  background: #fff;
  box-sizing: border-box;
  overflow: hidden;
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

const EditButtonsBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
`

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
    color: #fff !important;
    background: var(--primBtnBg) !important;
  }

  &:active:not(:disabled) {
    color: #fff !important;
    background: #3445e2 !important;
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

const IconNextEdit = () => (
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

const IconPlus = () => (
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

const ImagePlaceholder = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.33333 12C0.966667 12 0.652889 11.8696 0.392 11.6087C0.131111 11.3478 0.000444444 11.0338 0 10.6667V1.33333C0 0.966667 0.130667 0.652889 0.392 0.392C0.653333 0.131111 0.967111 0.000444444 1.33333 0H10.6667C11.0333 0 11.3473 0.130667 11.6087 0.392C11.87 0.653333 12.0004 0.967111 12 1.33333V10.6667C12 11.0333 11.8696 11.3473 11.6087 11.6087C11.3478 11.87 11.0338 12.0004 10.6667 12H1.33333ZM2 9.33333H10L7.5 6L5.5 8.66667L4 6.66667L2 9.33333Z"
      fill="#7A818B"
    />
  </svg>
)

const editActions = [
  { value: 'publish', title: 'Publish' },
  { value: 'export', title: 'Export guide' },
]

const {
  skin,
  onClose,
  onStart,
  onConfigImport,
  setEditMode,
  handleRemoveAllChanges,
  isConfigEdited,
  title,
  description,
  icon,
  hasDocument,
  handleExportConfig,
  handleSave,
  hasChapters,
  openChapters,
  onChapterAdd,
  didTheGuidePublished,
} = props

State.init({ image: icon && icon.ipfs_cid ? { cid: icon.ipfs_cid } : {} }) // ToDo: ipfs_cid -> cid -- to fix in the future
const [newTitle, setNewTitle] = useState(title ?? '')
const [newDescription, setNewDescription] = useState(description ?? '')
const [currentEditAction, setCurrentEditAction] = useState(editActions[0])
const [savingStarted, setSavingStarted] = useState(false)
const [publishStatusMessage, setPublishStatusMessage] = useState(null)
const [isSaveOrExportDropdownOpened, setIsSaveOrExportDropdownOpened] = useState(false)

useEffect(() => {
  setNewTitle(title ?? '')
  setNewDescription(description ?? '')
  setPublishStatusMessage(null)
  State.update({ image: icon && icon.ipfs_cid ? { cid: icon.ipfs_cid } : {} }) // ToDo: ipfs_cid -> cid -- to fix in the future
}, [title, description, icon])

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

const handleMainButtonClick = (editActionValue) => {
  switch (editActionValue) {
    case 'publish':
      setSavingStarted(true)
      const emptyPages = handleSave({
        newTitle,
        newDescription,
        newIcon: state.image?.cid ? { ipfs_cid: state.image.cid } : icon, // ToDo: cid -> ipfs_cid -- to fix in the future
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
        newDescription,
        newIcon: state.image?.cid ? { ipfs_cid: state.image.cid } : icon, // ToDo: cid -> ipfs_cid -- to fix in the future
      })
    default:
      console.error('No such an edit action')
  }
}

const handleButtonItemClick = (item) => {
  setCurrentEditAction(item)
  setIsSaveOrExportDropdownOpened(false)
}

return (
  <Theme skin={skin}>
    <Container>
      <Header>
        <Title $didTheGuidePublished={didTheGuidePublished}>
          {didTheGuidePublished ? (
            "You're editing an existing guide"
          ) : (
            <>
              There's nothing here.
              <br />
              Be the first to create a guide.
            </>
          )}
        </Title>

        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </Header>
      {hasChapters && (
        <ActionsGroup>
          <ActionButton
            onClick={() =>
              openChapters({
                newTitle,
                newDescription,
                newIcon: state.image?.cid ? { ipfs_cid: state.image.cid } : icon, // ToDo: cid -> ipfs_cid -- to fix in the future
              })
            }
          >
            Chapters
            <IconNextEdit />
          </ActionButton>
        </ActionsGroup>
      )}

      <EditInputsBlock>
        <FloatingLabelContainer>
          <StyledInputOwner id={'owner'} type={'text'} value={context.accountId} readOnly />
          <StyledLabel htmlFor={'owner'}>Owner</StyledLabel>
        </FloatingLabelContainer>

        {hasDocument ? (
          <>
            <div style={{ display: 'flex' }}>
              <ImageBlock $fromDocument={hasDocument} $hasImage={!!state.image.cid}>
                <ImageWrapper>
                  {state.image.cid ? (
                    <img
                      src={`https://ipfs.near.social/ipfs/${state.image.cid}`}
                      alt={`${newTitle ?? 'Guide'} image`}
                      style={{ width: '100%' }}
                    />
                  ) : (
                    <ImagePlaceholder />
                  )}
                </ImageWrapper>
              </ImageBlock>

              <FloatingLabelContainer>
                <StyledInput id={'title'} type={'text'} value={newTitle} readOnly disabled />
                <StyledLabel htmlFor={'title'}>Guide title</StyledLabel>
              </FloatingLabelContainer>
            </div>

            <FloatingLabelContainerArea>
              <StyledTextarea
                id={'description'}
                type={'text'}
                value={newDescription}
                readOnly
                disabled
              />
              <StyledLabel htmlFor={'description'}>Description</StyledLabel>
            </FloatingLabelContainerArea>
          </>
        ) : (
          <>
            <ImageBlock $hasImage={!!state.image.cid}>
              {state.image.cid ? null : (
                <ImageWrapper>
                  <ImagePlaceholder />
                </ImageWrapper>
              )}
              <IpfsImageUpload image={state.image} />
            </ImageBlock>

            <FloatingLabelContainer>
              <StyledInput
                id={'title'}
                type={'text'}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <StyledLabel htmlFor={'title'}>Guide title</StyledLabel>
            </FloatingLabelContainer>

            <FloatingLabelContainerArea>
              <StyledTextarea
                id={'description'}
                type={'text'}
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <StyledLabel htmlFor={'description'}>Description</StyledLabel>
            </FloatingLabelContainerArea>
          </>
        )}
      </EditInputsBlock>

      <ButtonsCreateBlock>
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
        <AddedChapterButton
          onClick={() =>
            hasChapters
              ? onChapterAdd({
                  newTitle,
                  newDescription,
                  newIcon: state.image?.cid ? { ipfs_cid: state.image.cid } : icon, // ToDo: cid -> ipfs_cid -- to fix in the future
                })
              : onStart({
                  newTitle,
                  newDescription,
                  newIcon: state.image?.cid ? { ipfs_cid: state.image.cid } : icon, // ToDo: cid -> ipfs_cid -- to fix in the future
                })
          }
        >
          <IconPlus />
          Add chapter
        </AddedChapterButton>
      </ButtonsCreateBlock>

      {hasChapters ? (
        <EditButtonsBlock>
          <SuccessButton
            onClick={() => {
              setEditMode(false)
              handleRemoveAllChanges()
            }}
          >
            {isConfigEdited ||
            newTitle !== (title ?? '') ||
            newDescription !== (description ?? '') ||
            state.image?.cid !== icon?.ipfs_cid // ToDo: cid -> ipfs_cid -- to fix in the future
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
              disabled: !(
                (
                  isConfigEdited ||
                  newTitle !== (title ?? '') ||
                  newDescription !== (description ?? '') ||
                  state.image?.cid !== icon?.ipfs_cid
                ) // ToDo: cid -> ipfs_cid -- to fix in the future
              ),
              onMainButtonClick: handleMainButtonClick,
              customActions: [
                { value: 'publish', title: 'Publish' },
                { value: 'export', title: 'Export guide' },
              ],
              skin,
            }}
          />
        </EditButtonsBlock>
      ) : null}

      {savingStarted && (
        <LoaderBackground>
          <Loader />
        </LoaderBackground>
      )}
    </Container>
  </Theme>
)
