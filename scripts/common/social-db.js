const { SocialDb } = require('social-db-js')
const { connect, keyStores } = require('near-api-js')
const os = require('os')
const path = require('path')

const Networks = {
  mainnet: {
    networkId: 'mainnet',
    nodeUrl: 'https://rpc.mainnet.near.org',
    walletUrl: 'https://wallet.mainnet.near.org',
    helperUrl: 'https://helper.mainnet.near.org',
    explorerUrl: 'https://nearblocks.io',
    socialDb: 'social.dapplets.near',
  },
  testnet: {
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://testnet.mynearwallet.com/',
    helperUrl: 'https://helper.testnet.near.org',
    explorerUrl: 'https://testnet.nearblocks.io',
    socialDb: 'social.dapplets.testnet',
  },
}

class NearSigner {
  options

  constructor(options) {
    this.options = options
  }

  async getAccountId() {
    const account = await this._getAccount()
    return account.accountId
  }

  async view(contractName, methodName, args) {
    const account = await this._getAccount()
    return account.viewFunction({
      contractId: contractName,
      methodName: methodName,
      args,
    })
  }

  async call(contractName, methodName, args, gas, deposit) {
    const account = await this._getAccount()

    return account.functionCall({
      contractId: contractName,
      methodName: methodName,
      args,
      gas,
      deposit,
    })
  }

  async _getAccount() {
    const homedir = os.homedir()
    const CREDENTIALS_DIR = '.near-credentials'
    const credentialsPath = path.join(homedir, CREDENTIALS_DIR)
    const myKeyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath)

    const near = await connect({ ...this.options, keyStore: myKeyStore })
    const account = await near.account(
      this.options.accountId || this.options.masterAccount || this.options.contractName
    )

    return account
  }
}

const connectToSocialDb = (networkId, accountId) => {
  const network = Networks[networkId]
  const signer = new NearSigner({ ...network, accountId })
  const socialDb = new SocialDb(signer, network.socialDb)

  return socialDb
}

module.exports = { connect: connectToSocialDb }
