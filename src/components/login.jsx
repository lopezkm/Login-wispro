import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { newLogued, idLogued } from '../redux/actions/actions.js';
import { Redirect } from 'react-router-dom';

export default function Login() {

    const [logued, setLogued] = useState({
        email: "",
        password: "",
        date: ""
    })
    const [idLoguedUser, setIdLoguedUser] = useState("");
    const [flag, setFlag] = useState(false);
    const allRegister = useSelector(state => state.registered);
    const dispatch = useDispatch();

    function handleChange(e) {
        let name= e.target.name;
        setLogued({
            ...logued,
            [name]:e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        var existUser = allRegister.filter(user => user.email === logued.email);
        if(existUser.length === 0) {
            alert("Email invalido - Debes registrarte para poder ingresar");
            return;
        } else if(existUser[0].password !== logued.password) {
            alert("Contraseña incorrecta");
            return;
        } else {
            var actualDate = new Date().toString().split(" ", 3)[2];
            setLogued({
                ...logued,
                date: actualDate
            })
            setIdLoguedUser(existUser[0].id);
            alert(`Bienvenid@ ${existUser[0].firstName}`);
        }
    }

    useEffect(() => {
        if(idLoguedUser) {
            dispatch(idLogued(idLoguedUser));
            dispatch(newLogued(logued));
            setFlag(true);
        }
    },[idLoguedUser]);

    return (
        <Form className="form-login" onSubmit={handleSubmit}>
        {flag ? <Redirect to="/"/> : null}
            <h2 className="form-title-login">LOGIN</h2>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-login-label">Email address</Form.Label>
                <Form.Control className="form-login-control"
                    onChange={handleChange}
                    name="email" 
                    type="email" 
                    placeholder="please enter your email"/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label className="form-login-label">Password</Form.Label>
                <Form.Control className="form-login-control"
                    onChange={handleChange}
                    name="password" 
                    type="password" 
                    placeholder="please enter your password" />
            </Form.Group>
            <Button className="form-login-button" type="submit">
                Done
            </Button>
        </Form>
    )
}