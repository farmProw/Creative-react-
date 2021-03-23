import {applyMiddleware, combineReducers, createStore} from "redux";
import postRedux from "./posts-redux";
import dialogsRedux from "./dialogs-redux";
import asideRedux from "./asidebar-redux";
import userRedux from "./user-redux";
import authRedux from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';



let combine = combineReducers({
    postItems:postRedux,
    dialogItems:dialogsRedux,
    asideBar:asideRedux,
    users:userRedux,
    auth:authRedux,
    form:formReducer,
})

let store = createStore(combine,applyMiddleware(thunkMiddleware));
window.store=store;
export default store;