import React, { createContext, useState, useContext, useEffect } from 'react'
import { Web3Auth } from '@web3auth/web3auth'
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base'
import { useNavigate } from "react-router-dom";

const clientId = 'BIMZtCpD-qDHMvOHnCuuUUM5l_i3nOZoOBqmJKMT3QHkr10YkZ3M7DIz5rWb_ZSIMoQQtGyCRC6SRz7gDzl6sAc'

const AuthContext = createContext(null)

export default function AuthProvider({ children }: any) {
    const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null)
    const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null)
    const navigate = useNavigate();

    useEffect(() => {
        const init = async () => {
            try {
                const web3auth = new Web3Auth({
                    clientId,
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        chainId: '0x1',
                        rpcTarget: 'https://rpc.ankr.com/eth', // This is the public RPC we have added, please pass on your own endpoint while creating an app
                    },
                })

                setWeb3auth(web3auth)

                await web3auth.initModal()
                if (web3auth.provider) {
                    setProvider(web3auth.provider)
                }
            } catch (error) {
                console.error(error)
            }
        }

        init()
    }, [])

    const login = async (replaceRoute: string) => {
        if (!web3auth) {
            console.log('web3auth not initialized yet')
            return
        }
        const web3authProvider = await web3auth.connect()
        setProvider(web3authProvider)

        navigate(replaceRoute);
    }

    const logout = async () => {
        if (!web3auth) {
            console.log('web3auth not initialized yet')
            return
        }
        await web3auth.logout()
        setProvider(null)

        navigate("/");
    }

    return (
        <AuthContext.Provider
            value={{
                web3auth,
                login,
                logout,
                provider,
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext<any>(AuthContext)
    if (!context) throw new Error('useAuth must be used within a AuthProvider')
    const { web3auth, login, logout, provider } = context
    return {
        web3auth,
        login,
        logout,
        provider,
    }
}
