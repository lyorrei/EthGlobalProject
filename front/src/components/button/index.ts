import styled from 'styled-components'

export const Button = styled.button`
    background: none;
    border: none;

    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;

    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    transition: all .2s;

    &:hover {
        transform: translateY(-0.2rem);
    }
`
