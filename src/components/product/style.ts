import styled from 'styled-components'

export const Container = styled.div`
    border: 2px solid ${(props) => props.theme.colors.greyDark3};
    border-radius: 2rem;
    overflow: hidden;
    display: block;
    flex: 1;
    margin-top: 12rem;
    align-self: start;

    img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
    }

    & > div {
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }

    h4 {
        font-size: 3rem;
    }

    p {
        font-size: 2rem;
        color: green;
    }
`

export const NoProduct = styled.span`
    font-size: 2rem;
    text-align: center;
    margin-top: 4rem;
    display: block;
    border: 1px dashed ${(props) => props.theme.colors.greyDark1};
    border-radius: 1rem;
    padding: 30vh 0;
    width: 100%;
    margin-top: 12rem;
    align-self: start;
`
