/**
 * From near-api-js/packages/near-api-js/src/utils/format.ts
 */
const NEAR_NOMINATION_EXP = 24

function cleanupAmount(amount) {
  return amount.replace(/,/g, '').trim()
}

function trimLeadingZeroes(value) {
  value = value.replace(/^0+/, '')
  if (value === '') {
    return '0'
  }
  return value
}

function parseNearAmount(amt) {
  if (!amt) {
    return null
  }
  amt = cleanupAmount(amt)
  const split = amt.split('.')
  const wholePart = split[0]
  const fracPart = split[1] || ''
  if (split.length > 2 || fracPart.length > NEAR_NOMINATION_EXP) {
    throw new Error(`Cannot parse '${amt}' as NEAR amount`)
  }
  return trimLeadingZeroes(wholePart + fracPart.padEnd(NEAR_NOMINATION_EXP, '0'))
}
/**
 * End
 */
const TGas = Big(10).pow(12)
const OneNear = Big(10).pow(24)
const gas = TGas.mul(100).toFixed(0)
const deposit = OneNear.div(100) // 0.01 NEAR // ToDo: calculate storage deposit

const STORAGE_FOR_SALE = new BN(8590, 10).mul(new BN(1_000_000, 10)).mul(new BN(1_000_000_000, 10)) // 0.00859 Ⓝ
const GAS_BN = new BN(150).mul(new BN(1_000_000, 10)).mul(new BN(1_000_000, 10)) // 150 Tgas

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  color: #8c8cf3;
  background: none;
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  border-radius: 99em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover:not(:disabled) {
    border-color: #8c8cf3;
  }
