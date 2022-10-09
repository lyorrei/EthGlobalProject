import React, { useState } from 'react'
import withCart from '../../HOC/withCart'
import Product from '../product'
import RestaurantBox from '../restaurantBox'
import { Container, Left, Title } from './style'

const RestaurantInformation: React.FC = (props) => {
    const products = [
        {
            id: 1,
            name: 'Pizza Pinheiros',
            price: 20,
            imageUrl: '/pizza2.png',
        },
        {
            id: 2,
            name: 'Pizza Pinheiros 5',
            price: 12,
            imageUrl: '/pizza.png',
        },
        {
            id: 3,
            name: 'Pizza Pinheiros 2 ',
            price: 14,
            imageUrl: '/pizza.png',
        },
        {
            id: 4,
            name: 'Pizza Pinheiros 3',
            price: 45,
            imageUrl: '/pizza2.png',
        },
        {
            id: 5,
            name: 'Pizza Pinheiros 3',
            price: 45,
            imageUrl: '/pizza2.png',
        },
        {
            id: 6,
            name: 'Pizza Pinheiros 3',
            price: 45,
            imageUrl: '/pizza2.png',
        },
    ]

    const restaurant = {
        id: 1,
        name: 'Pizza Pinheiros',
        rating: 4.8,
        distance: 0.3,
        imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
    }

    const [selectedProduct, setSelectedProduct] = useState<any>(null)

    return (
        <Container>
            <Left>
                <div style={{transform: 'scale(1.2)', transformOrigin: '0 0', marginBottom: '2rem'}} >
                    <RestaurantBox {...restaurant} />
                </div>

                <Title>Products</Title>
                {products.map((product) => (
                    <div style={{ cursor: 'pointer' }} onClick={() => setSelectedProduct(product)}>
                        <RestaurantBox {...product} />
                    </div>
                ))}
            </Left>
            <Product product={selectedProduct} />
        </Container>
    )
}

export default withCart(RestaurantInformation)
