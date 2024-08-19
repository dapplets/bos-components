const cardsTest = [
  {
    cid: 'icon1.png',
    cardName:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia imperdiet tristique sociosqu amet ligula faucibus. Morbi penatibus montes ad interdum metus venenatis. Eros adipiscing cras sodales id sem. Sit purus eget imperdiet nunc elit feugiat. Duis fusce mi eros sodales neque ad.',
    cardAuthor: 'Author 1',
    isLocal: true,
    isSave: true,
    function: () => {},
  },
  {
    cid: 'icon2.png',
    cardName: 'Card Name 2',
    cardAuthor: 'Author 2',
    function: () => {},
  },
  {
    cid: 'icon3.png',
    cardName: 'Card Name 3',
    cardAuthor: 'Author 3',
    isSave: true,
    function: () => {},
  },
  {
    cid: 'icon4.png',
    cardName: 'Card Name 4',
    cardAuthor: 'Author 4',
    isLocal: true,
    function: () => {},
  },
  {
    cid: 'icon5.png',
    cardName: 'Card Name 5',
    cardAuthor: 'Author 5',
    isSave: true,
    function: () => {},
  },
  {
    cid: 'icon6.png',
    cardName: 'Card Name 6',
    cardAuthor: 'Author 6',
    function: () => {},
  },
  {
    cid: 'icon7.png',
    cardName: 'Card Name 7',
    cardAuthor: 'Author 7',
    function: () => {},
  },
  {
    cid: 'icon8.png',
    cardName: 'Card Name 8',
    cardAuthor: 'Author 8',
    isSave: true,
    function: () => {},
  },
  {
    cid: 'icon9.png',
    cardName: 'Card Name 9',
    cardAuthor: 'Author 9',
    isLocal: true,
    isSave: true,
    function: () => {},
  },
  {
    cid: 'icon10.png',
    cardName: 'Card Name 10',
    cardAuthor: 'Author 10',
    function: () => {},
  },
  {
    cid: 'icon11.png',
    cardName: 'Card Name 11',
    cardAuthor: 'Author 11',
    function: () => {},
  },
  {
    cid: 'icon12.png',
    cardName: 'Card Name 12',
    cardAuthor: 'Author 12',
    function: () => {},
  },
  {
    cid: 'icon13.png',
    cardName: 'Card Name 13',
    cardAuthor: 'Author 13',
    function: () => {},
  },
  {
    cid: 'icon14.png',
    cardName: 'Card Name 14',
    cardAuthor: 'Author 14',
    isLocal: true,
    function: () => {},
  },
  {
    cid: 'icon15.png',
    cardName: 'Card Name 15',
    cardAuthor: 'Author 15',
    isSave: true,
    function: () => {},
  },
  {
    cid: 'icon16.png',
    cardName: 'Card Name 16',
    cardAuthor: 'Author 16',
    isFavorite: true,
    function: () => {},
  },
  {
    cid: 'icon17.png',
    cardName: 'Card Name 17',
    cardAuthor:
      'Eros adipiscing cras sodales id sem. Sit purus eget imperdiet nunc elit feugiat. Duis fusce mi eros sodales neque ad',
    isLocal: true,
    isFavorite: true,
    function: () => {},
  },
  {
    cid: 'icon18.png',
    cardName: 'Card Name 18',
    cardAuthor: 'Author 18',
    isLocal: true,
    isFavorite: true,
    function: () => {},
  },
  {
    cid: 'icon19.png',
    cardName: 'Card Name 19',
    cardAuthor: 'Author 19',
    isFavorite: true,
    function: () => {},
  },
  {
    cid: 'icon20.png',
    cardName: 'Card Name 20',
    cardAuthor: 'Author 20',
    isFavorite: true,
    function: () => {},
  },
]

const CustomTooltip = styled('DappletTooltip')`
  z-index: 99999999; // over the notch

  &[data-popper-reference-hidden='true'] {
    visibility: hidden;
    pointer-events: none;
  }
`

const List = styled.div`
  display: flex;
  width: 320px;
  padding: 12px 14px 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;

  background: #f8f9ff;
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
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const TopLine = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 24px;
  margin: 0;
  padding: 0;
`

const CloseButton = styled.button`
  margin-left: auto;
  display: flex;
  background: inherit;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
`

const Title = styled.div`
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: #02193a;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26.82px;
  text-align: center;
`

const TopPublish = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 26px;
  margin-bottom: 10px;
  padding: 4px 6px;
  border-radius: 10px;
  background: rgba(56, 75, 255, 0.1);
`

const PublishText = styled.span`
  font-size: 12px;
  color: #384bff;
