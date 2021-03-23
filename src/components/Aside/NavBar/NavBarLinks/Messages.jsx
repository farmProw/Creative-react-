import s from "./Messages.module.css"
import {NavLink} from "react-router-dom";
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../Progres/ControlForms";
import {Require,Maxlength} from "../../../validator/validator";

const maxLength30 = Maxlength(30)
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
    let clicker =(value)=>{

        props.addMessageCreator(value.formDialogs);
    }
    return(
        <div className={s.messages}>
            <div className = {s.dialogs}>
                {dialogsPage}
            </div>
            <div className={s.sms__box}>
                {messagePage}
            </div>
            <ReduxFormDialogs onSubmit={clicker}/>
        </div>
    )
};
const dialogsForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name={'formDialogs'} component={Textarea} validate={[Require,maxLength30]} placeholder={'write'}/>
            <button>add</button>
        </form>
    )
}
const ReduxFormDialogs = reduxForm({
    form:"formDialogs"
})(dialogsForm)

export default Messages;