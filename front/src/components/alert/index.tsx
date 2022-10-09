import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import { Container } from './style'

export enum Types {
    red = 'red',
    green = 'green',
}

const Alert: React.FC<any> = ({ type, close, ...props }: any) => {
    return (
        <Container close={close ? true : false} type={type}>
            <p>{props.children}</p>
            {close && (
                <span onClick={close}>
                    <AiOutlineClose />
                </span>
            )}
        </Container>
    )
}

export default Alert
