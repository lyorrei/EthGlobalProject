import React from 'react'
import AuthProvider from '../contexts/auth'
import CartProvider from '../contexts/cart'
import ContractsProvider from '../contexts/contracts'

function withContexts(Component: any) {
    return (props: any) => (
        <AuthProvider>
            <ContractsProvider>
                <CartProvider>
                    <Component {...props} />
                </CartProvider>
            </ContractsProvider>
        </AuthProvider>
    )
}

export default withContexts
