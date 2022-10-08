import React from 'react'
import { Container, HomeButton, Title } from './style'
import Navbar from '../navbar'
import AnimatedFood from '../animatedFood'
import { useAuth } from '../../contexts/auth'

interface Props {}

const Home: React.FC<Props> = (props) => {
    const { login } = useAuth()

    return (
        <Container>
            <Navbar />
            <Title>
                A new way to buy and sell food in <span>Your City</span>
            </Title>
            <HomeButton onClick={() => login('/customer')}>Order now!</HomeButton>
            <AnimatedFood />
        </Container>
    )
}

export default Home
