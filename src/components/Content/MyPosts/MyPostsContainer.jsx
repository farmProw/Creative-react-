import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/posts-redux";
import MyPosts from "./MyPosts";
import StoreContext from "../../../Store-context";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let postItems = store.getState().postItems;
//
//                 let fn1 = () => {
//                     store.dispatch(addPostActionCreator())
//                 };
//
//                 let fn2 = (text) => {
//                     store.dispatch(updateNewPostTextActionCreator(text))
//                 };
//                 return (
//                     <MyPosts
//                         addPost={fn1}
//                         createBllMessage={fn2}
//                         postItems={postItems}
//                     />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//
//     )
// }
let mapStateToProps = (state) => {

    return {
        postItems: state.postItems,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        fn1:()=> {
            dispatch(addPostActionCreator())
        },
        fn2:(text)=> {
            dispatch(updateNewPostTextActionCreator(text))
        },
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
