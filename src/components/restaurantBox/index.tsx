import React from 'react'
import { Box, Name, Text } from './style'

interface Props {
    name: string
    rating?: number
    price?: number
    distance?: number
    imageUrl: string
}

const RestaurantBox: React.FC<Props> = (props) => {
    return (
        <Box>
            <img src={props.imageUrl} alt="_" />
            <div>
                <Name>
                    {props.name} {props.rating && `- ${props.rating}`}
                </Name>
                <Text>
                    {props.distance && `${props.distance} km - `}
                    {props.distance && <span>Delivery Free</span>}
                    {props.price && <span>$ {props.price}</span>}
                </Text>
            </div>
        </Box>
    )
}

export default RestaurantBox
