import styled from 'styled-components'

export const Container = styled.div`
    padding: 4rem 20rem;
    display: flex;
    grid-gap: 2rem;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    flex: 0 0 50%;
`

export const Title = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary};
`
