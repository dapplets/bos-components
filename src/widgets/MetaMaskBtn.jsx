const ConnectButton = styled.button`
  display: flex;
  cursor: pointer;
  border-radius: 18px;
  border: 4px solid black;
  width: fit-content;
  text-transform: inherit;
  font-weight: inherit;
  font-size: 22px;
  line-height: 150%;
  padding: 0px 16px;
  gap: 8px;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  font-family:
    'Space Grotesk',
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  user-select: none;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(#faf7e2, #ffa79d, #fc849c, #fc3c89, #f72b5e);
  box-shadow: 0px 0px 10px 1px rgb(254, 104, 133);

  &:hover {
    background: linear-gradient(#faf5d2, #fb8f84, #fe6885, #fd1570, #f7136d);
    box-shadow: 0px 0px 10px 3px rgb(253, 90, 123);
    transition: all 0.12s ease-in-out;
  }

  &:active {
    background: linear-gradient(#faf5d2, #fc7b6c, #f85273, #fc0f6e, #f7136d);
    box-shadow: 0px 0px 10px 4px rgb(250, 76, 111);
  }

  svg {
    height: 30px;
    stroke-width: 2px;
  }
`

const OuterContainer = styled.div`
  display: flex;
  margin: -6px 0 6px;
  width: 100%;
  background: linear-gradient(#f8fedc, #62606c);
  border-radius: 16px;
  border: 4px solid black;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  background-color: black;
  border-radius: 8px;
  margin: 4px;
  padding: 4px;
`

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  border: none;
  border-top: 2px solid #fedbc0;
  border-bottom: 2px solid #830e39;
  background: linear-gradient(#fb8f84, #f7136d);
`

const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  border: none;
  background: repeating-linear-gradient(#48d1cf, #48d1cf 4px, black 4px, black 8px);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(#31f7c9, #519096, #4b4c57);
  padding: 16px;
  gap: 8px;
  text-transform: uppercase;
  font-weight: 700;
  font-family:
    'Space Grotesk',
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  user-select: none;
`

const Select = styled.select`
  ::picker(select) {
    appearance: base-select;
    font: -webkit-small-control;
  }

  option::checkmark,
  select::picker-icon {
    font-weight: 800;
  }

  width: 360px;
  margin-bottom: 8px;
  appearance: base-select;
  border: 4px solid black;
  border-radius: 21px;
  background: linear-gradient(#edf4cb, #c1cdc3);
  font: -webkit-small-control;
  font-weight: inherit;
  cursor: pointer;

  &:open {
    box-shadow: 4px 4px 0px 0px black;
    border-radius: 0 0 10px 10px;
  }

  &:focus-visible {
    outline: none;
  }

  option {
    border: 4px solid black;
    border-bottom: none;
    background: linear-gradient(#edf4cb, #c1cdc3);
    /*  remove when patch is in  */
    place-items: center;
    font-weight: 600;
    cursor: pointer;
  }
`

const ShowerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 8px;
`

const Shower = styled.div`
  display: flex;
  width: 200px;
  border-radius: 18px;
  border: 4px solid black;
  background: linear-gradient(#f3fedb, #5efdda, #32e8dc, #21ced3, #16bcdb);
  width: fit-content;
  text-transform: inherit;
  font-weight: inherit;
  font-size: 22px;
  line-height: 150%;
  padding: 0 26px;
  font-size: 72px;
  text-align: center;
  font-family: monospace;
  user-select: none;

  @keyframes pulse2 {
    0% {
      background: linear-gradient(#16bcdb, #99f3df, #5efdda, #32e8dc, #21ced3);
    }
    33% {
      background: linear-gradient(#21ced3, #16bcdb, #99f3df, #5efdda, #32e8dc);
    }
    66% {
      background: linear-gradient(#32e8dc, #21ced3, #16bcdb, #99f3df, #5efdda);
    }
    100% {
      background: linear-gradient(#5efdda, #32e8dc, #21ced3, #16bcdb, #99f3df);
    }
  }

  &:hover {
    animation: pulse2 0.5s infinite;
  }
`

const Input = styled.input`
  height: 36px;
  border-radius: 18px;
  border: 4px solid black;
  background: linear-gradient(#edf4cb, #c1cdc3);
  width: fit-content;
  text-transform: inherit;
  font-weight: inherit;
  text-align: center;
  width: 80px;
  transition: all 0.4s ease;
  font-size: 22px;
  line-height: 150%;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: 4px 4px 0px 0px black;
    transform: translate(-4px, -4px);
  }
`

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 60px;
    margin: 1rem;
    stroke-width: 2px;
  }
`

const Button = styled.button`
  cursor: pointer;
  border-radius: 18px;
  border: 4px solid black;
  background: linear-gradient(#faf5d2, #fb8f84, #fe6885, #fd1570, #f7136d);
  width: fit-content;
  text-transform: inherit;
  font-weight: inherit;
  font-size: 22px;
  line-height: 150%;
  padding: 0 26px;

  @keyframes pulse {
    0% {
      background: linear-gradient(#f7136d, #fdbcb5, #fb8f84, #fe6885, #fd1570);
    }
    33% {
      background: linear-gradient(#fd1570, #f7136d, #fdbcb5, #fb8f84, #fe6885);
    }
    66% {
      background: linear-gradient(#fe6885, #fd1570, #f7136d, #fdbcb5, #fb8f84);
    }
    100% {
      background: linear-gradient(#fb8f84, #fe6885, #fd1570, #f7136d, #fdbcb5);
    }
  }

  &:hover {
    animation: pulse 0.5s infinite;
  }

  &:active {
    animation: none;
    background: linear-gradient(#fff4a3, #ff6a59, #ff375f, #e60d64, #ce0958);
  }
`

const MetaMaskLinesIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
      <path d="m23.971 35.016h2.262l.726 3.415h-3.335" />
      <path d="m42.158 31.771-11.57.213-4.355 3.032.384-18.232 2.391-5.934 11.613-4.611 1.879 5.721-1.708 6.746.171 3.415-1.11 1.638 2.305 8.012-2.092 8.496-8.539-2.647-4.568 4.141h-2.988" />
      <path d="m39.8529 23.7591-8.1549-2.4062" />
      <path d="m40.7922 18.7057 1.4943-.2561" />
      <path d="m42.2865 20.3282-1.4047.1705" />
      <path d="m26.4389 25.2438 7.9489-.1764" />
      <path d="m35.647 31.891-4.12 5.729-.939-5.636 3.8-6.917-2.69-3.714-5.081-4.569 14.004-10.545" />
      <path d="m26.2329 35.0155 5.2943 2.6044" />
      <path d="m27.45 29.663 3.186-1.185-2.274-1.185z" />
      <path d="m29.0081 10.8497h-5.0373" />
      <path d="m24.029 35.016h-2.262l-.726 3.415h2.583" />
      <path d="m5.842 31.771 11.57.213 4.355 3.032-.384-18.232-2.391-5.934-11.613-4.611-1.879 5.721 1.708 6.746-.171 3.415 1.11 1.638-2.305 8.012 2.092 8.496 8.539-2.647 4.568 4.141h2.988" />
      <path d="m8.1471 23.7591 8.1549-2.4062" />
      <path d="m7.2078 18.7057-1.4943-.2561" />
      <path d="m5.7135 20.3282 1.4047.1705" />
      <path d="m21.5611 25.2438-7.9489-.1764" />
      <path d="m12.353 31.891 4.12 5.729.939-5.636-3.8-6.917 2.69-3.714 5.081-4.569-14.004-10.545" />
      <path d="m21.7671 35.0155-5.2943 2.6044" />
      <path d="m20.55 29.663-3.186-1.185 2.274-1.185z" />
      <path d="m18.9919 10.8497h5.0373" />
    </g>
  </svg>
)

const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'num',
        type: 'uint256',
      },
    ],
    name: 'store',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'retrieve',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const [account, setAccount] = useState(null)
const [amount, setAmount] = useState(0)
const [accounts, setAccounts] = useState([])
const [savedNumber, setSavedNumber] = useState([])

console.log('accounts', accounts)
console.log('account', account)
console.log('amount', amount)

useEffect(() => {
  Ethers.provider()
    .send('eth_accounts', [])
    .then((accounts) => {
      setAccounts(accounts)
      setAccount(accounts?.[0])
    })
}, [])

useEffect(() => {
  // create a contract instance
  const wEthContract = new ethers.Contract(
    '0x8777f5D4e404DC9d8F4245e0687902D32aBD6407',
    abi,
    Ethers.provider().getSigner(account)
  )
  wEthContract.retrieve().then((res) => setSavedNumber(res.toString()))
}, [account])

const handleSave = () => {
  // create a contract instance
  const wEthContract = new ethers.Contract(
    '0x8777f5D4e404DC9d8F4245e0687902D32aBD6407',
    abi,
    Ethers.provider().getSigner(account)
  )
  // perform a given method (withdraw in this case)
  wEthContract.store(amount).then((receipt) => {
    console.log(receipt)
    receipt.wait().then((res) => console.log(res))
  })
}

Ethers.provider()
  .send('eth_chainId', [])
  .then((chainId) => {
    console.log('chainId', Number.parseInt(chainId, 16))
  })

return !account ? (
  <ConnectButton
    onClick={(e) => {
      e.stopPropagation()
      Ethers.provider()
        .send('eth_requestAccounts', [])
        .then((accounts) => {
          setAccounts(accounts)
          setAccount(accounts?.[0])
        })
    }}
  >
    <MetaMaskLinesIcon />
    Connect
  </ConnectButton>
) : (
  <OuterContainer>
    <InnerContainer>
      <Header />
      <Container>
        <label htmlFor="a-select">Choose an account</label>
        <Select
          size="1"
          name="accounts"
          id="a-select"
          onChange={(res) => {
            setAccount(res.target.value)
          }}
        >
          {accounts.map((acc) => (
            <option key={acc} value={acc}>
              {acc}
            </option>
          ))}
        </Select>
        Current number
        <ShowerContainer>
          <Shower>{savedNumber}</Shower>
        </ShowerContainer>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Set new number
          <div
            style={{
              background: '#2c393d',
              border: '4px solid black',
              height: 16,
              width: 16,
              borderRadius: 10,
            }}
          ></div>
          <div
            style={{
              background: '#16bcdb',
              border: '4px solid black',
              height: 16,
              width: 16,
              borderRadius: 10,
            }}
          ></div>
          <div
            style={{
              background: '#f7136d',
              border: '4px solid black',
              height: 16,
              width: 16,
              borderRadius: 10,
            }}
          ></div>
          <Input
            onChange={(v) => {
              if (/^[0-9]{0,4}$/.test(v.target.value)) {
                if (v.target.value.length > 1 && v.target.value[0] === '0') {
                  setAmount(v.target.value.slice(1))
                } else if (v.target.value === '') {
                  setAmount('0')
                } else {
                  setAmount(v.target.value)
                }
              }
            }}
            value={amount}
          />
        </div>
        <ButtonGroup>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <MetaMaskLinesIcon />
            <p style={{ fontFamily: 'monospace', fontSize: 20, margin: 0 }}>
              <p style={{ fontFamily: 'monospace', fontSize: 20, margin: 0 }}>Ethereum</p>
              <p style={{ fontFamily: 'monospace', fontSize: 20, margin: 0 }}>contract</p>
            </p>
          </div>
          <Button onClick={handleSave}>Save</Button>
        </ButtonGroup>
      </Container>
      <Footer />
    </InnerContainer>
  </OuterContainer>
)
