import {Field, reduxForm} from "redux-form";
import {Loginn} from "../../redax/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import * as React from "react";

const LoginForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit }>
            <div><Field type="text" name={"email"} component={'input'} placeholder="login"/></div>
            <div><Field type="text" name={"password"} component={'input'} placeholder="password"/></div>
            <div><Field type="checkbox" name={"rememberMe"} component={'input'} />i read and agree</div>
            <div><button>LOGIN</button></div>
        </form>
    )
}
const LoginFormContact = reduxForm({
    form: 'login'
})(LoginForm);

const Login =(props)=>{

    let onSubmit =({email,password,rememberMe})=>{
       props.Loginn(email,password,rememberMe)
    }
    if(props.isAuth) return <Redirect to="/profile"/>
    return(
        <div>
            <h1>LOGIN</h1>
            <LoginFormContact onSubmit={onSubmit}/>
        </div>
    )
}
let mapStateToProps =(state)=>{
    return{
        isAuth:state.auth.isAuth,
    }
}
export default connect(mapStateToProps,{Loginn})(Login)