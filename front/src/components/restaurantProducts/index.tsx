import React from "react";
import {
  ProductsContainer,
  ProductBx,
  ProductImg,
  ProductInfos,
} from "./style";
import pizzaImg from "../../assets/pizza-pepperoni.png";
import { id } from "ethers/lib/utils";

interface Props {
  products: any;
}

const RestaurantProducts: React.FC<Props> = (props) => {
  const listProducts = props.products.map((product:any, index:any) => {
    return (
        <ProductBx key={product.id}>
          <ProductImg>
            <img src={pizzaImg} alt="Pizza" />
          </ProductImg>
          <ProductInfos>
            <h1>{props.products[index].name}</h1>
            <h3>{props.products[index].description}</h3>
            <p>{props.products[index].price}</p>
          </ProductInfos>
        </ProductBx>
    );
  });

  return <ProductsContainer>{listProducts}</ProductsContainer>;
};

export default RestaurantProducts;
