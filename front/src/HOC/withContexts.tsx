import React from 'react'
import AuthProvider from '../contexts/auth'
import CartProvider from '../contexts/cart'

function withContexts(Component: any) {
    return (props: any) => (
        <AuthProvider>
            <CartProvider>
                <Component {...props} />
            </CartProvider>
        </AuthProvider>
    )
}

export default withContexts
