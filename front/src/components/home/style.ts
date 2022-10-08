import styled from 'styled-components'
import { Button } from '../button'

export const Container = styled.div``

export const Title = styled.h1`
    position: absolute;
    width: 450px;
    height: 319px;
    left: 100px;
    top: 157px;

    font-weight: 700;
    font-size: 6rem;
    line-height: 7.8rem;

    color: #2c2c2c;

    span {
        color: ${(props) => props.theme.colors.primary};
    }   
`

export const HomeButton = styled(Button)`
    position: absolute;
    width: 239px;
    height: 52px;
    left: 120px;
    top: 599px;

    background: ${(props) => props.theme.colors.primary};
    border: 1px solid #efae6e;
    border-radius: 1.5rem;

    
`
