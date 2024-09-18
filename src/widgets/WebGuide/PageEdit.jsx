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

const ActionsGroupEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  align-self: stretch;
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
  text-overflow: ellipsis;

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

const EditButtonsBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  padding: 0 10px;
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
    background: var(--primBtnBg01);
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

const IconPrevEdit = () => (
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

const IconNextEdit = () => (
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

const IconRemove = () => (
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

const IconRevert = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M5.33333 2L2 5.33333L5.33333 8.66667M8 13.3333H10C10.5253 13.3333 11.0454 13.2299 11.5307 13.0289C12.016 12.8278 12.457 12.5332 12.8284 12.1618C13.1999 11.7903 13.4945 11.3494 13.6955 10.8641C13.8965 10.3788 14 9.85862 14 9.33333C14 8.80805 13.8965 8.2879 13.6955 7.8026C13.4945 7.3173 13.1999 6.87634 12.8284 6.50491C12.457 6.13347 12.016 5.83883 11.5307 5.63782C11.0454 5.4368 10.5253 5.33333 10 5.33333H2.66667"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
    />
  </svg>
)

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

const IconEditTarget = () => (
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

const IconPlus = () => (
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

const {
  isConfigEdited,
  isPageEdited,
  contextId,
  contextType,
  navi,
  onClickPageIndicator,
  buttons,
  skin,
  title,
  content,
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
  handleExportConfig,
  handleSave,
  noTarget,
  isEditAllowed,
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

const handleSavePageChanges = () => {
  onPageDataChange({
    newTitle,
    newContent,
  })
}

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

const actionButtonEdit = (btn) => (
  <ActionButtonEdit
    key={btn.label}
    onClick={() => {
      handleSavePageChanges()
      btn.onClick()
    }}
    disabled={btn.disabled}
  >
    {btn.variant === 'secondary' ? <IconPrevEdit /> : null}
    {btn.label}
    {btn.variant === 'primary' ? <IconNextEdit /> : null}
  </ActionButtonEdit>
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

const Header = () => (
  <Widget
    src="${REPL_ACCOUNT}/widget/WebGuide.Header"
    loading={<></>}
    props={{
      navi,
      onClose,
      mutatorId,
      isEditMode,
      setEditMode,
      isEditAllowed,
      onClickPageIndicator: (index) => onClickPageIndicator({ index, newTitle, newContent }),
    }}
  />
)

return (
  <>
    <Header />
    {navButtonsEdit}

    {noTarget ? (
      <div style={{ width: '100%', marginTop: -10 }}>
        <Widget
          src="${REPL_ACCOUNT}/widget/WebGuide.Status"
          loading={<></>}
          props={{
            status: {
              type: 'warning',
              text: 'There is no target for this chapter on the web page',
            },
          }}
        />
      </div>
    ) : null}

    {props.status?.text ? (
      <Widget
        src="${REPL_ACCOUNT}/widget/WebGuide.Status"
        loading={<></>}
        props={{
          status: props.status,
        }}
      />
    ) : null}

    <EditInputsBlock>
      <OptionsBlock>
        <ButtonRemove disabled={buttonRemoveDisabled} onClick={onPageRemove}>
          <IconRemove />
          Remove page
        </ButtonRemove>
        <ButtonRevert
          disabled={!(isPageEdited || newTitle !== title || newContent !== content)}
          onClick={() => {
            setNewTitle(title)
            setNewContent(content)
            onRevertChanges()
          }}
        >
          <IconRevert />
          Delete page changes
        </ButtonRevert>
      </OptionsBlock>

      <TargetBlock>
        <FloatingLabelContainer>
          <StyledInput
            id={'target'}
            type={'text'}
            readonly
            disabled
            value={
              contextType ? (contextId ? `${contextType}/${contextId}` : contextType) : 'No target'
            }
            title={
              contextType ? (contextId ? `${contextType}/${contextId}` : contextType) : 'No target'
            }
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
              <IconEditTarget />
            </EditTargetButton>
          </InputButtons>
        </FloatingLabelContainer>
        {contextType ? (
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
          title={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <StyledLabel htmlFor={'title'}>Page name</StyledLabel>
      </FloatingLabelContainer>

      <FloatingLabelContainerArea>
        <StyledTextarea
          id={'content'}
          type={'text'}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
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
        <IconPlus />
        Add new page
      </AddedPageButton>
      <AddedChapterButton onClick={() => onChapterAdd({ newTitle, newContent })}>
        <IconPlus />
        Add new chapter
      </AddedChapterButton>
    </AddedBlock>

    {publishStatusMessage?.text ? (
      <div style={{ padding: '0 10px', width: '100%' }}>
        <Widget
          src="${REPL_ACCOUNT}/widget/WebGuide.Status"
          loading={<></>}
          props={{ status: publishStatusMessage }}
        />
      </div>
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

    {savingStarted && (
      <LoaderBackground>
        <Loader />
      </LoaderBackground>
    )}
  </>
)
