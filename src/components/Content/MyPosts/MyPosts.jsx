import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from 'react';



const MyPosts = (props) => {

    let btnClick = () => {
        props.fn1()
    }
    let textAreaChange = (e) => {
        let text = e.target.value;
        props.fn2(text);

    }
    let postRender = props.postItems.postPage.map(e => <Post post={e.post} like={e.like}/>)
    return (
        <div className="MyPosts">
            <h2>My post</h2>
            <textarea onChange={textAreaChange} value={props.postItems.sms} ></textarea>
            <button onClick={btnClick}>Add Post</button>
            {postRender}
        </div>
    )
}
export default MyPosts;
