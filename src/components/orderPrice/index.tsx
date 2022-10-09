import React from 'react'
import {  OrderPriceContainer } from './style'

interface Props {
    price: number
    marginBottom?: boolean
    next?: boolean
    primaryColor? : boolean
}

const OrderPrice: React.FC<Props> = ({ primaryColor, price, marginBottom,  next }) => {
    return (
        <OrderPriceContainer next={next} primaryColor={primaryColor} marginBottom={marginBottom}>
            <span>Total:</span>
            <div>
                <span>$ {price.toFixed(2)}</span>
            </div>
        </OrderPriceContainer>
    )
}

export default OrderPrice
