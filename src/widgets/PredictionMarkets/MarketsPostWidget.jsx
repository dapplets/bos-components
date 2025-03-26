const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: -6px 0 6px;
  width: 100%;
`

const Button = styled.button`
  box-sizing: border-box;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 1px solid rgb(207, 217, 222) !important;
  border-radius: 10px 10px 0 0 !important;
  padding: 8px !important;
  gap: 5px;
  width: 100% !important;
  cursor: pointer;

  font-family: system-ui, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 14px !important;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none;

  color: rgba(165, 167, 169, 1) !important;
  background: rgba(248, 249, 255, 1) !important;

  p {
    color: rgba(2, 25, 58, 1) !important;
    margin: 0;
    padding: 0;
  }

  &.collapsed {
    border-radius: 10px 10px 10px 10px !important;
  }

  .badge,
  .header-second-part {
    display: flex;
    font-weight: 400;
    font-size: 12px;
    line-height: 17.88px;
    letter-spacing: 0;
    text-align: center;
    align-items: center !important;
    top: 0 !important;
    height: 18px !important;
    padding-right: 2px !important;
    padding-left: 2px !important;
    gap: 2px !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 17.88px !important;
    letter-spacing: 0 !important;
    color: inherit !important;
  }
`

const Collaps = styled.div`
  transform: scaleY(1);
  height: auto;
  &.collapse:not(.show) {
    display: block !important;
    transform: scaleY(0) !important;
    height: 0 !important;
  }
`

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

const LeadingOutcome = styled.span`
  color: rgba(25, 206, 174, 1);
  font-weight: 600 !important;
  font-size: 14px !important;
  line-height: 110% !important;
  text-transform: capitalize;
`

const DownButton = styled.span`
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 17.88px !important;
  letter-spacing: 0% !important;
  transform: ${({ $isOpened }) => $isOpened && 'rotate(180deg)'};
