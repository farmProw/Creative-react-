import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Maxlength,Require} from "../../validator/validator";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Progres/ControlForms";


const maxLength50 = Maxlength(50);
const MyPosts = (props) => {
    let btnClick = (value) => {
        debugger
        props.addPostActionCreator(value.postForm)
    }

    let postRender = props.postPage.map(e => <Post {...props} post={e.post} like={e.like}/>)
    return (
        <div className="MyPosts">
            <h2>My post</h2>
            <ReduxFormPost onSubmit = {btnClick}/>
            {postRender}
        </div>
    )
}
const postForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[Require,maxLength50]} name={'postForm'}  placeholder={'write post'}/>
            <button>send post</button>
        </form>
    )
}
const ReduxFormPost = reduxForm({
    form:"postForm",
})(postForm)

export default MyPosts;
