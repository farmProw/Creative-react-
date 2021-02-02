import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import state, {addPost, createBllMessage} from "./State/State";
import {rendi} from './State/State'
export const render =()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost = {addPost} sms = {state.sms} createBllMessage = {createBllMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
render()
rendi(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
