import { createStore, applyMiddleware, compose } from 'redux';
import {loadState, saveState} from '../functionsLocalStorage.js';
import Reducer from '../reducers/reducers.js';
import thunk from 'redux-thunk';

const inicialData = loadState()

const store = createStore(
    Reducer,
    inicialData,
    compose (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk))
); 

store.subscribe( function () {
    saveState(store.getState())
})

export default store;