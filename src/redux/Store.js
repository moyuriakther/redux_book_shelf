import { combineReducers, createStore, applyMiddleware } from "redux";
import bookReducer from "./Reducer/BookReducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
    books : bookReducer
})
const middleWire = applyMiddleware(thunk)
export const store = createStore(rootReducer, composeWithDevTools(middleWire)) 