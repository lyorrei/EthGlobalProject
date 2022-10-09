import React, { useEffect, useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Container, HeaderContainer } from '../checkout/style'
import { AddProductBtn, Button } from '../button'
import { AddressesContainer, AddressContainer, Check, NoAddresses, AddressItem, ButtonsContainer, Text } from './style'
import { BoxContainerVariants } from '../checkout'
import { Input } from '../input'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    grid-gap: 1.6rem;

    span {
        color: red;
        margin-top: -0.5rem;
    }
`

interface Props {
    stage: number
    setStage(stage: number): void
}

const CheckoutStake: React.FC<Props> = ({ stage, setStage }) => {
    const [isVisible, setIsVisible] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const nextStage = (form: any) => {
        setStage(2)
    }

    useEffect(() => {
        if (stage === 1) {
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
            <HeaderContainer>
                <h2>Stake</h2>
            </HeaderContainer>

            <Text>
                You need to stake to be able to order your food. This is just a assurance for your delivery. Dont worry!
                As soon as your food gets to the delivery location you can take it back.
            </Text>

            <AddressesContainer>
                <Form>
                    <Input placeholder="Stake Value" {...register('stake', { required: true })} />
                    {errors.stake && <span>This field is required</span>}
                </Form>
            </AddressesContainer>

            <ButtonsContainer>
                <AddProductBtn onClick={() => setStage(0)} grey>
                    Back
                </AddProductBtn>

                <AddProductBtn onClick={handleSubmit(nextStage)}>Next</AddProductBtn>
            </ButtonsContainer>
        </Container>
    )
}

export default CheckoutStake
