import React from 'react'
import { Container, Item, Logo } from './style'
import { ReactComponent as ReactLogo } from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'

interface Props {}

const Navbar: React.FC<Props> = (props) => {
    const { provider, login, logout } = useAuth()

    return (
        <Container>
            <Logo>
                <Link to={'/'}>
                    <ReactLogo />
                    Snack Fair
                </Link>
            </Logo>
            {provider ? (
                <Item>
                    <button onClick={logout}>Logout</button>
                </Item>
            ) : (
                <>
                    <Item>
                        <button onClick={() => login('/restaurant')}>Restaurant</button>
                    </Item>
                    <Item>
                        <button onClick={() => login('/restaurant')}>Delivery Man</button>
                    </Item>
                    <Item>
                        <Link to={'/about'}>About us</Link>
                    </Item>
                </>
            )}
        </Container>
    )
}

export default Navbar
