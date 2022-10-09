import React from "react";
import {
  ProductsContainer,
  ProductBx,
  ProductImg,
  ProductInfos,
} from "./style";
import pizzaImg from "../../assets/pizza-pepperoni.png";

interface Props {
  products: any;
}

const RestaurantProducts: React.FC<Props> = (props) => {
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

    return (
        <ProductsContainer>
            {products.map((product) => (
                <ProductBx>
                    <ProductImg>
                        <img src={product.imageUrl} alt="Pizza" />
                    </ProductImg>
                    <ProductInfos>
                        <h1>{product.name}</h1>
                        <p>$ {product.price.toFixed(2)}</p>
                    </ProductInfos>
                </ProductBx>
            ))}
        </ProductsContainer>
    )
}

export default RestaurantProducts
