import s from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Content =(props)=>{
    return(
        <div className={s.content}>
            <img src="https://thumbs.dreamstime.com/b/%D0%B1%D0%B5%D0%BB%D0%BE%D0%B5-beatch-%D1%81-%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D1%8B%D0%BC-%D0%BC%D0%BE%D1%80%D0%B5%D0%BC-%D0%BF%D0%BE%D0%B4-%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5%D0%BC-132236144.jpg"className={s.image}/>
            <MyPosts state = {props.state}
                     dispatch={props.dispatch}
                     sms={props.sms}/>
        </div>

       )
}

export default Content;