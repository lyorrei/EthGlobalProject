import { ethers } from 'ethers'
import contractAddresses from '../ethereum/contractsAddresses.json'
import storesManagementJson from '../ethereum/build/contracts/StoresManagement.json'
import storeJson from '../ethereum/build/contracts/Store.json'
import ordersJson from '../ethereum/build/contracts/Orders.json'

export const storesManagement = async (web3authProvider: any) => {
    const provider = new ethers.providers.Web3Provider(web3authProvider)
    const contract = new ethers.Contract(
        contractAddresses?.addresses?.at(-1)?.storesManagement as string,
        storesManagementJson.abi,
        provider
    )
    return contract
}

export const store = async (web3authProvider: any, contractAddress: any) => {
    const provider = new ethers.providers.Web3Provider(web3authProvider)
    const contract = new ethers.Contract(
        contractAddress,
        storeJson.abi,
        provider
    )
    return contract
}

export const stores = async (web3authProvider: any, address: string) => {
    const provider = new ethers.providers.Web3Provider(web3authProvider)
    const contract = new ethers.Contract(
        address,
        storeJson.abi,
        provider
    )
    return contract
}

export const product = async (web3authProvider: any, contractAddress: any) => {
    const provider = new ethers.providers.Web3Provider(web3authProvider)
    const contract = new ethers.Contract(
        contractAddress,
        storeJson.abi,
        provider
    )
    return contract
}