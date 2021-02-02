import s from "./Messages.module.css"
import {NavLink} from "react-router-dom";
import React from 'react';

const AuthorMessages=(props)=>{
    const path = "/messages/"+props.id;
    return(
        <div className={s.dialog}><NavLink to={path} activeClassName={s.active} className ={s.link}><img src={props.img} className={s.dialogs__img}/>{props.name}</NavLink></div>
    )
}
const  Sms =(props)=>{
    return(
        <div className={s.sms}>{props.sms}</div>
    )
}

const  Messages =(props)=>{

    let dialogsPage = props.state.dialogsPage.map(e=><AuthorMessages id = {e.id} name = {e.name} img = {e.img}/>);
    let messagePage = props.state.messagePage.map(e=><Sms sms = {e.message}/>);
    let linker = React.createRef();
    let clicker =()=>{
        let text = linker.current.value;
    }
    return(
        <div className={s.messages}>
            <div className = {s.dialogs}>
                {dialogsPage}
            </div>
            <div className={s.sms__box}>
                {messagePage}
            </div>
            <textarea ref = {linker} ></textarea>
            <button onClick={clicker}></button>
        </div>
    )
};

export default Messages;