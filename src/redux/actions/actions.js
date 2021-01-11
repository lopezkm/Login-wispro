const ADD_IMAGE = "ADD_IMAGE";
const ADD_IMAGE_CLIENT = "ADD_IMAGE_CLIENT";

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