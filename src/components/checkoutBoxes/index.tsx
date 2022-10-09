import React, { useState } from 'react'
import CheckoutAddress from '../checkoutAddress'
import CheckoutAddressInfo from '../checkoutAddressInfo'
import CheckoutConfirm from '../checkoutConfirm'
import CheckoutStage from '../checkoutStage'
import CheckoutStake from '../checkoutStake'

const CheckoutBoxes: React.FC = () => {
    const [stage, setStage] = useState(0)
    const [address, setAddress] = useState(null)

    return (
        <>
            <CheckoutStage stage={stage} />

            <CheckoutAddress address={address} setAddress={setAddress} stage={stage} setStage={setStage} />
            <CheckoutStake stage={stage} setStage={setStage} />
            <CheckoutConfirm address={address} stage={stage} setStage={setStage} />


            {address && stage !== 0 && <CheckoutAddressInfo address={address} />}
        </>
    )
}

export default CheckoutBoxes
