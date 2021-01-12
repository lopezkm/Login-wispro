import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, deleteUser } from '../redux/actions/actions.js';

export default function User({firstName, lastName, email, id}) {

    const dispatch = useDispatch();

    return (
        <Card className="card-container-user">
            <Card.Body className="card-body-user">
                <Card.Text className="d-flex">
                    <h3 className="card-text-title-user">{firstName}, {lastName}</h3>
                    <span className="card-text-email-user">{email}</span>
                </Card.Text>
                <div>
                    <Button className="card-button-edit-user">Editar</Button>
                    <Button className="card-button-delete-user">Eliminar</Button>
                </div>
            </Card.Body>
        </Card>
    )
}