import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/posts-redux";




const MyPosts =(props)=>{


    let linkTextArea = React.createRef();
    let fn =()=>{
        // props.addPost()
        props.dispatch(addPostActionCreator())
    }
    let fn1=()=>{
        let text = linkTextArea.current.value;
        // props.createBllMessage(text);
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    let postRender = props.state.postItems.postPage.map(e=><Post post = {e.post} like = {e.like}/>)
    return(
        <div className="MyPosts">
            <h2>My post</h2>
            <textarea onChange={fn1} value={props.state.postItems.sms} ref={linkTextArea}></textarea>
            <button onClick={fn}>Add Post</button>
            {postRender}
        </div>
)
}
export default MyPosts;
