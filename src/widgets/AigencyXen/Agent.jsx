const Content = styled.div`
  padding: 10px !important;
  border-radius: 0 0 10px 10px !important;
  font-family: system-ui, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 17.88px !important;
  letter-spacing: 0 !important;
  color: rgba(2, 25, 58, 1) !important;
  border-top: none !important;
`

const { contextR: context, config } = props

const payload = {
  context: {
    namespace: '${REPL_ACCOUNT}/parser/twitter',
    contextType: 'post',
    id: context.id,
    parsedContext: context.parsed,
  },
}

const data = useCache(
  () =>
    asyncFetch(config.backendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((resp) => resp?.body?.context?.parsedContext)
      .catch((err) => console.log(err)),
  `fakeDetectorStatus/id=${context.id}`
)

if (!data || !data.text) return <></>

return <Content>{data.text}</Content>
