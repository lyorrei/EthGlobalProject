import React from 'react'
import { useForm } from 'react-hook-form'
import { AddProductButton } from '../button'
import { Input } from '../input'
import { Container, Alert } from './style'

type Inputs = {
    name: string
    price: string
}

const NewProductForm: React.FC = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    return (
        <Container>
            <form
                onSubmit={handleSubmit((data) => {
                    alert(JSON.stringify(data))
                })}>
                <label htmlFor="productName">Product Name</label>
                <Input id="productName" {...register('name', { required: true })} />
                {errors.name && <Alert>This field is required</Alert>}

                <label htmlFor="productPrice">Product Price in $</label>
                <Input id="productPrice" {...register('price', { required: true })} type="number" />
                {errors.price && <Alert>This field is required</Alert>}

                <AddProductButton type="submit">Create</AddProductButton>
            </form>
        </Container>
    )
}

export default NewProductForm
