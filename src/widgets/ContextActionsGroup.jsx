const widgets = props.widgets ?? []
const apps = props.apps ?? []
const { context, isEditMode, createUserLink, deleteUserLink, enableEditMode, disableEditMode } =
  props

State.init({
  show: false,
  showMenu: false,
  waitingAppIdsSet: new Set(),
})

const handleOnMouseEnter = () => State.update({ show: true })

const handleOnMouseLeave = () => {
  state.showMenu ? null : isEditMode ? null : State.update({ show: false })
}

const handleOpenMenu = () => State.update({ showMenu: true, show: false })

const handleCloseMenu = () => State.update({ showMenu: false, show: false })

const handleSelectComponent = (app) => {
  State.update({ waitingAppIdsSet: state.waitingAppIdsSet.add(app.id) })
  createUserLink(app.id)
    .then(() => {
      const waitingAppIdsSet = state.waitingAppIdsSet
      waitingAppIdsSet.delete(app.id)
      State.update({ waitingAppIdsSet })
    })
    .catch(() => {
      const waitingAppIdsSet = state.waitingAppIdsSet
      waitingAppIdsSet.delete(app.id)
      State.update({ waitingAppIdsSet })
    })
}

const FloatingModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: falling-animation 0.3s linear forwards;
  translate: all ease 0.2s;
  @keyframes falling-animation {
    from {
      transform: translate(-50%, -200%);
    }

    to {
      transform: translate(-50%, -50%);
    }
  }
`

return (
  <div style={{ display: 'flex', zIndex: 500 }} onMouseOver={handleOnMouseEnter}>
    <Widget
      src="${REPL_ACCOUNT}/widget/LayoutManager.TriggerEar"
      props={{ show: state.show, context }}
      loading={<></>}
    />
    {state.show ? (
      <Widget
        loading={<></>}
        props={{
          widgets,
          isEditMode,
          enableEditMode,
          disableEditMode,
          handleOpenMenu,
          handleOnMouseLeave,
          deleteUserLink,
        }}
        src="${REPL_ACCOUNT}/widget/LayoutManager.EarOpened"
        loading={<></>}
      />
    ) : null}

    {state.showMenu ? (
      <DappletOverlay>
        <FloatingModal>
          <Widget
            loading={<></>}
            props={{
              handleCloseMenu,
              onSelect: handleSelectComponent,
              apps,
              waitingAppIdsSet: state.waitingAppIdsSet,
            }}
            src="${REPL_ACCOUNT}/widget/ComponentsSearch"
            loading={<></>}
          />
        </FloatingModal>
      </DappletOverlay>
    ) : null}
  </div>
)
