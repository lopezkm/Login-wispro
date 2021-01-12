import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { newLogued, idLogued } from '../redux/actions/actions.js';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';


toast.configure();
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
            toast.error( "Email invalido - Debes registrarte para poder ingresar", {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined
			} );
        } else if(existUser[0].password !== logued.password) {
            toast.error( "Contraseña incorrecta", {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined
			} );
        } else {
            var actualDate = new Date().toString().split(" ", 3)[2];
            setLogued({
                ...logued,
                date: actualDate
            })
            setIdLoguedUser(existUser[0].id);
            toast.success( `Bienvenid@ ${existUser[0].firstName}`, {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined
			} );
        }
    }

    useEffect(() => {
        if(idLoguedUser) {
            dispatch(idLogued(idLoguedUser));
            dispatch(newLogued(logued));
            setTimeout(() => {
                setFlag(true);
            }, 2100); 
        }
    },[idLoguedUser]);

    return (
        <Form className="form-login" onSubmit={handleSubmit}>
            {flag ? <Redirect to="/"/> : null}
            <h2 className="form-title-login">LOGIN</h2>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-login-label">Email</Form.Label>
                <Form.Control className="form-login-control"
                    onChange={handleChange}
                    name="email" 
                    type="email" 
                    placeholder="ingresa tu email"/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label className="form-login-label">Contraseña</Form.Label>
                <Form.Control className="form-login-control"
                    onChange={handleChange}
                    name="password" 
                    type="password" 
                    placeholder="ingresa tu contraseña" />
            </Form.Group>
            <Button className="form-login-button" type="submit">
                Ingresar
            </Button>
        </Form>
    )
}