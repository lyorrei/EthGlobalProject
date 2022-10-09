import React, { useState } from "react";
import { Container, Title } from "./style";
import RestaurantProducts from "../restaurantProducts";
import AddButton from "../addButton";

interface Props {}

const RestaurantHome: React.FC<Props> = (props) => {
  const [products, setProduct] = useState<any>([]);

  function onAddProduct(newProduct: any) {
    setProduct([...products, newProduct]);
  }

  return (
    <Container>
      <Title>Products</Title>
      <RestaurantProducts products={products}></RestaurantProducts>
      <AddButton onAddProduct={onAddProduct}></AddButton>
    </Container>
  );
};

export default RestaurantHome;
