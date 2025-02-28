const Button = styled.button`
  display: flex;
  justify-content: center;
  height: 18px;
  border-radius: 10px;
  padding: 0 6px;
  gap: 5px;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;

  font-family: system-ui, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 17.88px;
  letter-spacing: 0;

  color: ${({ $isSelected }) => ($isSelected ? 'white' : '#384bff')};
  background-color: ${({ $isSelected }) => ($isSelected ? '#384bff' : 'rgba(248, 249, 255, 1)')};

  border: none;
  align-items: center;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ $isSelected }) => ($isSelected ? '#384bff' : 'white')};
    background-color: ${({ $isSelected }) => ($isSelected ? 'rgba(248, 249, 255, 1)' : '#384bff')};
  }
`

const robotIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.80433 2.87567H6.19633C5.76018 2.87549 5.32826 2.96126 4.92526 3.12807C4.52226 3.29488 4.15608 3.53946 3.84764 3.84784C3.5392 4.15622 3.29455 4.52235 3.12766 4.92531C2.96077 5.32828 2.87491 5.76018 2.875 6.19633V9.80433C2.87483 10.2405 2.96061 10.6725 3.12746 11.0756C3.29432 11.4786 3.53896 11.8448 3.84741 12.1533C4.15585 12.4617 4.52207 12.7064 4.92511 12.8732C5.32815 13.0401 5.76012 13.1258 6.19633 13.1257H9.80433C10.2405 13.1258 10.6725 13.0401 11.0756 12.8732C11.4786 12.7064 11.8448 12.4617 12.1533 12.1533C12.4617 11.8448 12.7064 11.4786 12.8732 11.0756C13.0401 10.6725 13.1258 10.2405 13.1257 9.80433V6.19633C13.1258 5.76012 13.0401 5.32815 12.8732 4.92511C12.7064 4.52207 12.4617 4.15585 12.1533 3.84741C11.8448 3.53896 11.4786 3.29432 11.0756 3.12746C10.6725 2.96061 10.2405 2.87483 9.80433 2.875V2.87567Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M13.071 10.3922H14.1503C14.3316 10.3922 14.5054 10.3202 14.6335 10.1921C14.7617 10.0639 14.8337 9.89012 14.8337 9.70889V6.29222C14.8337 6.11099 14.7617 5.93718 14.6335 5.80903C14.5054 5.68088 14.3316 5.60889 14.1503 5.60889H13.0703M2.93033 10.3922H1.85033C1.76059 10.3922 1.67173 10.3745 1.58883 10.3402C1.50592 10.3059 1.43059 10.2555 1.36714 10.1921C1.30368 10.1286 1.25335 10.0533 1.21901 9.97039C1.18467 9.88748 1.16699 9.79862 1.16699 9.70889V6.29222C1.16699 6.11099 1.23899 5.93718 1.36714 5.80903C1.49529 5.68088 1.66909 5.60889 1.85033 5.60889H2.93033"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M1.84363 5.60882V2.87549M14.1503 5.60882L14.1436 2.87549M6.63363 10.1582C6.99702 10.5189 7.48828 10.7213 8.00029 10.7213C8.51231 10.7213 9.00357 10.5189 9.36696 10.1582M5.25363 7.31682L5.93563 6.63349L6.61896 7.31682M9.35363 7.31682L10.037 6.63349L10.7196 7.31682"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const { contextR: context, config } = props

const [isOpened, setIsOpened] = useState(false)

const agentId = 'dapplets.near/agent/associative-summarizer'
const url = `${config.backendUrl}/context/invoke-agent`
const payload = {
  context: {
    namespace: '${REPL_ACCOUNT}/parser/twitter',
    contextType: 'post',
    id: context.id,
    parsedContext: context.parsed,
  },
  agentId,
}

const data = useCache(
  () =>
    asyncFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((x) => x)
      .catch((err) => console.log(err)),
  `associative-summarizer/id=${context.id}`,
  { subscribe: true }
)

// console.log('data', data)

if (!data || !context?.id) return <></>
if (!data.body?.context?.parsedContext) {
  console.error('Wrong data format:', data)
  return <></>
}

const handleClose = () => setIsOpened(false)

const Wrapper = (props) => {
  console.log('context', context)
  console.log('props.context?.level', props.context?.level)
  const widgetProps = {
    id: context.id,
    onClose: handleClose,
    content: data.body.context.parsedContext,
    onRefAttach: ({ ref }) => {
      props.attachContextRef(ref)
    },
  }
  return (
    <Widget
      src="${REPL_ACCOUNT}/widget/AiAgent.OverlayTrigger"
      loading={<></>}
      props={widgetProps}
    />
  )
}

const post = {
  namespace: 'mweb',
  contextType: 'as-agent-button',
  if: { id: { eq: context.id + '-as-agent-button' } },
}

return (
  <>
    <Button
      data-mweb-context-type="as-agent-button"
      data-mweb-context-parsed={JSON.stringify({ id: context.id + '-as-agent-button' })}
      $isSelected={isOpened}
      onClick={() => setIsOpened(!isOpened)}
    >
      {robotIcon}
    </Button>
    {isOpened ? <DappletPortal inMemory target={post} component={Wrapper} /> : null}
  </>
)
