import styled from 'styled-components'

export const Container = styled.div`

`

export const Title = styled.h1`
    display: flex;
    justify-content: center;

    font-weight: 700;
    font-size: 5rem;
    line-height: 7.8rem;

    color: #2c2c2c;

    span {
        color: ${(props) => props.theme.colors.primary};
    }
`

