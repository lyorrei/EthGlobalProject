import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'
import { useContracts } from '../../contexts/contracts'
import NearbyRestaurants from '../nearbyRestaurants'
import RestaurantBox from '../restaurantBox'
import { Container, Title } from './style'

const Restaurant: React.FC = (props) => {
    const { provider } = useAuth()
    const {getRestaurants} = useContracts()
    const [restaurants, setRestaurants] = useState([
        {
            id: 1,
            name: 'Pizza Pinheiros',
            rating: 4.8,
            distance: 0.7,
            imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
        },
        {
            id: 2,
            name: 'Butanta Burguer',
            rating: 4.9,
            distance: 0.3,
            imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
        },
        {
            id: 3,
            name: 'Eu te amo Burguer',
            rating: 2.8,
            distance: 1.3,
            imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
        },
        {
            id: 4,
            name: 'Les',
            rating: 3.8,
            distance:4.3,
            imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
        },
        {
            id: 5,
            name: 'Peixe boi',
            rating: 4.2,
            distance: 7.3,
            imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
        },
    ])

    useEffect(() => {
        console.log('teste')
        getRestaurants().then((rests: any) => console.log('alou', rests))
    }, [getRestaurants])

    return (
        <Container>
            <div>
                <Title>Restaurants</Title>
                {restaurants.map((restaurant) => (
                    <Link style={{ textDecoration: 'none' }} to={'/restaurants/' + restaurant.id}>
                        <RestaurantBox {...restaurant} />
                    </Link>
                ))}
            </div>
            <NearbyRestaurants />
        </Container>
    )
}

export default Restaurant
