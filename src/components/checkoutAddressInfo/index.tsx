import React, { useEffect, useState } from 'react'
import { Container, Title, UserInfo } from './style'

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
}

interface Props {
    address: any
}

const CheckoutAddressInfo: React.FC<Props> = ({ address }) => {
    if (address) {
        return (
            <Container variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
                <Title>Address</Title>

                <p>
                    {address.state}, {address.city}, {address.street} {address.number}
                </p>
            </Container>
        )
    }

    return null
}

export default CheckoutAddressInfo
