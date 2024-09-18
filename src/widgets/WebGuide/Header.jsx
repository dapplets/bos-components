const Header = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: var(--colorMain);
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
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
  margin: 0;
  padding: 0;
`

const CalloutHeaderCaption = styled.div`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--colorMain);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 149%;
  flex: 1;
`

const PagesIndicators = styled.div`
  width: auto;
  height: 24px;
  padding: 4px;
  gap: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  flex: 1;
`

const Navi = styled.button`
  box-sizing: border-box;
  padding: 0 !important;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background: var(--navActive);
    border: none;
  }

  &.inactive {
    background: var(--navInactiveBg);
    border: 1px solid var(--navInactiveBorder);
  }
`

const HeaderButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
  justify-content: flex-end;
`

const Close = styled.button`
  display: flex;
  flex-direction: row-reverse;
  background: inherit;
  outline: none;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`

const EditButton = styled.button`
  display: flex;
  flex-direction: row-reverse;
  background: inherit;
  outline: none;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`

const SwitchThemesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M19.1144 12.672C18.7253 12.2824 18.2219 12.0274 17.6776 11.944L18.1888 11.432C18.4288 11.1888 18.6184 10.9008 18.7472 10.584C18.8792 10.2699 18.9472 9.93268 18.9472 9.592C18.9472 9.25132 18.8792 8.91406 18.7472 8.6C18.6196 8.28289 18.4297 7.99455 18.1888 7.752L16.1376 5.704C15.9136 5.46187 15.6421 5.26851 15.34 5.136C15.025 5.00528 14.6874 4.938 14.3464 4.938C14.0054 4.938 13.6678 5.00528 13.3528 5.136C13.0522 5.26799 12.7808 5.45833 12.5544 5.696L12.044 6.208C11.9525 5.5949 11.6442 5.03492 11.1752 4.6296C10.7071 4.22475 10.1093 4.00134 9.4904 4H6.5936C5.90593 4.00237 5.2472 4.27708 4.7616 4.764C4.27532 5.25147 4.00155 5.91146 4 6.6V17.4C4 18.0896 4.2736 18.7512 4.76 19.2384C5.2464 19.7264 5.9056 20 6.5936 20H17.3664C17.7101 19.9946 18.0494 19.9212 18.3645 19.7839C18.6797 19.6466 18.9645 19.4481 19.2024 19.2C19.4509 18.9617 19.6494 18.6762 19.7864 18.3603C19.9233 18.0443 19.9959 17.7043 20 17.36V14.496C19.9821 14.1481 19.8945 13.8074 19.7423 13.4941C19.5902 13.1808 19.3767 12.9012 19.1144 12.672ZM7.9424 17.88C7.57109 17.8803 7.20808 17.7702 6.89953 17.5636C6.59098 17.3571 6.35082 17.0634 6.2096 16.72C6.06806 16.3763 6.03112 15.9985 6.10341 15.6339C6.17571 15.2692 6.35402 14.9341 6.616 14.6704C6.87799 14.4066 7.21258 14.2267 7.57714 14.1537C7.9417 14.0808 8.31974 14.1179 8.66311 14.2605C9.00647 14.4031 9.29963 14.6447 9.50522 14.9545C9.71082 15.2642 9.81957 15.6282 9.8176 16C9.8176 16.4984 9.62 16.9768 9.268 17.3296C8.916 17.6824 8.4392 17.88 7.9424 17.88ZM11.988 7.864L13.3048 6.544C13.4344 6.4136 13.5896 6.3096 13.76 6.24C14.1008 6.104 14.48 6.104 14.8208 6.24C14.9899 6.31467 15.1416 6.416 15.276 6.544L17.3264 8.6C17.4532 8.73339 17.556 8.88765 17.6304 9.056C17.7684 9.40002 17.7684 9.78398 17.6304 10.128C17.5584 10.296 17.4552 10.448 17.3264 10.576L11.988 15.936V7.864Z"
      fill="var(--colorMain)"
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

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.76923 8H5.84615C5.35652 8 4.88695 8.1945 4.54073 8.54073C4.1945 8.88695 4 9.35652 4 9.84615V18.1538C4 18.6435 4.1945 19.1131 4.54073 19.4593C4.88695 19.8055 5.35652 20 5.84615 20H14.1538C14.6435 20 15.1131 19.8055 15.4593 19.4593C15.8055 19.1131 16 18.6435 16 18.1538V17.2308"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9999 6.00009L17.9999 9.00006M19.3849 7.58508C19.7787 7.19123 20 6.65707 20 6.10009C20 5.54311 19.7787 5.00894 19.3849 4.6151C18.9911 4.22126 18.4569 4 17.8999 4C17.3429 4 16.8088 4.22126 16.4149 4.6151L8 13V16H11L19.3849 7.58508Z"
      stroke="var(--colorMain)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ViewIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M5.77778 20C5.28889 20 4.87052 19.8261 4.52267 19.4782C4.17481 19.1304 4.00059 18.7117 4 18.2222V5.77778C4 5.28889 4.17422 4.87052 4.52267 4.52267C4.87111 4.17481 5.28948 4.00059 5.77778 4H18.2222C18.7111 4 19.1298 4.17422 19.4782 4.52267C19.8267 4.87111 20.0006 5.28948 20 5.77778V18.2222C20 18.7111 19.8261 19.1298 19.4782 19.4782C19.1304 19.8267 18.7117 20.0006 18.2222 20H5.77778ZM5.77778 18.2222H18.2222V7.55556H5.77778V18.2222ZM12 16.4444C10.7852 16.4444 9.70015 16.115 8.74489 15.456C7.78963 14.797 7.09689 13.9413 6.66667 12.8889C7.0963 11.837 7.78904 10.9816 8.74489 10.3227C9.70074 9.6637 10.7858 9.33393 12 9.33333C13.2142 9.33274 14.2996 9.66252 15.256 10.3227C16.2124 10.9828 16.9049 11.8382 17.3333 12.8889C16.9037 13.9407 16.2113 14.7964 15.256 15.456C14.3007 16.1156 13.2154 16.445 12 16.4444ZM12 14.2222C11.6296 14.2222 11.315 14.0927 11.056 13.8338C10.797 13.5748 10.6673 13.2599 10.6667 12.8889C10.6661 12.5179 10.7959 12.2033 11.056 11.9449C11.3161 11.6865 11.6308 11.5567 12 11.5556C12.3692 11.5544 12.6841 11.6841 12.9449 11.9449C13.2056 12.2056 13.3351 12.5203 13.3333 12.8889C13.3316 13.2575 13.2021 13.5724 12.9449 13.8338C12.6877 14.0951 12.3727 14.2246 12 14.2222ZM12 15.1111C12.6222 15.1111 13.1481 14.8963 13.5778 14.4667C14.0074 14.037 14.2222 13.5111 14.2222 12.8889C14.2222 12.2667 14.0074 11.7407 13.5778 11.3111C13.1481 10.8815 12.6222 10.6667 12 10.6667C11.3778 10.6667 10.8519 10.8815 10.4222 11.3111C9.99259 11.7407 9.77778 12.2667 9.77778 12.8889C9.77778 13.5111 9.99259 14.037 10.4222 14.4667C10.8519 14.8963 11.3778 15.1111 12 15.1111Z"
      fill="var(--colorMain)"
    />
  </svg>
)

