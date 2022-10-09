import React, { useEffect, useState } from 'react'

import { Container } from '../checkout/style'
import { AddProductBtn, InlineButton } from '../button'
import { ButtonsContainer, Text, Title } from './style'
import { ClipLoader } from 'react-spinners'
import Alert, { Types } from '../alert'
import { BoxContainerVariants } from '../checkout'
import { useCart } from '../../contexts/cart'

interface Props {
    stage: number
    setStage(stage: number): void
    address: any
}

const CheckoutConfirm: React.FC<Props> = ({ setStage, stage, address }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { cart, cartPrice } = useCart()

    useEffect(() => {
        if (stage === 2) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [stage])

    return (
        <Container
            variants={BoxContainerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            exit="hidden">
            <Title>Confirm</Title>
            {error && (
                <div style={{ margin: '2rem 0' }}>
                    <Alert type={Types.red}>{error}</Alert>
                </div>
            )}
            {!loading ? (
                <>
                    <Text>Please confirm the address and the products.</Text>

                    <ButtonsContainer>
                        <div>
                            <AddProductBtn grey onClick={() => setStage(0)}>Back</AddProductBtn>
                        </div>

                        <AddProductBtn onClick={() => {}}>Confirm</AddProductBtn>
                    </ButtonsContainer>
                </>
            ) : (
                <div style={{ margin: '4rem auto', width: '120px' }}>
                    <ClipLoader color={'#00c2a8'} size={120} />
                </div>
            )}
        </Container>
    )
}

export default CheckoutConfirm
