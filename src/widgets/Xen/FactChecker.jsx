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

  background-color: ${({ $color }) => $color ?? 'grey'};
`

const { contextR: context, config } = props
// console.log('context', context)
if (!context?.parsed) return <></>

const url = `${config.backendUrl}/webhook/tweets-analyzer`
const payload = {
  context: {
    namespace: context.namespace,
    type: context.type,
    id: context.id,
    content: {
      id: context.id,
      text: context.parsed.text,
      authorUsername: context.parsed.authorUsername,
      createdAt: context.parsed.createdAt,
      url: context.parsed.url,
    },
  },
}
const data = useCache(
  () =>
    asyncFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((x) => x?.body?.context.content),
  `fact-checker4/id=${context.id}`
)
// console.log('data', data)
if (!data?.label) return <></>
const color = data.color ? (data.color[0] === '#' ? data.color : `#${data.color}`) : ''

return (
  <Label $color={color} title="Assessment by Xen">
    {data.label}
  </Label>
)
