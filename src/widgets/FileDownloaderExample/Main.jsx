/**
 * In-memory controller
 */

const post = {
  namespace: '${REPL_ACCOUNT}/parser/twitter',
  contextType: 'post',
  if: { id: { not: null } },
  injectTo: 'southPanel',
}

const [webGuideConfig, setWebGuideConfig] = useState('')

const ExportButton = styled('DappletFileDownloader')`
  background-color: #f00;
`

const PostButton = ({ context }) => {
  const handleClick = async (files) => {
    const [file] = files
    file
      .text()
      .then((json) => {
        // ToDo: wrap json.parse to try catch
        const webGuideConfig = JSON.parse(json)
        console.log(webGuideConfig)

        setWebGuideConfig(webGuideConfig)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleExportClick = () => {
    const jsonString = JSON.stringify(webGuideConfig, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const file = new File([blob], 'webGuideConfig.json')

    return file
  }

  return (
    <>
      <Files
        multiple={false}
        accepts={['application/json']}
        clickable
        className="btn btn-outline-primary"
        onChange={handleClick}
      >
        Import
      </Files>
      <ExportButton onClick={handleExportClick}>Export</ExportButton>
    </>
  )
}

return (
  <>
    <DappletPortal target={post} component={PostButton} />
  </>
)
