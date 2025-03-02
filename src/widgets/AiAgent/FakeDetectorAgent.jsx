const Button = styled.button`
  font-family: system-ui, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  box-sizing: border-box;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 90px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;

  /* &.primary {
    border: initial;
    background: var(--primBtnBg);
    color: var(--primBtnCol);

    &:hover&:not(:disabled) {
      background: var(--primBtnBgH);
    }

    &:active&:not(:disabled) {
      background: var(--primBtnBgA);
    }
    &:disabled {
      opacity: 0.3;
      cursor: default;
    }
  }

  &.secondary {
    border: 1px solid var(--secBtnBorderCol);
    background: initial;
    color: var(--secBtnCol);

    &:hover&:not(:disabled) {
      background: var(--secBtnBgH);
    }

    &:active&:not(:disabled) {
      background: var(--secBtnBgA);
    }

    &:disabled {
      opacity: 0.3;
      cursor: default;
    }
  } */
`

const { contextR: context, config } = props
console.log('context', context)

const [isOpened, setIsOpened] = useState(false)
const [isSwitchingState, setIsSwitchingState] = useState(false)

const agentId = 'dapplets.near/agent/fake-detector'
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
    }).then((x) => x?.body?.context?.parsedContext?.result?.raw_answer),
  `fakeDetectorStatus/id=${context.id}`,
  { subscribe: true }
)

console.log('data', data)

if (!data) return <></>

const [score, justification] = data.split('\n\n')

return (
  <div style={{ width: '100%' }}>
    <p class="d-inline-flex gap-1">
      <button
        className={isOpened ? 'btn btn-primary' : 'btn btn-primary collapsed'}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded={isOpened ? 'true' : 'false'}
        aria-controls="collapseExample"
        onClick={() => {
          setIsSwitchingState(true)
          setTimeout(() => {
            setIsOpened(!isOpened)
            setIsSwitchingState(false)
          }, 350)
        }}
      >
        {score}
      </button>
    </p>
    <div
      class={isSwitchingState ? 'collapsing' : isOpened ? 'collapse show' : 'collapse'}
      id="collapseExample"
    >
      <div class="card card-body">{justification}</div>
    </div>
  </div>
)
