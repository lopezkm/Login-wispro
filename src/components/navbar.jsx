import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="home-link-navbar" href="/">Home</Navbar.Brand>
            <h3 className="title-navbar">Wispro Frontend Assesstment</h3>
            <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-end">
                <Nav>
                    <Nav.Link className="login-link-navbar" href="/login">Login</Nav.Link>
                    <Nav.Link className="register-link-navbar" href="/register">Registrate</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}