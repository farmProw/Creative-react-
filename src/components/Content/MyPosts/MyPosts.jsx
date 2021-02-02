import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from 'react';

const MyPosts =(props)=>{
    let linkTextArea = React.createRef();
    let fn =()=>{
       let text = linkTextArea.current.value;
        props.addPost()
    }
    let fn1=()=>{
        let text = linkTextArea.current.value;
        props.createBllMessage(text);
    }
    let postRender = props.state.postPage.map(e=><Post post = {e.post} like = {e.like}/>)
    return(

        <div className="MyPosts">
            <h2>My post</h2>
            <textarea onChange={fn1} value={props.sms} ref={linkTextArea}></textarea>
            <button onClick={fn}>Add Post</button>
            {postRender}
        </div>
)
}
export default MyPosts;
