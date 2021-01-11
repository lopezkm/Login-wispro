const ADD_IMAGE = "ADD_IMAGE";
const ADD_IMAGE_CLIENT = "ADD_IMAGE_CLIENT";

const initialState = {
  imageStamp:"",
  imageClient:""
}

function Reducer(state = initialState, action) {
  if(action.type === ADD_IMAGE) {
    return {
      ...state,
      imageStamp: action.payload
    }
  }
  if(action.type === ADD_IMAGE_CLIENT) {
    return {
      ...state,
      imageClient: action.payload
    }
  }
  return state;
} 
export default Reducer;