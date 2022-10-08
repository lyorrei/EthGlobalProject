import styled from 'styled-components'

export const Container = styled.div`
    height: 6rem;
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
    display: flex;
    align-items: center;
    margin-right: auto;

    svg {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
    }

    font-weight: 700;
    font-size: 2.6rem;
    line-height: 3.2rem;

    color: ${(props) => props.theme.colors.white};
`

export const Item = styled.div`
    transition: all 0.4s;
    display: flex;
    align-items: center;
    margin: 1rem 0;
    margin-right: 6rem;
    padding: 0 1.6rem;

    border-radius: ${(props) => props.theme.sizes.borderRadius};

     a {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.4rem;
        text-decoration: none;
        background: none;
        color: ${(props) => props.theme.colors.white};
        transition: all .4s;
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.white};
    }

    &:hover a {
        color: ${(props) => props.theme.colors.greyDark1};
    }
`
