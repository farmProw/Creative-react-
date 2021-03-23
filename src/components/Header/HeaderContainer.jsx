import s from './Header.module.css';
import Header from "./Header";
import {createAuthReducerAC, getAuthHeader, Logout} from "../../redax/auth-reducer";
import * as React from "react";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.getAuthHeader()
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
    createAuthReducerAC,getAuthHeader,Logout
})(HeaderContainer)