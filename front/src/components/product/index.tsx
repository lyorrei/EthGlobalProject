import React from 'react'
import { ProductInterface, useCart } from '../../contexts/cart'
import { AddProductBtn } from '../button'
import { Container, NoProduct } from './style'

interface Props {
    product: ProductInterface
}

const Product: React.FC<Props> = ({ product }) => {
    const { addProduct } = useCart()

    if (product) {
        return (
            <Container>
                <img src={product.imageUrl} alt="Product" />
                <div>
                    <h4>{product.name}</h4>
                    <p>$ {product.price.toFixed(2)}</p>
                    <AddProductBtn onClick={() => addProduct(product)}>Add</AddProductBtn>
                </div>
            </Container>
        )
    }

    return <NoProduct>Select a product</NoProduct>
}

export default Product
