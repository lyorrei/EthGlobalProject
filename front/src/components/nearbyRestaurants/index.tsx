import React from 'react'
import { Container, Title } from './style'

interface Props {}

const NearbyRestaurants: React.FC<Props> = (props) => {
    return (
        <Container>
            <Title>Nearby Restaurants</Title>
            <img src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg' alt='Map'/>
        </Container>
    )
}

export default NearbyRestaurants
