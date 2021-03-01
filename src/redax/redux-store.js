import {combineReducers, createStore} from "redux";
import postRedux from "./posts-redux";
import dialogsRedux from "./dialogs-redux";
import asideRedux from "./asidebar-redux";
import userRedux from "./user-redux";
import authRedux from "./auth-reducer";

let combine = combineReducers({
    postItems:postRedux,
    dialogItems:dialogsRedux,
    asideBar:asideRedux,
    users:userRedux,
    auth:authRedux,
})

let store = createStore(combine);
window.store=store;
export default store;