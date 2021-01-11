import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {

    const stamp = useSelector(state => state.imageStamp);
    const stampClient = useSelector(state => state.imageClient);

    const dispatch = useDispatch();

    return (
        <Form>

        </Form>
    )
}