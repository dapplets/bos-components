/**
 * From near-api-js/blob/master/packages/utils/src/format.ts
 */
const NEAR_NOMINATION_EXP = 24
const NEAR_NOMINATION = new BN('10', 10).pow(new BN(NEAR_NOMINATION_EXP, 10))
const ROUNDING_OFFSETS = []
const BN10 = new BN(10)

for (let i = 0, offset = new BN(5); i < NEAR_NOMINATION_EXP; i++) {
  ROUNDING_OFFSETS[i] = offset
  offset = offset.mul(BN10)
}

function trimTrailingZeroes(value) {
  return value.replace(/\.?0*$/, '')
}

function formatWithCommas(value) {
  const pattern = /(-?\d+)(\d{3})/
  while (pattern.test(value)) {
    value = value.replace(pattern, '$1,$2')
  }
  return value
}

/**
 * Convert account balance value from internal indivisible units to NEAR. 1 NEAR is defined by {@link NEAR_NOMINATION}.
 * Effectively this divides given amount by {@link NEAR_NOMINATION}.
 *
 * @param {string} balance decimal string representing balance in smallest non-divisible NEAR units (as specified by {@link NEAR_NOMINATION})
 * @param {number} fracDigits number of fractional digits to preserve in formatted string. Balance is rounded to match given number of digits.
 * @returns {string} Value in Ⓝ
 */
function formatNearAmount(balance, fracDigitsExternal) {
  const fracDigits = fracDigitsExternal || NEAR_NOMINATION

  const balanceBN = new BN(balance, 10)
  if (fracDigits !== NEAR_NOMINATION_EXP) {
    const roundingExp = NEAR_NOMINATION_EXP - fracDigits - 1
    if (roundingExp > 0) {
      balanceBN.iadd(ROUNDING_OFFSETS[roundingExp])
    }
  }

  balance = balanceBN.toString()
  const wholeStr = balance.substring(0, balance.length - NEAR_NOMINATION_EXP) || '0'
  const fractionStr = balance
    .substring(balance.length - NEAR_NOMINATION_EXP)
    .padStart(NEAR_NOMINATION_EXP, '0')
    .substring(0, fracDigits)

  return trimTrailingZeroes(`${formatWithCommas(wholeStr)}.${fractionStr}`)
}

/**
 * Converts a yocto number to a number with three digits after the dot
 *
 * @param {string} amount decimal string representing balance in smallest non-divisible NEAR units
 * @returns {number} examples: 0.3, 0.05, 0
 */

function formatNear(amount) {
  return Number(formatNearAmount(amount, 3))
}

/**
 * End
 */

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
const CONTRACT_NAME = 'market.aigency.near'
const NFT_CONTRACT_ID = 'nft.aigency.near'

const { nftTokens } = props

const nftToken = nftTokens.find(
  (token) => JSON.parse(token.metadata.extra)?.agent_id === props.context.id
)

if (!nftToken) return <Container>-</Container>

console.log('nftToken', nftToken)

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

if (!marketData) return <Container>-</Container>

return <Container>{formatNear(marketData.price)} Ⓝ</Container>
