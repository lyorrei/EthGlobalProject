import React, { createContext, useState, useContext, useEffect } from 'react'
import { Web3Auth } from '@web3auth/web3auth'
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
import { ethers } from 'ethers'
import contractAddresses from '../ethereum/contractsAddresses.json'
import storesManagementJson from '../ethereum/build/contracts/StoresManagement.json'
import storeJson from '../ethereum/build/contracts/Store.json'

const ContractsContext = createContext(null)

export default function ContractsProvider({ children }: any) {
    const { provider, web3auth } = useAuth()

    useEffect(() => {}, [])

    const storesManagement = async () => {
        const connectedProvider = new ethers.providers.Web3Provider(provider)
        const contract = new ethers.Contract(
            contractAddresses?.addresses?.at(-1)?.storesManagement as string,
            storesManagementJson.abi,
            connectedProvider
        )
        return contract
    }

    const store = async (contractAddress: any) => {
        const connectedProvider = new ethers.providers.Web3Provider(provider)
        const contract = new ethers.Contract(contractAddress, storeJson.abi, connectedProvider)
        return contract
    }

    const getRestaurants = async () => {
        const storesManagementContract: any = await storesManagement()
        const storesAddresses = await storesManagementContract.getStores()
        const storesData = []

        for (let i = 0; i < storesAddresses; i++) {
            const storeObject: any = {}
            const storesContract = await store(storesAddresses[i])

            storeObject.name = await storesContract.name()
            const contractIpfs = await storesContract.uri()

            const formatedIpfsLink = 'https://ipfs.io/ipfs/' + contractIpfs.slice(7)

            storeObject.imageUrl = formatedIpfsLink
            storeObject.name = await storesContract.name()
            storesData.push(storeObject)
        }

        return storesData
    }

    // const getProducts = async (restaurantAddress: string) => {
    //     const storesContract: any = await store(restaurantAddress)
    //     const storesAddresses = await storesContract.getStores()
    //     const storesData = []

    //     for (let i = 0; i < storesAddresses; i++) {
    //         const storeObject: any = {}
    //         const storesContract = await store( storesAddresses[i])

    //         storeObject.name = await storesContract.name()
    //         const contractIpfs = await storesContract.uri()

    //         const formatedIpfsLink =
    //             'https://ipfs.io/ipfs/' + contractIpfs.slice(7)

    //         storeObject.imageUrl = formatedIpfsLink
    //         storeObject.name = await storesContract.name()
    //         storesData.push(storeObject)
    //     }

    //     return storesData
    // }

    const isRestaurantOwner = async () => {
        const storesManagementContract: any = await storesManagement()
        const storesAddresses = await storesManagementContract.getStores()
        console.log('alou', provider)
        console.log(web3auth)

        for (let i = 0; i < storesAddresses.length; i++) {
            const storesContract: any = await store(storesAddresses[i])
            const storeOwner = await storesContract.owner()

            // if (storeOwner == )
        }
    }

    return <ContractsContext.Provider value={{ getRestaurants, isRestaurantOwner }}>{children}</ContractsContext.Provider>
}

export function useContracts() {
    const context = useContext<any>(ContractsContext)
    if (!context) throw new Error('useContracts must be used within a ContractsProvider')
    const { getRestaurants, isRestaurantOwner } = context
    return { getRestaurants, isRestaurantOwner }
}
