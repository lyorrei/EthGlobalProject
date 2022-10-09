import React from 'react'

import { FaTrash } from 'react-icons/fa'

import { Container, ImageContainer, Img, Name, Price, PriceContainer } from './style'
import { ProductInterface, useCart } from '../../contexts/cart'
import { Link } from 'react-router-dom'

interface Props {
    product: ProductInterface
    deletable?: boolean
}

const CartItem: React.FC<Props> = ({ product, deletable }) => {
    const { cart, setCart } = useCart()

    const filterProduct = () => {
        const cartCopy = [...cart]
        const filteredCart = cartCopy.filter((filteredProduct) => filteredProduct.id !== product.id)
        setCart(filteredCart)
    }

    return (
        <Container>
            <Link to={'/shop/product/' + product.id}>
                <ImageContainer>
                    <Img src={product.imageUrl} alt="Product Image" />
                </ImageContainer>
            </Link>
            <Link to={'/shop/product/' + product.id}>
                <Name>{product.name}</Name>
            </Link>
            <PriceContainer>
                <Price>$ {product.price.toFixed(2)}</Price>
            </PriceContainer>
            {deletable && <FaTrash onClick={filterProduct} />}
        </Container>
    )
}

export default CartItem
