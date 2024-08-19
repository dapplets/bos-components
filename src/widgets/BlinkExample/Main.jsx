const handleClick = () => {
  console.log(props.context)
}

return (
  <button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>
    Blink
  </button>
)
