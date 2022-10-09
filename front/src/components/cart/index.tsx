import React from 'react'

import { Container, Title, Message, CartItemsContainer, CartBox } from './style'

import CartItem from '../cartItem'

import CartButtons from '../cartButtons'
import { AiOutlineShopping } from 'react-icons/ai'
import { ProductInterface, useCart } from '../../contexts/cart'
import OrderPrice from '../orderPrice'

interface Props {
    showCart: boolean
    setShowCart(boolean: boolean): void
}

const Cart: React.FC<Props> = ({ showCart, setShowCart }) => {
    const { cart, cartPrice } = useCart()

    let cartElements = <Message>Your cart is empty</Message>
    if (cart.length !== 0) {
        cartElements = (
            <>
                <CartItemsContainer>
                    {cart.map((product: ProductInterface) => (
                        <CartItem product={product} deletable key={product.id} />
                    ))}
                </CartItemsContainer>
                
                <OrderPrice price={cartPrice}  />
                <CartButtons />
            </>
        )
    }

    return (
        <Container showCart={showCart}>
            <CartBox onClick={() => setShowCart(!showCart)}>
                {cart.length !== 0 && <span>{cart.length}</span>}
                <AiOutlineShopping />
            </CartBox>

            <Title>Cart</Title>
            {cartElements}
        </Container>
    )
}

export default Cart
