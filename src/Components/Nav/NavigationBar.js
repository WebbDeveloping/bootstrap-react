import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import Styled from 'styled-components';

const Styles = Styled.div`
.navbar{
    background-color: #222;
}
.navbar-brand, .navbar-nav .nav-link{
    color: #bbb;

    &:hover{
        color: white;
    }
}
`;

export const NavigationBar = () =>(
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href="/">WebbDeveloping</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-naavbaar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)