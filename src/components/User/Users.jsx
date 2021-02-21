import React from 'react'
import axios from "axios";
import s from './Users.module.css'
import userIcon from './../../assets/images/user.png'
class Users extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    // }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
            response => {
                console.log(response)
                this.props.usersCreatorAC(response.data.items);
                this.props.userTotalCountAC(response.data.totalCount);
            }
        )
    }
    changePage(p){
        this.props.userPageCurrentAC(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(
            response => {
                console.log(response)
                this.props.usersCreatorAC(response.data.items);
                this.props.userTotalCountAC(response.data.totalCount);
            }
        )
    }
    render() {
        let number =Math.ceil(this.props.pageTotal/this.props.pageSize);
        let arr=[];
        for(let i = 1; i<=number; i++){
            arr.push(i);

        }
        return (
            <div className={s.user__wrapper}>
                <div className={s.wrapper__pagination}>
                    {arr.map(p=>{
                        // this.props.userPageCurrentAC(p)
                        return(
                            <span className={p===this.props.pageCurrent&& s.pagination__number} onClick={()=>this.changePage(p)}>{p}</span>
                        )
                    })}
                </div>
                {this.props.users.map(u => {
                    return (
                        <div>
                            <div className={s.img__wrapper}>
                                <img src={u.photos.small?u.photos.small:userIcon} alt=""/>
                            </div>
                                <div>
                                    {u.followed ?
                                        <button onClick={() => this.props.userUnFollowAC(u.id)}>UNFOLLOW</button> :
                                        <button onClick={() => this.props.userFollowAC(u.id)}>FOLLOW</button>
                                    }
                                </div>
                            <div>{u.name}</div>
                                <div>s</div>
                                <div>city</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Users;

