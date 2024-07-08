const [newData, setNewData] = useState('')

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 500px;
  background: #FFFFFE;
  border: 1px solid #02193A;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  box-shadow: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #02193A;

  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    padding: 0;
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
  }
`

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;

  svg {
    path {
      stroke: #838891;
      transition-duration: .2s;
    }
  }
  
  :hover {
    svg {
      path {
        stroke: #555555;
      }
    }
  }
`

const closeIcon =  (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6.5L18 18.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SuccessButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  width: 180px;
  height: 42px;
  background: #02193A;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 149%;
  text-align: center;
  color: #FFFFFF;
  transition-duration: 0.2s;

  :hover {
    background-color: rgb(32 45 63);
  }
`

return (
  <Container>
    <Header>
      <h1>Specify the adapter ID</h1>
      <CloseButton onClick={() => props.handleClose()}>
        {closeIcon}
      </CloseButton>
    </Header>
    <input
      autoFocus
      style={{ width: '100%', height: '100%', fontSize: '16px' }}
      onChange={(e) => setNewData(e.target.value)}
      value={newData}
    />
    <div style={{ display: 'flex', width: '80%', justifyContent: 'space-evenly' }}>
      <SuccessButton onClick={() => {
        props.setSelectedAdapter('')
        setNewData('')
        props.toggleIsRunningApp(false)
      }}>
        Cancel
      </SuccessButton>
      <SuccessButton onClick={() => {
        props.setSelectedAdapter(newData)
      }}>
        Save
      </SuccessButton>
    </div>
  </Container>
)
