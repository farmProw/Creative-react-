import {combineReducers, createStore} from "redux";
import postRedux from "./posts-redux";
import dialogsRedux from "./dialogs-redux";
import asideRedux from "./asidebar-redux";
import userRedux from "./user-redux";

let combine = combineReducers({
    postItems:postRedux,
    dialogItems:dialogsRedux,
    asideBar:asideRedux,
    users:userRedux,
})

let store = createStore(combine);

export default store;