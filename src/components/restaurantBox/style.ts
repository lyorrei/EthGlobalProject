import styled from 'styled-components'

export const Box = styled.div`
    display: flex;
    grid-gap: 2rem;

    img {
        width: 9rem;
        height: 9rem;
        object-fit: cover;
        border-radius: 1.8rem;
    }

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const Name = styled.p`
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;

    margin-bottom: .5rem;
    color: #4f4f4f;
`

export const Text = styled.p`
    font-size: 1.6rem;
    line-height: 2rem;
    color: #8d8d8d;
    font-weight: 600;

    span {
        color: green;
    }
`
