const Label = styled.div`
  display: flex;
  justify-content: center;
  height: 18px;
  border-radius: 3px;
  padding: 0 6px;
  gap: 5px;
  user-select: none;

  color: rgba(29, 161, 242, 1);

  font-family: system-ui;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-transform: capitalize;

  position: absolute;
  left: -15px;
  top: -4px;
  width: 40px;
  height: 8px;

  border: 1px solid rgba(29, 161, 242, 1);
  background-color: white;

  &::before {
    content: '';
    position: absolute;
    left: 1px;
    top: 1px;
    width: ${({ $raiting }) => 36 * $raiting}px;
    height: 4px;
    background-color: rgb(29, 161, 242);
    border-radius: 2px;
  }
`

// const { contextR: context, config } = props

// console.log('context', context)

// const [isOpened, setIsOpened] = useState(false)
// const [isSwitchingState, setIsSwitchingState] = useState(false)

// const agentId = 'dapplets.near/agent/sentiment-analysis'
// const url = `${config.backendUrl}/context/invoke-agent`
// const payload = {
//   context: {
//     namespace: '${REPL_ACCOUNT}/parser/twitter',
//     contextType: 'post',
//     id: context.id,
//     parsedContext: context.parsed,
//   },
//   agentId,
// }

// const data = useCache(
//   () =>
//     asyncFetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     }).then((x) => x?.body?.context?.parsedContext),
//   `sentiment-analysis/id=${context.id}`,
//   { subscribe: true }
// )
// console.log('data', data)

// if (!data) return <></>

// TODO: use real request
const raiting = Math.round(Math.random() * 10) / 10
console.log('raiting', raiting)

return <Label $raiting={raiting} title="Raiting provided by Xen" />
