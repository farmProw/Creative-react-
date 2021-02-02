import s from './Post.module.css';

const Post =(props)=>{
    return(
        <div className={s.post}>
        <img className={s.image} src="https://facegen.com/images/main_face.jpg"/>
        <span>{props.post}</span>
        <span>{props.like}</span>
        </div>
    )
}
export default Post;