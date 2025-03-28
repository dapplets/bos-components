const allMetadata =
  Social.get(['*/widget/*/metadata/name', '*/widget/*/metadata/tags/*'], 'final') || {}
const keys = Social.keys(['*/widget/*'], 'final', { values_only: true }) || {}

const requiredTag = props.filterTag
const boostedTag = props.boostedTag
const inputTerm = props.term

const debounce = (func, wait) => {
  const pause = wait || 350
  let timeout

  return (args) => {
    const later = () => {
      clearTimeout(timeout)
      func(args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, pause)
  }
}

const _search = (term) => {
  const terms = (term || '')
    .toLowerCase()
    .split(/[^\w._\/-]/)
    .filter((s) => !!s.trim())

  const matchedWidgets = []

  const limit = props.limit ?? 30

  const MaxSingleScore = 1
  const MaxScore = MaxSingleScore * 4

  const computeScore = (s) => {
    s = s.toLowerCase()
    return (
      terms
        .map((term) => {
          const pos = s.indexOf(term)
          return pos >= 0 ? Math.exp(-pos) : 0
        })
        .reduce((s, v) => s + v, 0) / terms.length
    )
  }

  Object.entries(keys).forEach(([accountId, data]) => {
    Object.keys(data.widget).forEach((componentId) => {
      const widgetSrc = `${accountId}/widget/${componentId}`
      const widgetSrcScore = computeScore(widgetSrc)
      const componentIdScore = computeScore(componentId)
      const metadata = allMetadata[accountId].widget[componentId].metadata
      const name = metadata.name || componentId
      if (requiredTag && !(metadata.tags && requiredTag in metadata.tags)) {
        return
      }
      const boosted = boostedTag && metadata.tags && boostedTag in metadata.tags
      const tags = Object.keys(metadata.tags || {}).slice(0, 10)
      const nameScore = computeScore(name)
      const tagsScore = Math.min(
        MaxSingleScore,
        tags.map(computeScore).reduce((s, v) => s + v, 0)
      )
      const score = (widgetSrcScore + componentIdScore + nameScore + tagsScore) / MaxScore
      if (score > 0) {
        matchedWidgets.push({
          score,
          accountId,
          widgetName: componentId,
          widgetSrc,
          name,
          tags,
          boosted,
        })
      }
    })
  })

  matchedWidgets.sort((a, b) => (b.boosted ? 2 : 0) + b.score - (a.boosted ? 2 : 0) - a.score)
  const result = matchedWidgets.slice(0, limit)

  State.update({
    result,
  })

  if (props.onChange) {
    props.onChange({ term, result })
  }
}

const _searchDebounced = debounce(_search, 200)

const computeResults = (term) => {
  State.update({
    term: term,
  })

  _searchDebounced(term)
}

if (props.term && props.term !== state.oldTerm) {
  State.update({
    oldTerm: props.term,
  })
  if (props.term !== state.term) {
    computeResults(props.term)
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  position: relative;

  .bi-search {
    position: absolute;
    top: 0;
    left: 18px;
    z-index: 100;
    font-size: 14px;
    line-height: 40px;
    color: #687076;
  }

  .input-group {
    height: 100%;
  }

  input {
    padding: 0 14px 0 42px;
    border: 1px solid #d0d5dd !important;
    background: #ffffff;
    border-radius: 100px;
  }

  button {
    border-color: #d0d5dd !important;
    border-radius: 0 100px 100px 0 !important;
    border-left: none !important;
    background: #fff !important;
    color: #687076 !important;

    &:hover,
    &:focus {
      color: #000 !important;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`
const iconSearch = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
  </svg>
)
const iconClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
  </svg>
)

const SpanSearch = styled.span`
  position: absolute;
  top: 13px;
  left: -5px;
  display: inline-block;
  width: 16px;
  height: 16px;
`
return (
  <Wrapper>
    <SpanSearch>{iconSearch}</SpanSearch>

    <div className="input-group">
      <input
        type="text"
        className={`form-control ${state.term ? 'border-end-0' : ''}`}
        value={state.term ?? ''}
        onChange={(e) => computeResults(e.target.value)}
        placeholder={props.placeholder ?? `Search components`}
      />

      {state.term && (
        <button
          className="btn btn-outline-secondary border border-start-0"
          type="button"
          onClick={() => computeResults('')}
        >
          <span>{iconClose}</span>
        </button>
      )}
    </div>

    {props.debug && <pre>{JSON.stringify(state.result, undefined, 2)}</pre>}
  </Wrapper>
)
