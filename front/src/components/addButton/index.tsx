import React from 'react'
import { Container, Button, Text } from './style'
import plusIcon from '../../assets/plusIcon.png'

interface Props {}

const AddButton: React.FC<Props> = (props) => {
    return (
        <Container>
            <Text>Add new product</Text>
            <Button>
                <img src={plusIcon} alt="plusIcon" />
            </Button>
        </Container>
    )
}

export default AddButton
