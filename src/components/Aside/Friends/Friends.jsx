import s from './Friends.module.css';

const  Friends =(props)=>{

    return(
        <div className={s.friends}>
            <div className={s.friends}>{props.friends}</div>
        </div>
    )
}
export default Friends;