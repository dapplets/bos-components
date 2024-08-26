const DropdownWrapper = styled.div`
  position: relative;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 54px;
  border-radius: 10px;
  overflow: hidden;
  background: var(--primBtnCol);
  border: 1px solid var(--primBtnBg);
`

const LeftButton = styled('DappletFileDownloader')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  background: var(--primBtnCol);
  color: var(--primBtnBg);
  width: 72px;
  padding: 10px 8px !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.86px;
  text-align: center;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
  &:hover:not(:disabled) {
    opacity: 0.75;
  }
  &:active:not(:disabled) {
    opacity: 0.5;
  }
`

const StyledLabel = styled.label`
  font-size: 1rem;
  color: #bbccd0;
`

const TextSave = styled.div`
  display: inline-block;
  overflow: hidden;
  word-wrap: no-wrap;
  text-overflow: ellipsis;
  text-align: center;
  text-transform: lowercase;
`

const RightButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px !important;
  border: none;
  background: var(--primBtnCol);
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
  &:hover:not(:disabled) {
    opacity: 0.75;
  }
  &:active:not(:disabled) {
    opacity: 0.5;
  }
  svg {
    width: 10px;
    transform: rotate(180deg);
    path {
      stroke: var(--primBtnBg);
    }
  }
`

const ItemGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  right: 0;
  top: 60px;
  z-index: 2;
  width: 94px;
  padding: 10px 10px;
  gap: 5px;
  border-radius: 10px;
  background: #e7ecef;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #222222;
`

const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
    <path
      d="M1 1L7 7L13 1"
      stroke="#4E77E1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DropdownButtonItem = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
  width: 100%;
  height: 31px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background: var(--primBtnBg);
  padding: 0 3px;

  &:hover {
    background: #e2e2e5;
    color: var(--primBtnCol);
  }
`

const DropdownButtonItemActive = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
  width: 100%;
  height: 31px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background: var(--primBtnCol);
  color: var(--primBtnBg);
  padding: 0 3px;

  &:hover {
    opacity: 0.5;
  }
`

const { disabled, onMainButtonClick, customActions } = props

const [currentEditAction, setCurrentEditAction] = useState(customActions[0])
const [isOpen, setOpen] = useState(false)

const handleButtonItemClick = (item) => {
  setCurrentEditAction(item)
  setOpen(false)
}

return (
  <DropdownWrapper>
    <ButtonGroup>
      <LeftButton
        disabled={disabled && currentEditAction.value === 'publish'}
        onClick={() => onMainButtonClick(currentEditAction.value)}
      >
        <StyledLabel>Align</StyledLabel>
        <TextSave>{currentEditAction.title}</TextSave>
      </LeftButton>

      <RightButton onClick={() => setOpen(!isOpen)}>{arrowIcon}</RightButton>
    </ButtonGroup>

    {isOpen ? (
      <ItemGroup>
        {customActions.map((customAction) =>
          customAction.value === currentEditAction.value ? (
            <DropdownButtonItemActive
              key={customAction.value}
              onClick={() => handleButtonItemClick(customAction)}
            >
              <customAction.icon />
              {customAction.title}
            </DropdownButtonItemActive>
          ) : (
            <DropdownButtonItem
              key={customAction.value}
              onClick={() => handleButtonItemClick(customAction)}
            >
              <customAction.icon />
              {customAction.title}
            </DropdownButtonItem>
          )
        )}
      </ItemGroup>
    ) : null}
  </DropdownWrapper>
)
