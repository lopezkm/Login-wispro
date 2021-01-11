import { ADD_IMAGE, ADD_IMAGE_CLIENT } from '../actionsNames.js';

export function addImage(payload) {
    return { 
        type: ADD_IMAGE, 
        payload 
    };
};
  
export function addImageClient(payload) {
    return { 
        type: ADD_IMAGE_CLIENT, 
        payload 
    };
};