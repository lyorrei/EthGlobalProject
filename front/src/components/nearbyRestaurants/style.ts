import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 4rem;
    margin-top: 2rem;

    img {
        margin: 0 auto;
        width: 70%;
        object-fit: cover;

        border-radius: 50%;
    }
`

export const Title = styled.h3`
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 3.9rem;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
`
