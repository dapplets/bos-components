// ToDo: Styled components cause unnecessary re-rendering in BOS
const TimelineLatch = styled.button`
  background-color: ${(props) => (props.$variant === 'current' ? '#384bff' : '#384BFF4D')};
  height: 20px;
  width: ${(props) => `${props.$width + 6}px`};
  border-radius: 6px;
  border: none;
  color: #fff;
  text-align: center;
  position: relative;
  top: -20px;
  left: -6px;
  cursor: pointer;
`

// ToDo: Styled components cause unnecessary re-rendering in BOS
const NotchLatch = styled.button`
  display: flex;
  position: fixed;
  top: ${(props) => `${props.$top}px`};
  margin-top: ${(props) => `${props.$height / 2 - 14}px`};
  margin-left: ${(props) => `${props.$position === 'right' ? props.$width : '-35'}px`};
  width: ${(props) => `${props.$position === 'right' ? '28' : '32'}px`};
  height: 29px;
  padding: 0;
  padding-right: ${(props) => `${props.$position === 'right' ? '0' : '4px'}`};
  background: none;
  border: none;
  opacity: ${(props) => (props.$variant === 'current' ? '1' : '.5')};
  cursor: pointer;
`

const TimelineLatchIcon = ({ color }) => (
  <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 18.6H0.39L7.27 8.42C7.36 8.24 7.31 8.15 7.12 8.15H4.28L7.27 2.7C7.36 2.52 7.29 2.43 7.07 2.43H3.26C3.15 2.43 3.06 2.49 2.97 2.61L0.19 10.01C0.17 10.19 0.23 10.28 0.38 10.28H3.13L0 18.6ZM8.5 12.27H8.77L13.99 4.6C14.04 4.52 14.05 4.45 14.03 4.4C14.01 4.35 13.95 4.33 13.86 4.33H11.76L13.94 0.3C14.06 0.1 14 0 13.76 0H11.02C10.89 0 10.79 0.0600001 10.72 0.19L8.64 5.67C8.61 5.76 8.61 5.83 8.65 5.88C8.69 5.93 8.75 5.95 8.84 5.95H10.88L8.5 12.27Z"
      fill={color}
    />
  </svg>
)

const NotchLatchIcon = () => (
  <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.168 9.8335V2.8335"
      stroke="#14AE5C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.1865 11.9384C24.5763 13.4873 24.6075 15.1047 24.2778 16.6676C23.9482 18.2304 23.2663 19.6974 22.2842 20.9569C21.3021 22.2165 20.0456 23.2354 18.6103 23.9361C17.175 24.6367 15.5987 25.0008 14.0015 25.0004H8.75155C7.12055 25.0004 6.30504 25.0004 5.66221 24.7344C5.23744 24.5585 4.85148 24.3007 4.52639 23.9756C4.2013 23.6505 3.94344 23.2645 3.76755 22.8397C3.50155 22.1969 3.50155 21.3814 3.50155 19.7504V14.5004C3.50119 12.9032 3.86521 11.327 4.5659 9.89169C5.26659 8.45639 6.28549 7.19986 7.54504 6.21774C8.80459 5.23561 10.2716 4.55378 11.8344 4.22412C13.3972 3.89447 15.0146 3.92569 16.5635 4.31541C16.168 4.728 15.9025 5.2477 15.7998 5.80994C15.6972 6.37219 15.762 6.9522 15.9862 7.47792C16.2104 8.00365 16.5841 8.45191 17.061 8.76703C17.5378 9.08215 18.0967 9.25024 18.6682 9.25041H19.2515V9.83374C19.2517 10.4053 19.4198 10.9642 19.7349 11.441C20.05 11.9178 20.4983 12.2915 21.024 12.5157C21.5498 12.74 22.1298 12.8048 22.692 12.7021C23.2543 12.5995 23.774 12.3339 24.1865 11.9384ZM17.5015 12.1671C17.811 12.1671 18.1077 12.29 18.3265 12.5088C18.5453 12.7276 18.6682 13.0243 18.6682 13.3337C18.6682 13.6432 18.5453 13.9399 18.3265 14.1587C18.1077 14.3775 17.811 14.5004 17.5015 14.5004H10.5015C10.1921 14.5004 9.89538 14.3775 9.67659 14.1587C9.4578 13.9399 9.33488 13.6432 9.33488 13.3337C9.33488 13.0243 9.4578 12.7276 9.67659 12.5088C9.89538 12.29 10.1921 12.1671 10.5015 12.1671H17.5015ZM14.0015 16.8337C14.311 16.8337 14.6077 16.9567 14.8265 17.1754C15.0453 17.3942 15.1682 17.691 15.1682 18.0004C15.1682 18.3098 15.0453 18.6066 14.8265 18.8254C14.6077 19.0442 14.311 19.1671 14.0015 19.1671H10.5015C10.1921 19.1671 9.89538 19.0442 9.67659 18.8254C9.4578 18.6066 9.33488 18.3098 9.33488 18.0004C9.33488 17.691 9.4578 17.3942 9.67659 17.1754C9.89538 16.9567 10.1921 16.8337 10.5015 16.8337H14.0015Z"
      fill="#14AE5C"
    />
    <path
      d="M25.668 6.3335H18.668"
      stroke="#14AE5C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const LatchTypes = {
  Timeline: 'timeline',
  Notch: 'notch',
}

const LatchPositions = {
  Auto: 'auto',
  Left: 'left',
  Right: 'right'
}

const { handleTargetSet } = props

const getLatchType = (context) => {
  if (context.type === 'timeline') return LatchTypes.Timeline
  if (
    (context.type === 'notch' && context.id !== 'mutate-button') ||
    context.type === 'mweb-gateway' || context.type === 'mweb-overlay' || context.type === 'mweb-overlay-action') return LatchTypes.Notch
  return null
}

const getLatchPosition = (context) => {
  if (context.type === 'mweb-overlay' || context.type === 'mweb-overlay-action') return LatchPositions.Left
  if (
    (context.type === 'notch' && context.id !== 'mutate-button') ||
    context.type === 'mweb-gateway'
  ) return LatchPositions.Right
  return LatchPositions.Auto
}

const ContextTypeLatch = ({ context, variant, contextDimensions }) => {
  const latchType = getLatchType(context)
  const latchPosition = getLatchPosition(context)
  switch (latchType) {
    case LatchTypes.Timeline:
      return (
        <TimelineLatch
          $variant={variant}
          $width={contextDimensions.width}
          onClick={() => handleTargetSet(context)}
        >
          <TimelineLatchIcon color="white" />
        </TimelineLatch>
      )
    case LatchTypes.Notch:
      return (
        <NotchLatch
          $variant={variant}
          $width={contextDimensions.width}
          $height={contextDimensions.height}
          $top={contextDimensions.top}
          onClick={() => handleTargetSet(context)}
          $position={latchPosition}
        >
          <NotchLatchIcon />  
        </NotchLatch>
      )
    default:
      return null
  }
}

return <DappletContextPicker onClick={handleTargetSet} LatchComponent={ContextTypeLatch} />