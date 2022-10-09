import styled from 'styled-components'

export const Button = styled.button`
    background: none;
    border: none;
    
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;

    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transform: translateY(-0.2rem);
    }
`


export const AddProductButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.primary};
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
`

export const CheckoutButton = styled(Button)`
    border-radius: 3px 2rem 3px 2rem !important;
    background-color: ${props => props.theme.colors.primary};
    padding: 1.4rem 1.6rem;
    margin: 0 auto;
`

export const AddProductBtn = styled(Button)`
    background-color: ${props => props.theme.colors.primary};
    padding: 1.2rem 1.6rem;
    display: inline-block;
    font-size: 1.6rem;
    width: 8rem;
    margin-left: auto;
    border-radius: 1rem;
`;

