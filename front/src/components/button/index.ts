import styled, { css } from 'styled-components'

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
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1.4rem 1.6rem;
    margin: 0 auto;
`

export const AddProductBtn = styled(Button)<any>`
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1.2rem 1.6rem;
    font-size: 1.6rem;
    width: 12rem;
    border-radius: 1rem;
    float: right;

   &:disabled,
   &[disabled] {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
    }

    ${(props) => props.grey && `background-color: ${props.theme.colors.greyDark3};`}
`

export const InlineButton = styled(Button)`
    display: inline-block;
    padding: 1.5rem 2.5rem !important;
    border-radius: 1rem;
    margin-top: 0;
`
