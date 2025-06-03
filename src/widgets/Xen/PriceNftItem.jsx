const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 3px;
  padding: 8px;
  font: var(--text-xs);
  font-size: 12px;
  color: #82827c;
`

console.log('props', props)
console.log('context', context)

// const data = Near.view(
//       TIPPING_CONTRACT_NAME,
//       'getTotalTipsByItemId',
//       {
//         itemId: itemGlobalId,
//       },
//       'final',
//       true
//     )
// console.log('data', data)

// if (!data) return <></>

return <Container>5 NEAR</Container>
