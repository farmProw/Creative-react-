import {combineReducers, createStore} from "redux";
import postRedux from "./posts-redux";
import dialogsRedux from "./dialogs-redux";
import asideRedux from "./asidebar-redux";

let combine = combineReducers({
    postItems:postRedux,
    dialogItems:dialogsRedux,
    asideBar:asideRedux,
})

let store = createStore(combine);

export default store;