import React, { useEffect } from 'react'

import { PageContainer, Container, EmptyCart } from './style'

import { useCart } from '../../contexts/cart'
import CheckoutBoxes from '../checkoutBoxes'

const pageContainerVariant = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.2,
        },
    },
}

export const BoxContainerVariants = {
    hidden: {
        opacity: 0,
        y: '-120%',
    },
    visible: {
        opacity: 1,
        y: '0%',
    },
}

const Checkout = () => {
    const { cart } = useCart()

    let pageContent = (
        <Container>
            <EmptyCart>Your cart is empty</EmptyCart>
        </Container>
    )
    if (cart.length > 0) {
        pageContent = <CheckoutBoxes  />
    }

    return (
        <PageContainer variants={pageContainerVariant} initial="hidden" animate="visible" >
            {pageContent}
        </PageContainer>
    )
}

export default Checkout
