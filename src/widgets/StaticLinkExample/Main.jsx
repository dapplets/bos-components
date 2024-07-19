const handleClick = () => {
  console.log(props.context)
}

const Overlay = styled.div`
  background: #fff;
  border: 1px solid #8899a6;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  max-width: 300px;
`

const overlay = (
  <Overlay>
    This button is injected using a static link, a target in the application manifest.
  </Overlay>
)

return (
  <DappletOverlayTrigger overlay={overlay}>
    <button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>
      Static
    </button>
  </DappletOverlayTrigger>
)
