import React from 'react'
import { Container, Title } from './style'
import Request from '../requests'

interface Props {}

const Deliveryman: React.FC<Props> = (props) => {
    return (
        <Container>
            <Title>
               Orders
            </Title>
            <Request />
        </Container>
    )
}

export default Deliveryman
