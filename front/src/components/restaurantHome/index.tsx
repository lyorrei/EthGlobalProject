import React from 'react'
import { Container, Title } from './style'
import RestaurantProducts from '../restaurantProducts'
import AddButton from '../addButton'

interface Props {}

const RestaurantHome: React.FC<Props> = (props) => {
    return (
        <Container>
            <Title>
               Products
            </Title>
            <RestaurantProducts></RestaurantProducts>
            <AddButton></AddButton>
        </Container>
    )
}

export default RestaurantHome