`

const icon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.00209 9.20611L11.697 13.5438C11.8145 13.6806 11.959 13.7916 12.1214 13.87C12.2838 13.9483 12.4607 13.9923 12.6409 13.9991C12.821 14.0059 13.0007 13.9754 13.1686 13.9096C13.3364 13.8437 13.4889 13.7439 13.6164 13.6164C13.7439 13.4889 13.8437 13.3364 13.9096 13.1686C13.9754 13.0007 14.0059 12.821 13.9991 12.6409C13.9922 12.4607 13.9483 12.2838 13.87 12.1214C13.7916 11.959 13.6806 11.8145 13.5438 11.697L9.20611 8.00209M2 7.94507L5.65827 11.6033M7.94507 2L11.6033 5.65827M8.40243 2.45736L11.146 5.20092C11.146 5.20092 9.77391 7.03035 8.40243 8.40243C7.03035 9.77391 5.20091 11.146 5.20091 11.146L2.45736 8.40243C2.45736 8.40243 3.82944 6.57299 5.20091 5.20092C6.57299 3.82944 8.40243 2.45736 8.40243 2.45736Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M1 14H5" stroke="currentColor" stroke-linecap="round" />
  </svg>
)

const CONTRACT_NAME = 'market.aigency.near'
const NFT_CONTRACT_ID = 'nft.aigency.near'

const { nftTokens } = props
const [openOverlay, setOverlay] = useState(null) // 'list', 'bid', null
const [priceNear, setPriceNear] = useState('')
const [auctionLength, setAuctionLength] = useState('')

const nftToken = nftTokens.find(
  (token) => JSON.parse(token.metadata.extra)?.agent_id === props.context.id
)

if (!nftToken) return <></>

const marketData = Near.view(
  CONTRACT_NAME,
  'get_market_data',
  {
    nft_contract_id: NFT_CONTRACT_ID,
    token_id: nftToken.token_id,
  },
  'final'
)

console.log('marketData', marketData)

if (!marketData && context.accountId !== nftToken.owner_id) return <></>

const storagePaid = Near.view(
  CONTRACT_NAME,
  'storage_balance_of',
  {
    account_id: context.accountId,
  },
  'final'
)

const supply = Near.view(
  CONTRACT_NAME,
  'get_supply_by_owner_id',
  {
    account_id: context.accountId,
  },
  'final'
)

const handleListSale = () => {
  console.log('props', props)
  console.log('context', context)
  console.log('storagePaid', storagePaid)
  console.log('supply', supply)
  const priceYocto = parseNearAmount(priceNear)
  console.log('priceYocto', priceYocto)

  const hours = Math.max(1, parseInt(auctionLength))
  const endedAt = new BN(Date.now() + hours * 60 * 60 * 1000).mul(new BN(1000000)).toString()
  console.log('endedAt', endedAt)

  const required = new BN(supply, 10)
    .add(new BN(1, 10))
    .mul(new BN(1_000_000, 10))
    .mul(STORAGE_FOR_SALE)
  console.log('required.toString()', required.toString())

  // const shortfall = required.gt(new BN(storagePaid, 10))
  //   ? required.sub(new BN(storagePaid, 10))
  //   : new BN(0, 10)
  // console.log('shortfall.toString()', shortfall.toString())

  // if (shortfall) {
  // }

  Near.call([
    {
      contractName: CONTRACT_NAME,
      methodName: 'storage_deposit',
      args: {},
      gas,
      deposit,
    },
    {
      contractName: NFT_CONTRACT_ID,
      methodName: 'nft_approve',
      args: {
        token_id: nftToken.token_id,
        account_id: CONTRACT_NAME,
        msg: JSON.stringify({
          market_type: 'sale',
          price: priceYocto,
          ft_token_id: 'near',
          is_auction: true,
          ended_at: endedAt,
        }),
      },
      gas,
      deposit,
    },
  ])
}

const handleBid = () => {
  console.log('props', props)
  console.log('context', context)
  console.log('storagePaid', storagePaid)
  console.log('supply', supply)
  const priceYocto = parseNearAmount(priceNear)
  console.log('priceYocto', priceYocto)

  Near.call(
    CONTRACT_NAME,
    'add_bid',
    {
      nft_contract_id: marketData.nft_contract_id,
      ft_token_id: 'near',
      token_id: marketData.token_id,
      amount: priceYocto,
    },
    gas,
    priceYocto
  )
}

return (
  <>
    <Button
      title={
        !marketData
          ? 'List auction'
          : !context.accountId
            ? 'Connect wallet'
            : Number(marketData.ended_at.slice(0, -6)) < Date.now()
              ? 'Ended'
              : context.accountId === nftToken.owner_id
                ? 'Transfer NFT to highest bidder'
                : marketData.bids.length &&
                    marketData.bids[marketData.bids.length - 1].bidder_id === context.accountId
                  ? 'Your bid is the highest'
                  : 'Place a bid (+5 % minimum increment)'
      }
      disabled={
        marketData &&
        (!context.accountId ||
          Number(marketData.ended_at.slice(0, -6)) < Date.now() ||
          (marketData.bids.length
            ? marketData.bids[marketData.bids.length - 1].bidder_id === context.accountId
            : context.accountId === nftToken.owner_id))
      }
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        if (context.accountId === nftToken.owner_id) {
          if (!marketData) {
            setOverlay('list')
          } else {
            Near.call(
              CONTRACT_NAME,
              'accept_bid',
              {
                nft_contract_id: marketData.nft_contract_id,
                token_id: marketData.token_id,
              },
              gas,
              '1'
            )
          }
        } else {
          setOverlay('bid')
        }
      }}
    >
      {icon}
    </Button>
    {openOverlay ? (
      <DappletOverlay>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            background: 'var(--sand-1)',
            color: 'var(--sand-12)',
            borderRadius: '10px',
            padding: '20px',
            border: '1px solid var(--sand-8)',
          }}
        >
          {openOverlay === 'list' ? (
            <>
              <p style={{ margin: 0 }}>Starting price (NEAR):</p>
              <input type="text" onChange={(e) => setPriceNear(e.target.value)} />
              <p style={{ margin: 0 }}>Auction length (hours):</p>
              <input type="text" onChange={(e) => setAuctionLength(e.target.value)} />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button
                  class="btn btn-secondary"
                  onClick={() => {
                    setPriceNear('')
                    setAuctionLength('')
                    setOverlay(null)
                  }}
                >
                  Cancel
                </button>
                <button
                  disabled={!priceNear || !auctionLength}
                  onClick={() => {
                    handleListSale()
                    setOverlay(null)
                  }}
                >
                  Submit
                </button>
              </div>
            </>
          ) : openOverlay === 'bid' ? (
            <>
              <p style={{ margin: 0 }}>Your bid in NEAR:</p>
              <input type="text" onChange={(e) => setPriceNear(e.target.value)} />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button
                  class="btn btn-secondary"
                  onClick={() => {
                    setPriceNear('')
                    setOverlay(null)
                  }}
                >
                  Cancel
                </button>
                <button
                  disabled={!priceNear}
                  onClick={() => {
                    handleBid()
                    setOverlay(null)
                  }}
                >
                  Submit
                </button>
              </div>
            </>
          ) : null}
        </div>
      </DappletOverlay>
    ) : null}
  </>
)
