import * as React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";

let mapStateToProps =(state)=>{
    return{
        isAuth:state.auth.isAuth
    }
}

const RedirectLogin=(Component)=>{
    class innerFunctionRedirect extends React.Component{
        render() {
            if(!this.props.isAuth) return<Redirect to="/login"/>
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToProps)(innerFunctionRedirect);

}

export default RedirectLogin