/* ─────────────────── config ─────────────────── */
// const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID || 'mainnet'
// const NODE_URL = process.env.NEXT_PUBLIC_NODE_URL || 'https://rpc.mainnet.near.org'
// const WALLET_URL = process.env.NEXT_PUBLIC_WALLET_URL || 'https://app.mynearwallet.com'
// const HELPER_URL = process.env.NEXT_PUBLIC_HELPER_URL || 'https://helper.mainnet.near.org'
const NFT_CONTRACT_ID = 'nft.aigency.near'

// const GAS_BN = 150_000_000_000_000n // 150 Tgas
// const STORAGE_FOR_SALE = 8_590_000_000_000_000_000_000n // 0.00859 Ⓝ
// const STORAGE_PRICE_PER_BYTE = 10_000_000_000_000_000_000n // 0.00001 Ⓝ per byte

// console.log('props', props)
// console.log('context', context)

const nftTokens = Near.view(NFT_CONTRACT_ID, 'nft_tokens', { from_index: '0', limit: 100 }, 'final')
// console.log('nftTokens', nftTokens)

if (!nftTokens) return <></>

const createTarget = (contextType, injectTo) => ({
  namespace: '${REPL_ACCOUNT}/parser/near-ai',
  contextType,
  injectTo,
  if: { id: { not: null } },
})

return (
  <>
    <DappletPortal
      target={createTarget('table-header', 'addCell')}
      component={() => (
        <Widget src="${REPL_ACCOUNT}/widget/Xen.NearAiNftMarket.PriceColumnHeader" />
      )}
    />
    <DappletPortal
      target={createTarget('agent', 'addCell')}
      component={(props) => (
        <Widget
          src="${REPL_ACCOUNT}/widget/Xen.NearAiNftMarket.PriceNftItem"
          props={{ context: props.context, nftTokens }}
        />
      )}
    />
    <DappletPortal
      target={createTarget('agent', 'buttons')}
      component={(props) => (
        <Widget
          src="${REPL_ACCOUNT}/widget/Xen.NearAiNftMarket.NearAiNftActionButton"
          props={{ context: props.context, nftTokens }}
        />
      )}
    />
  </>
)
