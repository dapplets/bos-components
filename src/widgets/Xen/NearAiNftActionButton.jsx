const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  color: #8c8cf3;
  background: none;
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  border-radius: 99em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #8c8cf3;
  }
`

const icon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.00209 9.20611L11.697 13.5438C11.8145 13.6806 11.959 13.7916 12.1214 13.87C12.2838 13.9483 12.4607 13.9923 12.6409 13.9991C12.821 14.0059 13.0007 13.9754 13.1686 13.9096C13.3364 13.8437 13.4889 13.7439 13.6164 13.6164C13.7439 13.4889 13.8437 13.3364 13.9096 13.1686C13.9754 13.0007 14.0059 12.821 13.9991 12.6409C13.9922 12.4607 13.9483 12.2838 13.87 12.1214C13.7916 11.959 13.6806 11.8145 13.5438 11.697L9.20611 8.00209M2 7.94507L5.65827 11.6033M7.94507 2L11.6033 5.65827M8.40243 2.45736L11.146 5.20092C11.146 5.20092 9.77391 7.03035 8.40243 8.40243C7.03035 9.77391 5.20091 11.146 5.20091 11.146L2.45736 8.40243C2.45736 8.40243 3.82944 6.57299 5.20091 5.20092C6.57299 3.82944 8.40243 2.45736 8.40243 2.45736Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M1 14H5" stroke="currentColor" stroke-linecap="round" />
  </svg>
)

return (
  <Button
    title="Bid"
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      console.log(props)
    }}
  >
    {icon}
  </Button>
)
