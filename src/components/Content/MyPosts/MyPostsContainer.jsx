import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/posts-redux";
import MyPosts from "./MyPosts";




const MyPostsContainer =(props)=>{
    let postItems = props.store.getState().postItems;

    let fn1 =()=>{
        props.store.dispatch(addPostActionCreator())
    };

    let fn2=(text)=>{
        props.store.dispatch(updateNewPostTextActionCreator(text))
    };

    return<MyPosts
        addPost={fn1}
        createBllMessage={fn2}
        postItems={postItems}
    />
}
export default MyPostsContainer;
