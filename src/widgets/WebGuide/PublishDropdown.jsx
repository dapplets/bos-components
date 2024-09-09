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
  }
`

const ItemGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  right: 0;
  top: 46px;
  width: 125px;
  border-radius: 10px;
  background: #f8f9ff;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #222222;
  box-shadow:
    0px 97px 39px rgba(0, 0, 0, 0.01),
    0px 54px 33px rgba(0, 0, 0, 0.05),
    0px 24px 24px rgba(0, 0, 0, 0.09),
    0px 6px 13px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const DropdownButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 31px;
  border: none;
  background: inherit;
  user-select: none;
  padding: 8px 16px 5px;
  box-sizing: content-box;
  cursor: pointer;

  &:hover {
    background: #e2e2e5;
    color: #384bff;
  }

  &:last-child {
    padding: 5px 16px 8px;
  }
`

const ArrowIcon = ({ primBtnCol }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
    <path
      d="M1 1L7 7L13 1"
      stroke={primBtnCol}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const { disabled, onMainButtonClick, customActions, skin } = props

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

      <RightButton onClick={() => setOpen(!isOpen)}>
        <ArrowIcon primBtnCol={skin === 'META_GUIDE' ? '#4e77e1' : 'white'} />
      </RightButton>
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
