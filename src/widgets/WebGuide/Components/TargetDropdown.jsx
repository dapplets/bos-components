const DropdownWrapper = styled.div`
  position: relative;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  background: var(--primBtnCol);
  border: 1px solid #e2e2e5;
`

const LeftButton = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  background: var(--primBtnCol);
  color: var(--primBtnBg);
  width: 72px;
  padding: 25px 10px 10px;
  font-size: 14px;
  font-weight: 400;
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
  position: absolute;
  top: 0.5rem;
  font-size: 12px;
  color: #bbccd0;
`

const TextSave = styled.div`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  text-transform: lowercase;
  max-width: 67px;
  white-space: nowrap;
`

const RightButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  padding: 5px !important;
  border: none;
  background: var(--primBtnCol);
  cursor: pointer;
  @keyframes rotate-is-open {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(90deg);
    }

    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes rotate-is-close {
    0% {
      transform: rotate(180deg);
    }

    50% {
      transform: rotate(90deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
  animation-name: ${(props) => props.$isOpen || 'rotate-is-close'};
  animation-duration: 0.2s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

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
    path {
      stroke: var(--primBtnBg);
    }
  }
`

const ItemGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  right: 0;
  top: 60px;
  z-index: 2;
  width: 150px;
  padding: 10px;
  gap: 5px;
  border-radius: 10px;
  background: var(--bg-grey);
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: var(--dropdownColor);
`

const arrowIcon = (
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
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 140px;
  white-space: nowrap;
  font-size: 12px;
  flex: 1 0 auto;

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
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 140px;
  white-space: nowrap;
  font-size: 12px;
  flex: 1 0 auto;

  &:hover {
    opacity: 0.5;
  }
`

const AutoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <mask id="path-1-inside-1_2231_331" fill="var(--colorMain)">
      <path d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z" />
    </mask>
    <path
      d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z"
      fill="var(--colorMain)"
      fillOpacity="0.15"
    />
    <path
      d="M0.333984 0H18.334H0.333984ZM18.334 18H0.333984H18.334ZM2.33398 18C0.124845 18 -1.66602 16.2091 -1.66602 14V4C-1.66602 1.79086 0.124845 0 2.33398 0C2.33398 0 2.33398 0.895431 2.33398 2V16C2.33398 17.1046 2.33398 18 2.33398 18ZM16.334 0C18.5431 0 20.334 1.79086 20.334 4V14C20.334 16.2091 18.5431 18 16.334 18C16.334 18 16.334 17.1046 16.334 16V2C16.334 0.895431 16.334 0 16.334 0Z"
      fill="var(--colorMain)"
      mask="url(#path-1-inside-1_2231_331)"
    />
    <rect x="7.33398" y="7" width="4" height="4" rx="1" fill="var(--colorMain)" />
  </svg>
)

const LeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <mask id="path-1-inside-1_2231_333" fill="var(--colorMain)">
      <path d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z" />
    </mask>
    <path
      d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z"
      fill="var(--bgMain)"
      fillOpacity="0.15"
    />
    <path
      d="M0.333984 0H18.334H0.333984ZM18.334 18H0.333984H18.334ZM0.333984 18V0V18ZM16.334 0C18.5431 0 20.334 1.79086 20.334 4V14C20.334 16.2091 18.5431 18 16.334 18C16.334 18 16.334 17.1046 16.334 16V2C16.334 0.895431 16.334 0 16.334 0Z"
      fill="var(--bgMain)"
      mask="url(#path-1-inside-1_2231_333)"
    />
    <path
      d="M7.83398 12L10.834 9L7.83398 6"
      stroke="var(--bgMain)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const RightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <mask id="path-1-inside-1_2231_316" fill="var(--colorMain)">
      <path d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z" />
    </mask>
    <path
      d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z"
      fill="var(--bgMain)"
      fillOpacity="0.15"
    />
    <path
      d="M0.333984 0H18.334H0.333984ZM18.334 18H0.333984H18.334ZM2.33398 18C0.124845 18 -1.66602 16.2091 -1.66602 14V4C-1.66602 1.79086 0.124845 0 2.33398 0C2.33398 0 2.33398 0.895431 2.33398 2V16C2.33398 17.1046 2.33398 18 2.33398 18ZM18.334 0V18V0Z"
      fill="var(--bgMain)"
      mask="url(#path-1-inside-1_2231_316)"
    />
    <path
      d="M10.834 12L7.83398 9L10.834 6"
      stroke="var(--bgMain)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const TopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <mask id="path-1-inside-1_2231_329" fill="var(--colorMain)">
      <path d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z" />
    </mask>
    <path
      d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z"
      fill="var(--bgMain)"
      fillOpacity="0.15"
    />
    <path
      d="M0.333984 0H18.334H0.333984ZM18.334 16C18.334 18.2091 16.5431 20 14.334 20H4.33398C2.12485 20 0.333984 18.2091 0.333984 16C0.333984 16 1.22941 16 2.33398 16H16.334C17.4386 16 18.334 16 18.334 16ZM0.333984 18V0V18ZM18.334 0V18V0Z"
      fill="var(--bgMain)"
      mask="url(#path-1-inside-1_2231_329)"
    />
    <path
      d="M6.33398 7.5L9.33398 10.5L12.334 7.5"
      stroke="var(--bgMain)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const BottomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <mask id="path-1-inside-1_2231_327" fill="var(--colorMain)">
      <path d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z" />
    </mask>
    <path
      d="M0.333984 2C0.333984 0.89543 1.22941 0 2.33398 0H16.334C17.4386 0 18.334 0.895431 18.334 2V16C18.334 17.1046 17.4386 18 16.334 18H2.33398C1.22941 18 0.333984 17.1046 0.333984 16V2Z"
      fill="var(--bgMain)"
      fillOpacity="0.15"
    />
    <path
      d="M0.333984 2C0.333984 -0.209139 2.12485 -2 4.33398 -2H14.334C16.5431 -2 18.334 -0.209139 18.334 2C18.334 2 17.4386 2 16.334 2H2.33398C1.22941 2 0.333984 2 0.333984 2ZM18.334 18H0.333984H18.334ZM0.333984 18V0V18ZM18.334 0V18V0Z"
      fill="var(--bgMain)"
      mask="url(#path-1-inside-1_2231_327)"
    />
    <path
      d="M12.334 10.5L9.33398 7.5L6.33398 10.5"
      stroke="var(--bgMain)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const positionsTarget = [
  { placement: 'auto', title: 'Auto', icon: AutoIcon },
  { placement: 'left', title: 'Left', icon: LeftIcon },
  { placement: 'right', title: 'Right', icon: RightIcon },
  { placement: 'top', title: 'Top', icon: TopIcon },
  { placement: 'bottom', title: 'Bottom', icon: BottomIcon },
]

const { onItemClick, oldPosition } = props

const [currentPosition, setCurrentPosition] = useState(
  oldPosition ? positionsTarget.filter((p) => p.placement === oldPosition)[0] : positionsTarget[0]
)

const [isOpen, setOpen] = useState(false)

const handleButtonItemClick = (item) => {
  setCurrentPosition(item)
  setOpen(false)
}

return (
  <DropdownWrapper>
    <ButtonGroup>
      <LeftButton onClick={() => setOpen(!isOpen)}>
        <StyledLabel>Align</StyledLabel>
        <TextSave>{currentPosition.title}</TextSave>
      </LeftButton>

      <RightButton $isOpen={isOpen && 'rotate-is-open'} onClick={() => setOpen(!isOpen)}>{arrowIcon}</RightButton>
    </ButtonGroup>

    {isOpen ? (
      <ItemGroup>
        {positionsTarget.map((position) =>
          position.placement === currentPosition.placement ? (
            <DropdownButtonItemActive
              key={customAction.placement}
              onClick={() => handleButtonItemClick(position)}
            >
              {position.icon && <position.icon />}
              {position.title}
            </DropdownButtonItemActive>
          ) : (
            <DropdownButtonItem
              key={position.placement}
              onClick={() => onItemClick(position.placement)}
            >
              {position.icon && <position.icon />}
              {position.title}
            </DropdownButtonItem>
          )
        )}
      </ItemGroup>
    ) : null}
  </DropdownWrapper>
)