`

const DownIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 6L8 10L4 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const AigencyLabel = (
  <svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.74759 3.79317C7.58556 3.79317 7.45764 3.92273 7.45764 4.07737V4.75862C7.1549 4.46188 6.82231 4.22365 6.46841 4.03976C5.88424 3.73884 5.2276 3.58838 4.51125 3.58838C3.27471 3.58838 2.2002 4.02722 1.32182 4.90072C0.44345 5.77005 0 6.8358 0 8.06038C0 9.28495 0.439186 10.3841 1.30903 11.2576C2.18314 12.1312 3.24913 12.5784 4.48141 12.5784C5.17217 12.5784 5.82029 12.4321 6.40871 12.1479C6.77967 11.9682 7.13358 11.7299 7.45764 11.4374V12.0852C7.45764 12.244 7.58982 12.3694 7.74759 12.3694H8.80078C8.96281 12.3694 9.09073 12.2398 9.09073 12.0852V4.07737C9.09073 3.91855 8.95855 3.79317 8.80078 3.79317H7.74759ZM7.52586 8.12307C7.52586 8.67476 7.39795 9.17629 7.14637 9.61513C6.89906 10.0498 6.53663 10.4009 6.07612 10.6558C5.14658 11.1657 4.04222 11.1741 3.14253 10.6558C2.69481 10.3967 2.33238 10.0289 2.06375 9.56498C1.79939 9.09688 1.66294 8.6037 1.66294 8.09381C1.66294 7.58392 1.79512 7.08239 2.05949 6.62265C2.32385 6.16291 2.68629 5.7993 3.12974 5.54436C3.57745 5.29359 4.0678 5.16403 4.59653 5.16403C5.428 5.16403 6.11023 5.43987 6.67734 6.00827C7.24871 6.57668 7.52586 7.27046 7.52586 8.12307Z"
      fill="white"
    />
    <path
      d="M12.681 1.64517C12.681 1.95444 12.5659 2.22611 12.3399 2.44762C12.1139 2.66913 11.8368 2.78197 11.517 2.78197C11.1972 2.78197 10.9243 2.66913 10.6983 2.44762C10.4723 2.22611 10.3572 1.95444 10.3572 1.64517C10.3572 1.33589 10.4723 1.06004 10.6983 0.838534C10.9243 0.612845 11.2014 0.5 11.517 0.5C11.8325 0.5 12.1139 0.612845 12.3399 0.838534C12.5659 1.06004 12.681 1.33171 12.681 1.64517Z"
      fill="white"
    />
    <path
      d="M12.0499 3.79346H10.9882C10.8257 3.79346 10.694 3.92257 10.694 4.08184V12.0813C10.694 12.2405 10.8257 12.3697 10.9882 12.3697H12.0499C12.2124 12.3697 12.3441 12.2405 12.3441 12.0813V4.08184C12.3441 3.92257 12.2124 3.79346 12.0499 3.79346Z"
      fill="white"
    />
    <path
      d="M22.2194 3.79317H21.341C21.1278 3.81407 20.9573 3.9896 20.9573 4.20694V4.7419C20.5991 4.41591 20.2324 4.16096 19.8572 3.98543C19.2901 3.72212 18.676 3.58838 18.0237 3.58838C17.2391 3.58838 16.4801 3.78899 15.7766 4.18186C14.9238 4.66249 14.2842 5.36046 13.8791 6.2465C13.6744 6.70624 13.5508 7.19941 13.5167 7.70094C13.4612 8.60788 13.6489 9.45631 14.088 10.2044C14.4718 10.8648 15.0261 11.3956 15.7297 11.7843C16.4332 12.1729 17.1922 12.3694 17.9938 12.3694C18.6718 12.3694 19.3284 12.2273 19.9339 11.9514C20.3049 11.7801 20.646 11.5586 20.953 11.2953C20.9274 11.9556 20.8379 12.4446 20.6758 12.7497C20.4925 13.0882 20.1812 13.3808 19.742 13.6107C19.2986 13.8489 18.7357 13.9659 18.0748 13.9659C17.4139 13.9659 16.834 13.8489 16.3906 13.619C15.9642 13.3975 15.606 13.0506 15.3288 12.5909C15.2606 12.4906 15.1455 12.4237 15.0176 12.4112H14.0667C13.8535 12.4321 13.683 12.6076 13.683 12.8249C13.683 12.8834 13.6958 12.9378 13.7171 12.9838C13.7171 12.9879 13.7171 12.9921 13.7171 12.9963C13.7256 13.013 13.7341 13.0339 13.7469 13.0506C14.0283 13.6023 14.3396 14.037 14.6679 14.3463C15.0432 14.7015 15.5378 14.9857 16.1347 15.1905C16.7189 15.3953 17.3883 15.4998 18.1175 15.4998C19.1238 15.4998 19.9979 15.2866 20.7227 14.8645C21.4604 14.434 21.9849 13.8113 22.2791 13.0172C22.4965 12.4613 22.5989 11.6213 22.5989 10.4552V4.20694C22.5989 3.9896 22.4326 3.81407 22.2151 3.79317H22.2194ZM20.2196 10.0498C19.6823 10.5639 18.9916 10.8146 18.1004 10.8146C17.2092 10.8146 16.5228 10.5639 15.977 10.0414C15.4312 9.519 15.1668 8.87537 15.1668 8.07292C15.1668 7.55049 15.299 7.05731 15.5634 6.60593C15.8235 6.15873 16.1902 5.80348 16.6507 5.54853C17.1112 5.29359 17.6186 5.16403 18.1601 5.16403C18.7016 5.16403 19.1621 5.28941 19.6098 5.536C20.0533 5.78258 20.4029 6.12112 20.6417 6.54742C20.8848 6.97372 21.0084 7.4669 21.0084 8.0144C21.0084 8.86701 20.7483 9.53154 20.2196 10.0498Z"
      fill="white"
    />
    <path
      d="M31.1652 9.27659C30.8625 9.76977 30.5811 10.125 30.3295 10.3382C30.0822 10.5471 29.7794 10.7185 29.4213 10.8481C29.0631 10.9776 28.6921 11.0445 28.3126 11.0445C27.5281 11.0445 26.8885 10.7812 26.3597 10.242C25.8864 9.76141 25.6221 9.17629 25.5496 8.45325H32.8751L32.8708 8.16068C32.8623 7.00716 32.5382 6.02499 31.9071 5.24762C31.0202 4.14424 29.8221 3.58838 28.3425 3.58838C26.8629 3.58838 25.7329 4.13171 24.8759 5.21C24.1979 6.05425 23.8568 7.02806 23.8568 8.10217C23.8568 9.24734 24.2619 10.288 25.055 11.1908C25.8609 12.1103 26.9865 12.5784 28.4022 12.5784C29.0375 12.5784 29.6131 12.478 30.1205 12.29C30.6322 12.0977 31.0927 11.8135 31.5021 11.4499C31.9071 11.0821 32.2653 10.6015 32.5681 10.0122L32.7045 9.75723L31.3102 9.03837L31.1652 9.27659ZM26.4919 5.83692C27.0249 5.373 27.6432 5.14731 28.3894 5.15567C28.7817 5.15567 29.1697 5.23926 29.5279 5.38972C29.9628 5.57361 30.321 5.82438 30.5725 6.14202C30.709 6.30501 30.8241 6.50563 30.9264 6.73968C30.9776 6.8567 30.8838 6.98208 30.7559 6.98208H26.0527C25.912 6.98208 25.8097 6.83998 25.8694 6.7146C26.04 6.34681 26.2489 6.05425 26.4919 5.83692Z"
      fill="white"
    />
    <path
      d="M41.9402 7.96425V12.0183C41.9402 12.2106 41.7782 12.3694 41.582 12.3694H40.6397C40.4521 12.3694 40.2986 12.2189 40.2986 12.035V8.26517C40.2986 7.15344 40.2389 6.68534 40.192 6.49309C40.0854 6.02499 39.885 5.6781 39.595 5.45659C39.3051 5.23508 38.917 5.11805 38.431 5.11805C37.8639 5.11805 37.3692 5.29777 36.9173 5.66974C36.461 6.04171 36.1668 6.49309 36.0218 7.04477C35.928 7.41256 35.8811 8.12307 35.8811 9.14703V12.035C35.8811 12.2189 35.7276 12.3694 35.54 12.3694H34.5806C34.393 12.3694 34.2395 12.2189 34.2395 12.035V4.14006C34.2395 3.94781 34.3973 3.79317 34.5934 3.79317H35.5229C35.7234 3.79317 35.8854 3.95199 35.8854 4.14842V4.73354C36.1839 4.44516 36.5037 4.20694 36.8405 4.0314C37.3906 3.73466 37.996 3.58838 38.6442 3.58838C39.2923 3.58838 39.9105 3.75556 40.4307 4.08991C40.951 4.42427 41.339 4.87983 41.5863 5.44823C41.8293 6.00409 41.9487 6.82744 41.9487 7.96425H41.9402Z"
      fill="white"
    />
    <path
      d="M52.2205 10.3883L52.0542 10.6307C51.6364 11.2451 51.0693 11.7299 50.3657 12.0685C49.6707 12.407 48.8733 12.5784 47.9907 12.5784C46.6262 12.5784 45.4792 12.1437 44.5753 11.2911C43.6713 10.4343 43.2108 9.3769 43.2108 8.14815C43.2108 7.3248 43.424 6.54742 43.8461 5.84528C44.2683 5.13477 44.861 4.57891 45.5986 4.18186C46.3363 3.78481 47.1678 3.58838 48.0717 3.58838C48.6431 3.58838 49.1974 3.67197 49.7304 3.84332C50.2591 4.01468 50.7196 4.24037 51.0949 4.52039C51.4743 4.80042 51.7984 5.16403 52.0628 5.59451L52.212 5.8411L50.8987 6.64355L50.7367 6.42622C50.0715 5.56107 49.1846 5.14313 48.0333 5.14313C46.7456 5.14313 45.8033 5.69064 45.0997 6.8358C44.7458 7.83469 44.8055 8.74999 45.2831 9.56916C45.556 10.0331 45.9355 10.3967 46.413 10.6558C46.8906 10.9108 47.4407 11.0445 48.0376 11.0445C49.1505 11.0445 50.0331 10.6224 50.7409 9.74887L50.9115 9.5399L52.2205 10.3883Z"
      fill="white"
    />
    <path
      d="M60.9786 4.18214L56.0282 15.2953H54.5955C54.4377 15.2953 54.3354 15.1364 54.3994 14.9985L55.9685 11.4753L52.6426 4.14453C52.5659 3.97735 52.6895 3.79346 52.8771 3.79346H54.0113C54.1563 3.79346 54.2885 3.87705 54.3439 4.00661L56.8469 9.51511L59.2816 4.01497C59.3413 3.88123 59.4777 3.79346 59.627 3.79346H60.7143C60.9189 3.79346 61.0554 3.99825 60.9744 4.18214H60.9786Z"
      fill="white"
    />
  </svg>
)

// ToDo: delete mocket data

const CURRENCY = '$'

const MOCKED_DATA = {
  '1825873485937156473': {
    markets: [
      {
        id: '7658767547543',
        question:
          'Will the Trump administration announce a new tariff policy targeting European car imports by March 22, 2025?',
        image: 'bafkreifc7ov3gg64snbk4tfilcyeth37ala6k2tvcxctbjnnw34jtqdxqi',
        outcomes: [
          {
            index: '897585',
            name: 'yes',
            marketId: '89kljafgjefkhjg76585',
            percentage: 0.2902,
          },
          {
            index: '89765',
            name: 'no',
            marketId: '89kljafgjlhjg76585',
            percentage: 0.7098,
          },
        ],
        usdVolume: 1000,
        runningDailyVolume: '962426773980799',
      },
      {
        id: '76hsdrthdh7543',
        question:
          'Will the Trump administration announce a new tariff policy targeting European car imports by March 22, 2025?',
        image: 'bafkreifc7ov3gg64snbk4tfilcyeth37ala6k2tvcxctbjnnw34jtqdxqi',
        outcomes: [
          {
            index: '897uoioyu6585',
            name: 'yes',
            marketId: '89kljafgjwrwrlaefkhjg76585',
            percentage: 0.5,
          },
          {
            index: '897uytru6585',
            name: 'no',
            marketId: '89kljafgjlaefkhtertejg76585',
            percentage: 0.5,
          },
        ],
        usdVolume: 1524.92,
        runningDailyVolume: '222426773980799',
      },
      {
        id: '765jhlhkjlhkl43',
        question:
          'Will the Trump administration announce a new tariff policy targeting European car imports by March 22, 2025?',
        image: 'bafkreifc7ov3gg64snbk4tfilcyeth37ala6k2tvcxctbjnnw34jtqdxqi',
        outcomes: [
          {
            index: '8976234234585',
            name: 'yes',
            marketId: '89kljafgjlaefkhjg76585',
            percentage: 0,
          },
          {
            index: '89hgjjhg76585',
            name: 'no',
            marketId: '89kljafgsdfafadsjlaefkhjg76585',
            percentage: 1,
          },
        ],
        usdVolume: 1654.23,
        runningDailyVolume: '832426773980799',
      },
      {
        id: '762342134kjlhkl43',
        question:
          'Will the Trump administration announce a new tariff policy targeting European car imports by March 22, 2025?',
        image: 'bafkreifc7ov3gg64snbk4tfilcyeth37ala6k2tvcxctbjnnw34jtqdxqi',
        outcomes: [
          {
            index: '8976;lkjl;k585',
            name: 'yes',
            marketId: '89kljafgjlafghjfgjhefkhjg76585',
            percentage: 1,
          },
          {
            index: '8976adfda585',
            name: 'no',
            marketId: '89kljafgjlaefadfadsfkhjg76585',
            percentage: 0,
          },
        ],
        usdVolume: 765.98,
        runningDailyVolume: '442426773980799',
      },
    ],
  },
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const plus = (a, b) => {
  function countDecimals(num) {
    if (Math.floor(num) === num) return 0
    return num.toString().split('.')[1].length
  }

  const decimalsA = countDecimals(a)
  const decimalsB = countDecimals(b)
  const factor = Math.pow(10, Math.max(decimalsA, decimalsB))

  return (Math.round(a * factor) + Math.round(b * factor)) / factor
}

/**
 * @param {string} value
 * @returns {string[]}
 */

const splitByThreeNumbers = (value) => {
  const res = []
  while (value.length > 3) {
    res.push(value.slice(-3))
    value = value.slice(0, -3)
  }
  res.push(value)
  return res.reverse()
}

/**
 * @param {number} value
 * @returns {string}
 */

const processVolume = (value) => {
  const [integerPart, fractionalPart] = value.toString().split('.')
  const parts = splitByThreeNumbers(integerPart)
  if (fractionalPart) parts[parts.length - 1] += '.' + fractionalPart
  return parts.join(',') // or String.fromCharCode(8239)
}

const { contextR: context, config } = props

const [isOpened, setIsOpened] = useState(false)
const [isSwitchingState, setIsSwitchingState] = useState(false)

const agentId = 'dapplets.near/agent/nearai-fake-detector'
const url = `${config.backendUrl}/context/invoke-agent`
const payload = {
  context: {
    namespace: '${REPL_ACCOUNT}/parser/twitter',
    contextType: 'post',
    id: context.id,
    parsedContext: context.parsed,
  },
  agentId,
}

// ToDo: use real request
//
// const data = useCache(
//   () =>
//     asyncFetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     })
//       .then((x) => {
//         // console.log('x', x)
//         return x?.body?.context?.parsedContext
//       })
//       .catch((err) => console.log(err)),
//   `fakeDetectorStatus/id=${context.id}`,
//   { subscribe: true }
// )

const data = context?.parsed?.id && MOCKED_DATA[context.parsed.id] // ToDo: use real request

if (!data) return <></>

const usdVolume = data.markets.reduce((acc, v) => plus(acc, v.usdVolume), 0)

const marketMaxValue = data.markets.reduce((acc, v) =>
  Number(v.runningDailyVolume) > acc.runningDailyVolume ? v : acc
)

const leadingOutcome = marketMaxValue.outcomes.reduce((acc, v) =>
  v.percentage > acc.percentage ? v : acc
)

return (
  <Container>
    <Button
      className={isOpened ? 'btn btn-primary' : 'btn btn-primary collapsed'}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded={isOpened ? 'true' : 'false'}
      aria-controls="collapseExample"
      onClick={() => setIsOpened(!isOpened)}
    >
      <div className="badge">
        <img
          style={{ width: 33 }}
          src="https://ipfs.near.social/ipfs/bafkreibwgipd6cuwpw6yvv5oracel7x4dt3fk742glcxhf6bmonjxqq4m4"
        />
        <p>{CURRENCY + processVolume(usdVolume)}</p>
        <p>in active bets</p>
        {'(' + data.markets.length + ')'}
      </div>
      <div className="header-second-part">
        <LeadingOutcome>
          {leadingOutcome.name + ' (' + Math.round(leadingOutcome.percentage * 10000) / 100 + '%)'}
        </LeadingOutcome>
        <DownButton $isOpened={isOpened}>{DownIcon}</DownButton>
      </div>
    </Button>
    <Collaps
      className={isSwitchingState ? 'collapsing' : isOpened ? 'collapse show' : 'collapse'}
      id="collapseExample"
    >
      <Content className="card card-body">
        <button className="btn arrow-left"></button>
        {data.markets.map((market) => (
          <div key={market.id} className="my-card-item">
            <div className="left-column">
              <img
                src={
                  /^http(s)?:\/\//.test(market.image)
                    ? market.image
                    : `https://ipfs.near.social/ipfs/${market.image}`
                }
              />
              <a href="#">Bet now</a>
            </div>
            <div className="right-column">
              <p>{market.question}</p>
              <div className="statistics"></div>
              <div className="my-card-footer"></div>
            </div>
          </div>
        ))}
        <button className="btn arrow-right"></button>
      </Content>
    </Collaps>
  </Container>
)
