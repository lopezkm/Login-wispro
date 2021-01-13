import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editUser, deleteUser } from '../redux/actions/actions.js';

export default function User({firstName, lastName, email, id, password, date}) {

    const [idUser, setIdUser] = useState();
    const [show, setShow] = useState(false);
    const [userEdit, setUserEdit] = useState(null);
    const dispatch = useDispatch();

    function handleChange(e) {
        let name= e.target.name;
        setUserEdit({
            ...userEdit,
            [name]:e.target.value,
        });
    }

    function handleEdit() {
        dispatch(editUser(userEdit));
        setShow(false);
    }

    function delUser(id) {
        setIdUser(id);
    };

    useEffect(() => {
        setUserEdit({
            id,
            date,
            firstName,
            lastName,
            email,
            password
        });
    }, [id, firstName, lastName, email, password, date])

    useEffect(() => {
        if(idUser) {
            dispatch(deleteUser(idUser));
        }
    }, [idUser])

    return (
        <Card className="card-container-user">
            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="modal-edit-header">
                    <Modal.Title>Editando datos de {userEdit && userEdit.firstName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="form-register-label">Nombre</Form.Label>
                        <Form.Control className="form-register-control"
                            onChange={handleChange}
                            name="firstName" 
                            type="text" 
                            placeholder={userEdit && userEdit.firstName}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="form-register-label">Apellido</Form.Label>
                        <Form.Control className="form-register-control"
                            onChange={handleChange}
                            name="lastName" 
                            type="text" 
                            placeholder={userEdit && userEdit.lastName}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="form-register-label">Email</Form.Label>
                        <Form.Control className="form-register-control"
                            onChange={handleChange}
                            name="email" 
                            type="email" 
                            placeholder={userEdit && userEdit.email}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="form-register-label">Contraseña</Form.Label>
                        <Form.Control className="form-register-control"
                            onChange={handleChange}
                            name="password" 
                            type="password" 
                            placeholder={userEdit && userEdit.password} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="modal-edit-footer">
                    <Button className="modal-button-close-user" onClick={() => setShow(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={handleEdit} className="modal-button-edit-user">Hecho</Button>
                </Modal.Footer>
            </Modal>
            <Card.Body className="card-body-user">
                <div className="d-flex justify-content-around">
                    <Card.Text className="card-text-title-user">
                        {userEdit && userEdit.firstName}, {userEdit && userEdit.lastName}
                    </Card.Text>
                    <Card.Text className="card-text-email-user">
                        {userEdit && userEdit.email}
                    </Card.Text>
                </div>
                <div>
                    <Button onClick={() => setShow(true)}  className="card-button-edit-user">Editar</Button>
                    <Button onClick={() => delUser(userEdit && userEdit.id)}  className="card-button-delete-user">Eliminar</Button>
                </div>
            </Card.Body>
        </Card>
    )
}