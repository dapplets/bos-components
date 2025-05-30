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
    width: ${({ $rating }) => 36 * $rating}px;
    height: 4px;
    background-color: rgb(29, 161, 242);
    border-radius: 2px;
  }
`

const { contextR: context, config } = props
// console.log('context', context)
if (!context?.parsed) return <></>

const url = `${config.backendUrl}/webhook/profile-rating`
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
  `trust-rating/id=${context.id}`
)
// console.log('data', data)
if (!data?.rating) return <></>

return <Label $rating={data.rating} title="Rating provided by Xen" />
