import React from 'react'
import { Link } from 'react-router-dom'
import { CheckoutButton } from '../button'

import { CartButtonContainer } from './style'

const cartButtons: React.FC = () => {
    return (
        <>
            <CartButtonContainer>
                <Link to={'/checkout?method=stripe'}>
                    <CheckoutButton onClick={() => {}}>Checkout</CheckoutButton>
                </Link>
            </CartButtonContainer>
        </>
    )
}

export default cartButtons
