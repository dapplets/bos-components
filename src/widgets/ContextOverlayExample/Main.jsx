/**
 * In-memory controller
 */

const post = {
  namespace: '${REPL_ACCOUNT}/parser/twitter',
  contextType: 'post',
  if: { id: { not: null } },
  injectTo: 'southPanel',
  floating: true,
}

const CustomTooltipDefault = styled('DappletTooltip')`
  z-index: 99999999; // over the notch

  &[data-popper-reference-hidden='true'] {
    position: fixed !important;
    left: 50% !important;
    transform: translate(-100%, 0px) !important;
  }

  &.bs-tooltip-bottom[data-popper-reference-hidden='true'] {
    top: 22px !important;
  }

  &.bs-tooltip-top[data-popper-reference-hidden='true'] {
    bottom: 22px !important;
  }

  .tooltip-arrow::before {
    border: none;
    display: inline-block;
    content: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='19' height='38' viewBox='18 0 20 38' fill='none' ><path d='M34.3818 22.1845L19.5654 36.0575L19.5654 1.8284L34.3715 15.6052C36.2802 17.3812 36.285 20.4025 34.3818 22.1845Z' fill='%23FFFFFE' stroke='%2302193A' /><path d='M16.5693 2.96185L20.0642 2.96185L21.0642 3.96185L21.0642 33.9619L20.0642 34.9619H16.5693L16.5693 2.96185Z' fill='%23FFFFFE' /></svg>");
  }

  &.bs-tooltip-top .tooltip-arrow {
    bottom: -29px;

    &::before {
      transform: rotate(90deg);
    }
  }

  &.bs-tooltip-end .tooltip-arrow {
    left: -18px;

    &::before {
      transform: rotate(180deg);
    }
  }

  &.bs-tooltip-bottom .tooltip-arrow {
    top: -29px;

    &::before {
      transform: rotate(-90deg);
    }
  }

  &.bs-tooltip-start .tooltip-arrow {
    right: -18px;

    &::before {
      transform: rotate(0deg);
    }
  }
`

const PostButton = ({ context }) => {
  const handleClick = () => {
    console.log(context)
  }

  return (
    <button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>
      Overlay
    </button>
  )
}

return (
  <>
    <DappletPortal target={post} component={PostButton} />
  </>
)
