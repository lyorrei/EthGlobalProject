import React from 'react'
import { Container, HomeButton, Subtitle, Title } from './style'
import Navbar from '../navbar'
import AnimatedFood from '../animatedFood'
import { useAuth } from '../../contexts/auth'

const Home: React.FC = () => {
    const { login } = useAuth()

    return (
        <Container>
            <Navbar />
            <Title>
                A new way to buy and sell food in <span>Your City</span>
            </Title>
            <Subtitle>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                previewing layouts and visual mockups.
            </Subtitle>
            <HomeButton onClick={() => login('/restaurants')}>Order now!</HomeButton>
            <AnimatedFood />
        </Container>
    )
}

export default Home
