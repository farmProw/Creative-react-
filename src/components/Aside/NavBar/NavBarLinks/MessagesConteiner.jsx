import s from "./Messages.module.css"
import {NavLink} from "react-router-dom";
import React from 'react';
import {addMessageCreator, updateNewMessageText} from "../../../../redax/dialogs-redux";
import Messages from "./Messages";


const AuthorMessages=(props)=>{
    const path = "/messages/"+props.id;
    return(
        <div className={s.dialog}><NavLink to={path} activeClassName={s.active} className ={s.link}><img src={props.img} className={s.dialogs__img}/>{props.name}</NavLink></div>
    )
}
const  Sms =(props)=>{
    return(
        <div className={s.sms}>{props.sms}{props.like}</div>
    )
}

const  MessagesContainer =(props)=>{
let dialogItems = props.store.getState().dialogItems;

    let fn1 =()=>{
        props.store.dispatch(addMessageCreator());
    }
    let fn2=(text)=>{
     props.store.dispatch(updateNewMessageText(text))
    }
    return(
        <Messages
            addPost = {fn1}
            createBllMessage={fn2}
            dialogItems = {dialogItems}
        />
    )
};

export default MessagesContainer;