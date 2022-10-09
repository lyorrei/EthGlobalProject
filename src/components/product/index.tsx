import React, { useEffect, useState } from 'react'
import { checkIfProductIsInCart, ProductInterface, useCart } from '../../contexts/cart'
import { AddProductBtn } from '../button'
import { Container, NoProduct } from './style'

interface Props {
    product: ProductInterface
}

const Product: React.FC<Props> = ({ product }) => {
    const { addProduct, cart } = useCart()
    const [isActive, setIsActive] = useState(true)

    useEffect(() => {
        if (cart && product) {
            if (checkIfProductIsInCart(cart, product)) {
                setIsActive(false)
            } else {
                setIsActive(true)

            }
        }
    }, [cart, product])

    if (product) {
        return (
            <Container>
                <img src={product.imageUrl} alt="Product" />
                <div>
                    <h4>{product.name}</h4>
                    <p>$ {product.price.toFixed(2)}</p>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <AddProductBtn onClick={() => addProduct(product)} disabled={!isActive}>
                            Add
                        </AddProductBtn>
                    </div>
                </div>
            </Container>
        )
    }

    return <NoProduct>Select a product</NoProduct>
}

export default Product
