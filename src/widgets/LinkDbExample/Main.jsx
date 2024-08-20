const { accountId } = context // The order is important, because context redeclared
const { linkDb: LinkDb, context } = props

const DefaultValue = { counter: 0 }

const [data, setData] = useState(DefaultValue)
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  LinkDb.get(context, accountId)
    .then((data) => setData(data[accountId] ?? DefaultValue))
    .catch(console.error)
    .finally(() => setIsLoading(false))
}, [])

const handleClick = () => {
  setIsLoading(true)

  const newData = { counter: (data.counter ?? 0) + 1 }

  LinkDb.set(context, { [accountId]: newData })
    .then(() => setData(newData))
    .catch(console.error)
    .finally(() => setIsLoading(false))
}

if (isLoading) {
  return (
    <button className="btn btn-primary btn-sm" type="button" disabled>
      <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
    </button>
  )
}

return (
  <button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>
    {data?.counter ?? 0}
  </button>
)
