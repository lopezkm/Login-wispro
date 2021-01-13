import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { idLogued } from '../redux/actions/actions.js';

export default function NavBar() {

    const idLogin = useSelector(state => state.id);
    const users = useSelector(state => state.registered);
    const dispatch = useDispatch();

    let userLogued = users.filter(user => user.id === idLogin)[0];
    let logout = "";

    function logOut() {
        dispatch(idLogued(logout));
    }

    function resetLocalStorage() {
        localStorage.removeItem('state');
        window.location.reload();
    }

    return (
        <Navbar className="container-wrapper-navbar" collapseOnSelect expand="lg" bg="dark">
            <Navbar.Brand className="home-link-navbar" href="/">Home</Navbar.Brand>
            <Nav>
            {idLogin ? <Nav.Link className="graphics-link-navbar" href="/stadistics">Estadísticas</Nav.Link> : null}
            </Nav>
            {idLogin ? <Button onClick={resetLocalStorage} className="reset-button-navbar">RESET</Button> : null}
            <h3 className={idLogin ? "title-navbar":"inicial-title-navbar"}>Wispro Frontend Assesstment</h3>
            <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-end">
                <Nav>
                    {idLogin ? <Nav.Link className="login-link-navbar">{userLogued.firstName}</Nav.Link> 
                    : <Nav.Link className="login-link-navbar" href="/login">Login</Nav.Link>}
                    {idLogin ? <Nav.Link className="register-link-navbar" onClick={logOut}>Logout</Nav.Link> 
                    : <Nav.Link className="register-link-navbar" href="/register">Registrate</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}