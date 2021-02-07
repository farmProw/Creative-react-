import s from "./Messages.module.css"
import {NavLink} from "react-router-dom";
import React from 'react';
import {addMessageCreator, updateNewMessageText} from "../../../../redax/dialogs-redux";


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

const  Messages =(props)=>{
    let dialogsPage = props.dialogItems.dialogsPage.map(e=><AuthorMessages id = {e.id} name = {e.name} img = {e.img}/>);
    let messagePage = props.dialogItems.messagePage.map(e=><Sms sms = {e.message} like={e.like}/>);
    let clicker =()=>{
        props.addPost();
    }
    let onChange=(e)=>{
     let text = e.target.value;
     props.createBllMessage(text)
    }
    return(
        <div className={s.messages}>
            <div className = {s.dialogs}>
                {dialogsPage}
            </div>
            <div className={s.sms__box}>
                {messagePage}
            </div>
            <textarea  onChange={onChange} value={props.dialogItems.newMessageBody}></textarea>
            <button onClick={clicker}>add</button>
        </div>
    )
};

export default Messages;