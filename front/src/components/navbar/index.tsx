import React from 'react'
import { Container, Item, Logo } from './style'
import {ReactComponent as ReactLogo} from '../../assets/logo.svg';
import { Link } from 'react-router-dom';


interface Props {}

const Navbar: React.FC<Props> = (props) => {
    return (
        <Container>
            <Logo>
                {/* <img src="" alt="" /> */}
                <ReactLogo />
                Snack Fair
            </Logo>
            <Item><Link to={"/"}>Restaurant</Link></Item>
            <Item><Link to={"/"}>Delivery Man</Link></Item>
            <Item><Link to={"/"}>About us</Link></Item>
        </Container>
    )
}

export default Navbar