const { navi, onClose, mutatorId, isEditMode, setEditMode, isEditAllowed, onClickPageIndicator } =
  props

return (
  <Header>
    <TopLine>
      <HeaderButtonGroup>
        {isEditMode ? (
          <EditButton onClick={onSkinToggle}>
            <SwitchThemesIcon />
          </EditButton>
        ) : null}

        {isEditAllowed ? (
          <EditButton
            onClick={() => {
              handleSavePageChanges()
              setEditMode((val) => !val)
            }}
          >
            {isEditMode ? <ViewIcon /> : <EditIcon />}
          </EditButton>
        ) : null}
        <Close onClick={onClose}>
          <CloseIcon />
        </Close>
      </HeaderButtonGroup>
      {navi ? (
        <>
          <PagesIndicators>
            {navi.totalPages > 1 &&
              [...Array(navi?.totalPages)].map((_, index) => (
                <Navi
                  key={index}
                  className={index == navi?.currentPageIndex ? 'active' : 'inactive'}
                  title={`Page ${index + 1}`}
                  onClick={() => onClickPageIndicator({ index, newTitle, newContent })}
                />
              ))}
          </PagesIndicators>
          <CalloutHeaderCaption>
            Chapter {navi?.currentChapterIndex + 1} of {navi?.totalChapters}
          </CalloutHeaderCaption>
        </>
      ) : null}
    </TopLine>
  </Header>
)
