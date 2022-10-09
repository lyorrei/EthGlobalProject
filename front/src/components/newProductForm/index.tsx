import React from "react";
import { useForm } from "react-hook-form";
import { AddProductButton } from "../button";
import { Input } from "../input";
import { Container, Alert } from "./style";

type Inputs = {
  name: string;
  price: string;
  description: string;
};

interface Props {
  onAddProduct(product:any):void
  closeModal():void
}

const NewProductForm: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <Container>
      <form
        onSubmit={handleSubmit((data) => {
          props.onAddProduct(data)
          props.closeModal()
        })}
      >
        <label htmlFor="productName">Product Name</label>
        <Input id="productName" {...register("name", { required: true })} />
        {errors.name && <Alert>This field is required</Alert>}

        <label htmlFor="productDescription">Product Description</label>
        <Input id="productDescription" {...register("description", { required: true })} />
        {errors.description && <Alert>This field is required</Alert>}

        <label htmlFor="productPrice">Product Price</label>
        <Input id="productPrice" {...register("price", { required: true })} type="number" />
        {errors.price && <Alert>This field is required</Alert>}

        <AddProductButton type="submit" >Create</AddProductButton>
      </form>
    </Container>
  );
};

export default NewProductForm;
