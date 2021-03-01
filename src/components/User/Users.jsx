import userIcon from '../../assets/images/user.png';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

const User = (props) => {
    // debugger
    let number = Math.ceil(props.pageTotal / props.pageSize);
    let arr = [];
    for (let i = 1; i <= number; i++) arr.push(i);

    return (<div>
        {arr.map(p => <span className={props.pageCurrent === p && s.numer__box} onClick={()=>props.startPagination(p)}>{p}</span>)}
        {props.users.map(u => {
            return (
                <div>
                    <div className={s.img__wrapper}>
                        <NavLink to={'/profile/'+u.id}><img src={u.photos.small||userIcon} alt=""/></NavLink>
                        </div>
                    {u.followed?
                        <button disabled={props.UsersId.some(e=>e==u.id)} onClick={()=>{
                            props.userBtnLoad(true,u.id);
                            usersAPI.unFollow(u.id).then(data =>{
                                if(data.resultCode==0){
                                    props.userUnFollow(u.id)
                                }
                                    props.userBtnLoad(false,u.id);
                            }
                            )
                            }}>UNFOLLOW</button>:

                        <button disabled={props.UsersId.some(e=>e==u.id)} onClick={()=>{
                            props.userBtnLoad(true,u.id);
                            usersAPI.follow(u.id).then(data=>{
                                if(data.resultCode==0){
                                    props.userFollow(u.id)
                                }
                                props.userBtnLoad(false,u.id);
                            })

                        }}>FOLLOW</button>
                    }
                    <div>{u.name}</div>
                </div>)
        })}
    </div>)


}

export default User;