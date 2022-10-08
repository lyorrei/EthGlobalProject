import styled from 'styled-components'
import { Button } from '../button'

export const Container = styled.div``

export const Title = styled.h1`
    position: absolute;
    width: 550px;
    height: 319px;
    left: 100px;
    top: 180px;

    font-weight: 700;
    font-size: 6rem;
    line-height: 7.8rem;

    color: #2c2c2c;

    span {
        color: ${(props) => props.theme.colors.primary};
    }
`

export const Subtitle = styled.h3`
    font-size: 1.4rem;
    position: absolute;
    width: 420px;
    height: 200px;
    left: 100px;
    top: 450px;
    font-weight: 500;
`

export const HomeButton = styled(Button)`
    position: absolute;
    width: 239px;
    height: 52px;
    left: 100px;
    top: 550px;

    background: ${(props) => props.theme.colors.primary};
    border: 1px solid #efae6e;
    border-radius: 1.5rem;
`
