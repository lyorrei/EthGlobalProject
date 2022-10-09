import React, { useEffect, useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Container, HeaderContainer } from '../checkout/style'
import { AddProductBtn, Button } from '../button'
import { AddressesContainer, AddressContainer, Check, NoAddresses, AddressItem, ButtonsContainer } from './style'
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
        margin-top: -.5rem;
    }
`

interface Props {
    address: any
    setAddress(address: any): void
    stage: number
    setStage(stage: number): void
}

const CheckoutAddress: React.FC<Props> = ({ address, setAddress, stage, setStage }) => {
    const [isVisible, setIsVisible] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const nextStage = (form: any) => {
        setAddress(form)
        setStage(1)
    }

    useEffect(() => {
        if (stage === 0) {
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
                <h2>Address</h2>
            </HeaderContainer>

            <AddressesContainer>
                <Form>
                    <Input placeholder="Street" {...register('street', { required: true })} />
                    {errors.street && <span>This field is required</span>}

                    <Input placeholder="State" {...register('state', { required: true })} />
                    {errors.state && <span>This field is required</span>}

                    <Input placeholder="City" {...register('city', { required: true })} />
                    {errors.city && <span>This field is required</span>}

                    <Input placeholder="Number" {...register('number', { required: true })} />
                    {errors.number && <span>This field is required</span>}
                </Form>
            </AddressesContainer>

            <ButtonsContainer>
                <AddProductBtn onClick={handleSubmit(nextStage)}>Next</AddProductBtn>
            </ButtonsContainer>
        </Container>
    )
}

export default CheckoutAddress
