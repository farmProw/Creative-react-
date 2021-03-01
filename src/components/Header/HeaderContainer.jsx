import s from './Header.module.css';
import Header from "./Header";
import {createAuthReducerAC} from "../../redax/auth-reducer";
import * as React from "react";
import axios from "axios";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true,
        }).then(
            response =>{
                if(response.data.resultCode === 0){
                    this.props.createAuthReducerAC(response.data.data);
                }
            }
        )
    }

    render(){

        return<Header{...this.props}/>
    }

}
let mapDispatchToProps =(state)=>{
    return{
        user:state.auth.login,
        isAuth:state.auth.isAuth,
    }
}
export default connect(mapDispatchToProps,{
    createAuthReducerAC
})(HeaderContainer)