import { Core } from '@walletconnect/core'
import { IWeb3Wallet, Web3Wallet } from '@walletconnect/web3wallet'
import { buildApprovedNamespaces, getSdkError } from '@walletconnect/utils'
import { PROJECT_ID } from '../../config'

let web3wallet: IWeb3Wallet
const core = new Core({
    projectId: PROJECT_ID
})
export const initWalletConnect = async () => {
    web3wallet = await Web3Wallet.init({
        core, // <- pass the shared `core` instance
        metadata: {
            name: 'Demo app',
            description: 'Demo Client as Wallet/Peer',
            url: 'www.walletconnect.com',
            icons: []
        }
    })
    web3wallet.on('session_proposal', async proposal => {
        await web3wallet.rejectSession({
            id: proposal.id,
            reason: getSdkError("USER_REJECTED_METHODS"),
        })
    })
}