import Logued from '../../mockData/logued.js';
import Registered from '../../mockData/registered.js';
import { ADD_IMAGE, ADD_IMAGE_CLIENT } from '../actionsNames.js';


const initialState = {
  registered:[
    {
      firstName: 'Pedro',
      lastName: 'Carrazco',
      email: 'pedrito@mail.com',
      password: '11111',
      date:''
    },
  ],
  logued:[]
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