import React from 'react'
import { Container, HomeButton, Title } from './style'
import Navbar from '../navbar'
import AnimatedFood from '../animatedFood'

interface Props {}

const Home: React.FC<Props> = (props) => {
    return (
        <Container>
            <Navbar />
            <Title>
                A new way to buy and to sell food in <span>Your City</span>
            </Title>
            <HomeButton>Order now!</HomeButton>
            <AnimatedFood />
        </Container>
    )
}

export default Home
