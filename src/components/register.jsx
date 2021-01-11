import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function Register() {

    const stamp = useSelector(state => state.imageStamp);

    const dispatch = useDispatch();

    return (
        <Form>

        </Form>
    )
}