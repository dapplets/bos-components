const Label = styled.div`
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

  background-color: rgba(248, 249, 255, 1);

  font-family: system-ui, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 17.88px;
  letter-spacing: 0;

  color: rgba(2, 25, 58, 1);
`

const { contextR: context, config } = props

// console.log('context', context)

const [isOpened, setIsOpened] = useState(false)
const [isSwitchingState, setIsSwitchingState] = useState(false)

const agentId = 'dapplets.near/agent/sentiment-analysis'
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
    }).then((x) => x?.body?.context?.parsedContext),
  `sentiment-analysis/id=${context.id}`,
  { subscribe: true }
)
// console.log('data', data)

if (!data) return <></>
const highest = Object.entries(data).reduce((acc, value) => (acc[1] > value[1] ? acc : value))
// console.log('highest', highest)

return (
  <Label title="Score provided by Aigency's Sentiment Analysis agent">
    {highest[0][0].toUpperCase() + highest[0].slice(1)}
  </Label>
)
