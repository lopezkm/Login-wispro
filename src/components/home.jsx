import React from 'react';
import { useSelector } from 'react-redux';
import User from './user.jsx';

export default function Home() {

    const idLogued = useSelector(state => state.id);
    const users = useSelector(state => state.registered);

    return (
        <div className="container-home"> { idLogued ? 
            <div className="card-container-home">
                <h1 className="title-container-home">Usuarios Registrados</h1>
                {
                    users.map( (user, i) => <User key={i}
                        firstName= {user.firstName}
                        lastName= {user.lastName}
                        email= {user.email}
                        id= {user.id}
                        password= {user.password} 
                        />
                    )
                }
            </div> 
            : null }
        </div>
    )
}