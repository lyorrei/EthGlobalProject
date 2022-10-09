import React, { useState, useEffect } from 'react'
import { Container, Title } from './style'
import RestaurantProducts from '../restaurantProducts'
import AddButton from '../addButton'
import RestaurantBox from '../restaurantBox'
import { useContracts } from '../../contexts/contracts'

const RestaurantHome: React.FC = () => {
    const [products, setProduct] = useState<any>([])
    const {isRestaurantOwner} = useContracts()

    useEffect(() => {
      isRestaurantOwner().catch((err: any) => console.log(err))
    }, [])

    const restaurant = {
        id: 1,
        name: 'Pizza Pinheiros',
        rating: 4.8,
        distance: 0.3,
        imageUrl: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000',
    }

    function onAddProduct(newProduct: any) {
        setProduct([...products, newProduct])
    }

    return (
        <Container>
            <div style={{ marginTop: '2rem' }}>
                <RestaurantBox {...restaurant} />
            </div>
            <Title>Products</Title>
            <RestaurantProducts products={products}></RestaurantProducts>
            <AddButton onAddProduct={onAddProduct}></AddButton>
        </Container>
    )
}

export default RestaurantHome
