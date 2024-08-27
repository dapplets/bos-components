const { isActive, onClick } = props

const IconQuestionMark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="9" fill={isActive ? 'white' : '#02193A'} />
    <path
      d="M7.84446 12.85H9.60281V14.5H7.84446V12.85ZM9.01669 3.5C12.1524 3.621 13.5181 6.591 11.6542 8.8185C11.1677 9.3685 10.3823 9.7315 9.9955 10.1935C9.60281 10.65 9.60281 11.2 9.60281 11.75H7.84446C7.84446 10.8315 7.84446 10.056 8.23716 9.506C8.62399 8.956 9.40939 8.6315 9.89586 8.2685C11.3143 7.0365 10.9626 5.293 9.01669 5.15C8.55035 5.15 8.10311 5.32384 7.77335 5.63327C7.4436 5.94271 7.25835 6.36239 7.25835 6.8H5.5C5.5 5.92479 5.87051 5.08542 6.53001 4.46655C7.18952 3.84768 8.08401 3.5 9.01669 3.5Z"
      fill={isActive ? '#384BFF' : 'white'}
    />
  </svg>
)

return (
  <Widget
    src="${REPL_ACCOUNT}/widget/ActionButton"
    loading={<></>}
    props={{
      appId: 'web-guide',
      tooltip: isActive ? 'Stop Web Guide' : 'Run Web Guide',
      isActive,
      children: <IconQuestionMark />,
      onClick,
    }}
  />
)
