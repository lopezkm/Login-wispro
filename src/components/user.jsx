import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editUser, deleteUser } from '../redux/actions/actions.js';

export default function User({firstName, lastName, email, id, password}) {

    const [idUser, setIdUser] = useState();
    const dispatch = useDispatch();

    function delUser(id) {
        setIdUser(id);
    }
    useEffect(() => {
        if(idUser) {
            dispatch(deleteUser(idUser));
        }
    }, [idUser])

    return (
        <Card className="card-container-user">
            <Card.Body className="card-body-user">
                <div className="d-flex justify-content-around">
                    <Card.Text className="card-text-title-user">
                        {firstName}, {lastName}
                    </Card.Text>
                    <Card.Text className="card-text-email-user">
                        {email}
                    </Card.Text>
                </div>
                <div>
                    <Button className="card-button-edit-user">Editar</Button>
                    <Button onClick={() => {delUser(id)}}  className="card-button-delete-user">Eliminar</Button>
                </div>
            </Card.Body>
        </Card>
    )
}