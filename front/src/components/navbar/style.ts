import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 0 2rem;

    position: absolute;

    height: 7.2rem;
    left: 5vh;
    right: 5vh;
    top: 5vh;

    background: #ff9935;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
`

export const Logo = styled.div`
    margin-right: auto;
    transition: all .4s;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
    }

    svg {
        width: 7.2rem;
        height: 7.2rem;
        object-fit: cover;
    }

    font-weight: 700;
    font-size: 2.6rem;
    line-height: 3.2rem;

    &:hover {
        transform: scale(1.05);
    }
`

export const Item = styled.div`
    transition: all 0.4s;
    display: flex;
    align-items: center;
    margin: 1rem 0;
    margin-right: 4rem;
    padding: 0 1.6rem;

    border-radius: ${(props) => props.theme.sizes.borderRadius};

    a,
    button {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.4rem;
        text-decoration: none;
        background: none;
        color: ${(props) => props.theme.colors.white};
        transition: all 0.4s;
        outline: none;
        border: none;
        cursor: pointer;
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.white};
    }

    &:hover a,
    &:hover button {
        color: ${(props) => props.theme.colors.greyDark1};
    }
`
