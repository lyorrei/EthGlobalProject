import React from "react";
import { ProductsContainer, ProductBx, ProductImg, ProductInfos } from "./style";
import pizzaImg from "../../assets/pizza-pepperoni.png";

interface Props {}

const RestaurantProducts: React.FC<Props> = (props) => {
  
  
  return (
    <ProductsContainer>
      <ProductBx>
        <ProductImg>
          <img
            src={pizzaImg}
            alt="Pizza"
          />
        </ProductImg>
        <ProductInfos>
            <h1>Pizza</h1>
            <h3>Enjoy the flavors of pepperoni & curd, chicken.</h3>
            <p>$ 20.00</p>
        </ProductInfos>
      </ProductBx>
    </ProductsContainer>
  );
};

export default RestaurantProducts;
