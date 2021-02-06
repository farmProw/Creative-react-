import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redax/State";
import {rendi} from './redax/State'
export const render =()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch = {store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
render()
store.rendi(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
