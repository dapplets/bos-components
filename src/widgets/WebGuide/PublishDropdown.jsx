const DropdownWrapper = styled.div`
  position: relative;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
`

const LeftButton = styled('DappletFileDownloader')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: var(--primBtnBg);
  color: var(--primBtnCol);
  width: 104px;
  padding: 10px 12px !important;
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

const TextSave = styled.div`
  display: inline-block;
  overflow: hidden;
  word-wrap: no-wrap;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`

const RightButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px !important;
  border: none;
  border-left: 1px solid rgba(226, 226, 229, 0.6);
  background: var(--primBtnBg);
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
  }
`

const ItemGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  right: 0;
  top: -100px;
  width: 125px;
  padding: 10px 16px;
  gap: 5px;
  border-radius: 10px;
  background: var(--primBtnBg);
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 31px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background: inherit;
  &:hover {
    background: #e2e2e5;
    color: var(--primBtnCol);
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
        <TextSave>{currentEditAction.title}</TextSave>
      </LeftButton>

      <RightButton onClick={() => setOpen(!isOpen)}>{arrowIcon}</RightButton>
    </ButtonGroup>

    {isOpen ? (
      <ItemGroup>
        {customActions.map((customAction) => (
          <DropdownButtonItem
            key={customAction.value}
            onClick={() => handleButtonItemClick(customAction)}
          >
            {customAction.title}
          </DropdownButtonItem>
        ))}
      </ItemGroup>
    ) : null}
  </DropdownWrapper>
)
