import React from 'react';
import { useSelector } from 'react-redux';
import User from './user.jsx';

export default function Home() {

    const idLogued = useSelector(state => state.id);
    const users = useSelector(state => state.registered);
    let orderUsers = users.sort(function(a, b) {
        return (a.id - b.id);
    });

    return (
        <div className="container-home"> { idLogued ? 
            <div className="card-container-home">
                <h1 className="title-container-home">Usuarios Registrados</h1>
                {
                    orderUsers.map( (user, i) => <User key={i}
                        firstName= {user.firstName}
                        lastName= {user.lastName}
                        email= {user.email}
                        id= {user.id}
                        password= {user.password} 
                        date= {user.date}
                        />
                    )
                }
            </div> 
            : null }
        </div>
    )
}