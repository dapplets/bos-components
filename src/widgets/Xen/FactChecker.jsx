const Label = styled.div`
  display: flex;
  justify-content: center;
  height: 18px;
  border-radius: 10px;
  padding: 0 6px;
  gap: 5px;
  user-select: none;

  color: white;

  font-family: system-ui;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-transform: capitalize;

  background-color: ${({ $type }) =>
    $type === 'convincingly'
      ? 'rgba(25, 206, 174, 1)'
      : $type === 'unclear'
        ? 'rgba(235, 165, 0, 1)'
        : 'rgba(217, 48, 79, 1)'};
`

const { contextR: context, config } = props

console.log('context', context)

// const [isOpened, setIsOpened] = useState(false)
// const [isSwitchingState, setIsSwitchingState] = useState(false)

const url = `${config.backendUrl}/webhook/tweets-analyzer`
const payload = {
  content: {
    id: context.id,
    text: context.parsed.text,
    authorUsername: context.parsed.authorUsername,
    createdAt: context.parsed.createdAt,
    url: context.parsed.url,
  },
}

const data2 = useCache(
  () =>
    asyncFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((x) => x?.body),
  `fact-checker/id=${context.id}`,
  { subscribe: true }
)
console.log('data2', data2)

// if (!data) return <></>

// TODO: use real request
const data = {
  convincingly: Math.round(Math.random() * 10) / 10,
  unclear: Math.round(Math.random() * 10) / 10,
  lame: Math.round(Math.random() * 10) / 10,
}

const highest = Object.entries(data)
  // .filter(([k]) => k !== 'compound')
  .reduce((acc, value) => (acc[1] > value[1] ? acc : value))
// console.log('highest', highest)

return (
  <Label $type={highest[0]} title="Assessment by Xen">
    {highest[0]}
  </Label>
)
