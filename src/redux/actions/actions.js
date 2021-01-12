import { NEW_REGISTERED, NEW_LOGUED, ID_LOGUED, EDIT_USER, DELETE_USER } from '../actionsNames.js';

export function newRegistered(payload) {
    return { 
        type: NEW_REGISTERED, 
        payload 
    };
};
  
export function newLogued(payload) {
    return { 
        type: NEW_LOGUED, 
        payload 
    };
};

export function idLogued(payload) {
    return { 
        type: ID_LOGUED,
        payload  
    };
};

export function editUser(payload) {
    return { 
        type: EDIT_USER, 
        payload 
    };
};

export function deleteUser(payload) {
    return { 
        type: DELETE_USER,  
        payload
    };
};