`

const PublishButton = styled.button`
  display: flex;
  background: #384bff;
  outline: none;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  color: #fff;
  padding: 0;
  width: 62px;
  height: 18px;
  font-size: 10px;

  svg {
    width: 12px;
    height: 12px;
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.5;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 470px;
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background: inherit;
  border: 1px solid #e2e2e5;
`
const ContentTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const ContentSubtitle = styled.span`
  color: #7a818b;
  text-transform: uppercase;
  font-size: 8px;
  font-weight: 700;
`

const RevertButton = styled.button`
  display: flex;
  align-items: center;
  background: inherit;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 10px;
  color: #7a818b;

  svg {
    margin-right: 5px;
  }

  &:hover {
    color: rgba(56, 75, 255, 0.5);
  }
`
const FavoritesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  margin-bottom: 10px;
`

const Card = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 4px 6px;
  border-radius: 10px;
  gap: 6px;
  background: #fff;
`
const IconCard = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #f8f9ff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`
const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`
const CardTop = styled.div`
  display: flex;
  align-items: center;
`
const CardName = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-size: 12px;
  color: #02193a;
  max-width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const CardBottom = styled.div`
  display: flex;
  align-items: center;
`
const CardLabel = styled.span`
  background: #fac20a;
  padding: 2px;
  border-radius: 4px;
  text-transform: uppercase;
  display: inline-block;
  font-size: 8px;
  color: #fff;
  margin-right: 5px;
`

const CardAuthor = styled.span`
  display: inline-block;
  font-size: 10px;
  color: #384bff;
  text-decoration: underline;
  max-width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const CardAuthorDefault = styled.span`
  display: inline-block;
  font-size: 10px;
  color: #7a818b;
  max-width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const ButtonCard = styled.button`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(56, 75, 255, 0.1);
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

const AvalibleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const ButtonImport = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: inherit;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 12px;
  color: #384bff;
  width: 50%;

  svg {
    margin-right: 5px;
  }

  &:hover {
    color: rgba(56, 75, 255, 0.5);
  }
`

const ButtonCreate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: inherit;
  width: 50%;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 12px;
  color: #384bff;

  svg {
    margin-right: 5px;
  }

  &:hover {
    color: rgba(56, 75, 255, 0.5);
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

const IconPublish = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
    <path
      d="M9 8L7 6L5 8"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 6V10.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.195 9.19475C11.6826 8.92888 12.0679 8.50819 12.2899 7.99906C12.5119 7.48993 12.5581 6.92136 12.4211 6.38309C12.2841 5.84482 11.9717 5.3675 11.5333 5.02647C11.0949 4.68544 10.5554 4.50011 9.99998 4.49975H9.36998C9.21864 3.91437 8.93656 3.37092 8.54495 2.91024C8.15335 2.44957 7.6624 2.08367 7.10903 1.84005C6.55566 1.59643 5.95426 1.48143 5.35004 1.50369C4.74582 1.52595 4.15451 1.6849 3.62057 1.96858C3.08662 2.25226 2.62394 2.6533 2.26729 3.14154C1.91065 3.62978 1.66933 4.19252 1.56147 4.78745C1.45361 5.38237 1.48203 5.99401 1.64459 6.57638C1.80714 7.15874 2.0996 7.69668 2.49998 8.14975"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 8L7 6L5 8"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconRevert = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M4 1.5L1.5 4L4 6.5M6 10H7.5C7.89397 10 8.28407 9.9224 8.64805 9.77164C9.01203 9.62087 9.34274 9.3999 9.62132 9.12132C9.8999 8.84274 10.1209 8.51203 10.2716 8.14805C10.4224 7.78407 10.5 7.39397 10.5 7C10.5 6.60603 10.4224 6.21593 10.2716 5.85195C10.1209 5.48797 9.8999 5.15726 9.62132 4.87868C9.34274 4.6001 9.01203 4.37913 8.64805 4.22836C8.28407 4.0776 7.89397 4 7.5 4H2"
      stroke="#7A818B"
      strokeWidth="1.5"
    />
  </svg>
)

const IconStarDefault = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
    <path
      d="M5.03834 0.911944C5.20914 0.501298 5.79086 0.501298 5.96166 0.911944L6.52305 2.26168C6.73906 2.78103 7.22747 3.13589 7.78816 3.18084L9.24531 3.29766C9.68864 3.3332 9.8684 3.88645 9.53063 4.17579L8.42044 5.12679C7.99325 5.49272 7.80669 6.06688 7.93721 6.61402L8.27639 8.03595C8.37958 8.46856 7.90896 8.81049 7.52941 8.57866L6.28188 7.81668C5.80186 7.52348 5.19814 7.52348 4.71812 7.81668L3.47059 8.57866C3.09104 8.81049 2.62042 8.46856 2.72361 8.03595L3.06279 6.61402C3.1933 6.06688 3.00675 5.49272 2.57956 5.12679L1.46937 4.17579C1.1316 3.88645 1.31136 3.3332 1.75469 3.29766L3.21184 3.18084C3.77253 3.13589 4.26094 2.78103 4.47695 2.26168L5.03834 0.911944Z"
      stroke="#7A818B"
    />
  </svg>
)

const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
    <path
      d="M4.57668 0.719929C4.91827 -0.101364 6.08173 -0.101364 6.42332 0.719929L6.98471 2.06966C7.12871 2.4159 7.45432 2.65247 7.82811 2.68244L9.28527 2.79925C10.1719 2.87034 10.5314 3.97685 9.85591 4.55551L8.74571 5.50652C8.46093 5.75047 8.33655 6.13325 8.42356 6.498L8.76274 7.91994C8.96913 8.78516 8.02788 9.46902 7.26878 9.00536L6.02125 8.24338C5.70124 8.04792 5.29876 8.04792 4.97875 8.24338L3.73122 9.00536C2.97212 9.46902 2.03087 8.78516 2.23726 7.91994L2.57644 6.498C2.66345 6.13325 2.53907 5.75047 2.25429 5.50652L1.14409 4.55551C0.468551 3.97685 0.828077 2.87034 1.71473 2.79925L3.17189 2.68244C3.54568 2.65247 3.87129 2.4159 4.01529 2.06966L4.57668 0.719929Z"
      fill="#FAC20A"
    />
  </svg>
)

const IconTrash = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2.66675 4.66667H13.3334M6.66675 7.33333V11.3333M9.33341 7.33333V11.3333M3.33341 4.66667L4.00008 12.6667C4.00008 13.0203 4.14056 13.3594 4.39061 13.6095C4.64065 13.8595 4.97979 14 5.33341 14H10.6667C11.0204 14 11.3595 13.8595 11.6096 13.6095C11.8596 13.3594 12.0001 13.0203 12.0001 12.6667L12.6667 4.66667M6.00008 4.66667V2.66667C6.00008 2.48986 6.07032 2.32029 6.19534 2.19526C6.32037 2.07024 6.48994 2 6.66675 2H9.33341C9.51023 2 9.6798 2.07024 9.80482 2.19526C9.92984 2.32029 10.0001 2.48986 10.0001 2.66667V4.66667"
      stroke="#7A818B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconBranch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
    <path
      d="M9.33325 3.66667C9.68687 3.66667 10.026 3.52619 10.2761 3.27614C10.5261 3.02609 10.6666 2.68696 10.6666 2.33333C10.6666 1.97971 10.5261 1.64057 10.2761 1.39052C10.026 1.14048 9.68687 1 9.33325 1C8.97963 1 8.64049 1.14048 8.39044 1.39052C8.14039 1.64057 7.99992 1.97971 7.99992 2.33333C7.99992 2.68696 8.14039 3.02609 8.39044 3.27614C8.64049 3.52619 8.97963 3.66667 9.33325 3.66667ZM9.33325 3.66667V4.33333C9.33325 6 7.99992 6.33333 7.99992 6.33333L3.99992 7.66667C3.99992 7.66667 2.66659 8 2.66659 9.66667V10.3333M2.66659 3.66667C3.02021 3.66667 3.35935 3.52619 3.60939 3.27614C3.85944 3.02609 3.99992 2.68696 3.99992 2.33333C3.99992 1.97971 3.85944 1.64057 3.60939 1.39052C3.35935 1.14048 3.02021 1 2.66659 1C2.31296 1 1.97382 1.14048 1.72378 1.39052C1.47373 1.64057 1.33325 1.97971 1.33325 2.33333C1.33325 2.68696 1.47373 3.02609 1.72378 3.27614C1.97382 3.52619 2.31296 3.66667 2.66659 3.66667ZM2.66659 3.66667V10.3333M2.66659 10.3333C3.02021 10.3333 3.35935 10.4738 3.60939 10.7239C3.85944 10.9739 3.99992 11.313 3.99992 11.6667C3.99992 12.0203 3.85944 12.3594 3.60939 12.6095C3.35935 12.8595 3.02021 13 2.66659 13C2.31296 13 1.97382 12.8595 1.72378 12.6095C1.47373 12.3594 1.33325 12.0203 1.33325 11.6667C1.33325 11.313 1.47373 10.9739 1.72378 10.7239C1.97382 10.4738 2.31296 10.3333 2.66659 10.3333Z"
      stroke="#7A818B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconImport = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2194 6.776C10.111 6.66364 9.96419 6.60053 9.81108 6.60053C9.65796 6.60053 9.51111 6.66364 9.40278 6.776L8.07774 8.152V1.6C8.07774 1.44087 8.01687 1.28826 7.90852 1.17574C7.80016 1.06321 7.6532 1 7.49997 1C7.34673 1 7.19977 1.06321 7.09141 1.17574C6.98306 1.28826 6.92219 1.44087 6.92219 1.6V8.152L5.59715 6.776C5.48762 6.67002 5.34276 6.61232 5.19307 6.61506C5.04339 6.6178 4.90058 6.68077 4.79472 6.7907C4.68886 6.90063 4.62822 7.04894 4.62558 7.20438C4.62294 7.35982 4.6785 7.51026 4.78056 7.624L7.09167 10.024C7.2 10.1364 7.34685 10.1995 7.49997 10.1995C7.65308 10.1995 7.79993 10.1364 7.90826 10.024L10.2194 7.624C10.3276 7.5115 10.3883 7.359 10.3883 7.2C10.3883 7.041 10.3276 6.8885 10.2194 6.776Z"
      fill="#384BFF"
    />
    <path
      d="M11.928 8C11.5828 8 11.2809 8.2192 11.0366 8.4728L8.72554 10.8728C8.56458 11.0399 8.3735 11.1725 8.1632 11.263C7.9529 11.3535 7.7275 11.4 7.49988 11.4C7.27225 11.4 7.04685 11.3535 6.83655 11.263C6.62626 11.1725 6.43517 11.0399 6.27422 10.8728L3.96311 8.4728C3.7189 8.2192 3.41691 8 3.07179 8H1.33691C1.33691 9.69739 1.98622 11.3253 3.142 12.5255C4.29778 13.7257 5.86536 14.4 7.49988 14.4C9.1344 14.4 10.702 13.7257 11.8577 12.5255C13.0135 11.3253 13.6628 9.69739 13.6628 8H11.928Z"
      fill="#384BFF"
    />
  </svg>
)

const IconCreate = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_1980_2073)">
      <path
        d="M8.00016 14.6663C11.6821 14.6663 14.6668 11.6816 14.6668 7.99967C14.6668 4.31778 11.6821 1.33301 8.00016 1.33301C4.31826 1.33301 1.3335 4.31778 1.3335 7.99967C1.3335 11.6816 4.31826 14.6663 8.00016 14.6663Z"
        stroke="#384BFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.33301V10.6663"
        stroke="#384BFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33325 8H10.6666"
        stroke="#384BFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1980_2073">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const { onClose, onPublish, onRevert, onImport, onCreate } = props

const card = (item, favorites) => (
  <Card key={item.name}>
    <IconCard>
      <Widget
        loading={<></>}
        src="${REPL_NEAR_SOCIAL_OWNER}/widget/Image"
        props={{
          image: item.cid,
          fallbackUrl:
            'https://ipfs.near.social/ipfs/bafkreifc4burlk35hxom3klq4mysmslfirj7slueenbj7ddwg7pc6ixomu',
          alt: item.name,
        }}
      />
    </IconCard>

    <InfoCard>
      <CardTop>
        {favorites ? <IconStar /> : <IconStarDefault />}
        <CardName>{item.cardName}</CardName>
      </CardTop>
      <CardBottom>
        {item.isLocal && <CardLabel>Local</CardLabel>}
        {item.isLocal ? (
          <CardAuthor>by {item.cardAuthor}</CardAuthor>
        ) : (
          <CardAuthorDefault>by {item.cardAuthor}</CardAuthorDefault>
        )}
      </CardBottom>
    </InfoCard>
    <ButtonCard onClick={item.function}>{item.isSave ? <IconBranch /> : <IconTrash />}</ButtonCard>
  </Card>
)

const callout = (
  <List>
    <Header>
      <TopLine>
        <Title> There are some guides here</Title>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </TopLine>
    </Header>
    <TopPublish>
      <PublishText> There is some local changes.</PublishText>
      {/* todo: onPublish function */}
      <PublishButton onClick={onPublish}>
        <IconPublish />
        Publish
      </PublishButton>
    </TopPublish>
    <Content>
      <ContentTop>
        <ContentSubtitle>Favorites</ContentSubtitle>
        {/* todo: onRevert function */}
        <RevertButton onClick={onRevert}>
          <IconRevert />
          Revert
        </RevertButton>
      </ContentTop>
      {/* todo: favorites */}
      <FavoritesBlock>
        {cardsTest.filter((x) => x.isFavorite).map((i) => card(i, true))}
      </FavoritesBlock>
      <ContentTop>
        <ContentSubtitle>available</ContentSubtitle>
      </ContentTop>
      {/* todo: avalible */}
      <AvalibleBlock>
        {cardsTest.filter((x) => !x.isFavorite).map((i) => card(i, false))}
      </AvalibleBlock>
    </Content>
    <BottomBlock>
      {/* todo: onImport function */}
      <ButtonImport onClick={onImport}>
        <IconImport />
        Import
      </ButtonImport>
      {/* todo: onCreate function */}
      <ButtonCreate onClick={onCreate}>
        <IconCreate />
        Create
      </ButtonCreate>
    </BottomBlock>
  </List>
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
