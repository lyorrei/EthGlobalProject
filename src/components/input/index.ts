import styled from 'styled-components'

export const Input = styled.input`
    padding: 1.2rem 1.5rem;
    background: none;
    border-radius: ${props => props.theme.sizes.borderRadius};
    color: ${props => props.theme.colors.greyDark1};
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary};
    
`