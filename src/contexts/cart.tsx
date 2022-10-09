import React, { createContext, useState, useContext, useEffect } from 'react'

export interface ProductInterface {
    id: string
    name: string
    imageUrl: string
    price: number
}

const CartContext = createContext<any>(null)

export const checkIfProductIsInCart = (cart: ProductInterface[], product: ProductInterface) => {
    const isInCart = cart.some((productFromCart) => productFromCart.id === product.id)
    return isInCart
}

export default function CartProvider({ children }: any) {
    const [cart, setCart] = useState<any>([
        {
            id: 1,
            name: 'Pizza Pinheiros',
            price: 20,
            imageUrl: '/pizza2.png',
        },
       
    ])
    const [cartPrice, setCartPrice] = useState(0) // Valor do carrinho com desconto

    useEffect(() => {
        let price = 0

        for (let i = 0; i < cart.length; i++) {
            price += cart[i].price
        }
        setCartPrice(price)
    }, [cart])

    const addProduct = (product: ProductInterface) => {
        const cartCopy = [...cart]

        if (!checkIfProductIsInCart(cartCopy, product)) {
            cartCopy.push(product)
            setCart(cartCopy)
        }
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                cartPrice,
                addProduct,
            }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext<any>(CartContext)
    if (!context) throw new Error('useCart must be used within a CartProvider')
    const { cart, setCart, cartPrice, addProduct } = context
    return {
        cart,
        setCart,
        cartPrice,
        addProduct,
    }
}
