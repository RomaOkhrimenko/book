import { rootReducers } from './../reducers/root';
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store