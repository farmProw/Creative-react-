import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let btnClick = () => {
        props.addPostActionCreator()
    }
    let textAreaChange = (e) => {
        let text = e.target.value;
        props.updateNewPostTextActionCreator(text);

    }
    let postRender = props.postPage.map(e => <Post {...props} post={e.post} like={e.like}/>)
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
