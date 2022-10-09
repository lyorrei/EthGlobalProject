import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'
import { getRestaurants } from '../../utils/ethereumInteractions'
import NearbyRestaurants from '../nearbyRestaurants'
import RestaurantBox from '../restaurantBox'
import { Container, Title } from './style'

const Restaurant: React.FC = (props) => {
    const { provider } = useAuth()
    const [restaurants, setRestaurants] = useState([
        {
            id: 1,
            name: 'Pizza Pinheiros',
            rating: 4.8,
            distance: 0.3,
            imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
        },
        {
            id: 1,
            name: 'Pizza Pinheiros',
            rating: 4.8,
            distance: 0.3,
            imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
        },
        {
            id: 1,
            name: 'Pizza Pinheiros',
            rating: 4.8,
            distance: 0.3,
            imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
        },
        {
            id: 1,
            name: 'Pizza Pinheiros',
            rating: 4.8,
            distance: 0.3,
            imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
        },
        {
            id: 1,
            name: 'Pizza Pinheiros',
            rating: 4.8,
            distance: 0.3,
            imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
        },
    ])

    useEffect(() => {
        getRestaurants(provider).then((rests) => setRestaurants(rests))
    }, [provider])

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
