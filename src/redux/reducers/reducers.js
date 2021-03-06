import { Switch } from 'react-router-dom';
import Logued from '../../mockData/logued.js';
import Registered from '../../mockData/registered.js';
import { NEW_REGISTERED, NEW_LOGUED, ID_LOGUED, EDIT_USER, DELETE_USER } from '../actionsNames.js';


const initialState = {
  registered: Registered,
  registeredInfo: Registered,
  logued: Logued,
  id:""
}

function Reducer(state = initialState, action) {
  switch ( action.type )
	{
		case NEW_REGISTERED:
		
			return {
				...state,
				registered: [ ...state.registered, action.payload ],
				registeredInfo: [ ...state.registeredInfo, action.payload ],
			};
		
		case NEW_LOGUED:
			
			return {
				...state,
				logued: [ ...state.logued, action.payload ]
			}
		
		case ID_LOGUED:
			
			return {
				...state,
				id: action.payload
			}

		case EDIT_USER:
			
			return {
				...state,
				registered: [ ...state.registered.filter(user => user.id !== action.payload.id), action.payload ]
			}
    
		case DELETE_USER:
		
			return {
				...state,
				registered: state.registered.filter(user => user.id !== action.payload)
			}
       
		default:
			
			return state;
	}
} 
export default Reducer;