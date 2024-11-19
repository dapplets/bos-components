const DropdownWrapper = styled.div`
  position: relative;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
`

const LeftButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: var(--primBtnBg);
  color: var(--primBtnCol);
  min-width: 104px;
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
  color: var(--dropdownColor);
  box-shadow:
    0px 97px 39px rgba(0, 0, 0, 0.01),
    0px 54px 33px rgba(0, 0, 0, 0.05),
    0px 24px 24px rgba(0, 0, 0, 0.09),
    0px 6px 13px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const DropdownButtonItem = styled('DappletFileDownloader')`
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

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
    <path
      d="M1 1L7 7L13 1"
      stroke="var(--bgMain)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const { disabled, onMainButtonClick, customActions } = props
const [isOpen, setOpen] = useState(false)

return (
  <DropdownWrapper>
    <ButtonGroup>
      <LeftButton disabled={disabled} onClick={() => onMainButtonClick(customActions[0].value)}>
        <TextSave>{customActions[0].title}</TextSave>
      </LeftButton>

      <RightButton onClick={() => setOpen(!isOpen)}>
        <ArrowIcon />
      </RightButton>
    </ButtonGroup>

    {isOpen ? (
      <ItemGroup>
        {customActions.slice(1).map((customAction) => (
          <DropdownButtonItem
            key={customAction.value}
            onClick={() => onMainButtonClick(customAction.value)}
          >
            {customAction.title}
          </DropdownButtonItem>
        ))}
      </ItemGroup>
    ) : null}
  </DropdownWrapper>
)
