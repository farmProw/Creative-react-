import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH = 'SET_AUTH';

let initialState={
    id: null,
    email: null,
    login: null,
    isAuth:false,
};

const authRedux = (state=initialState,active)=>{

    switch (active.type) {
        case SET_AUTH:
            return {
                ...state,
                ...active.data,
            }
        default:return state
    }
}

export const createAuthReducerAC = (id,email,login,isAuth) =>({type:SET_AUTH,data:{id,email,login,isAuth}});

export const getAuthHeader =()=>{
    return dispatch=>{
        authAPI.me().then(
            response =>{
                if(response.data.resultCode === 0){
                    let {id,email,login} = response.data.data;
                    dispatch(createAuthReducerAC(id,email,login,true));
                }
            }
        )
    }
}
export const Loginn =(email,password,rememberMe)=>{
    return dispatch=>{
        authAPI.login(email,password,rememberMe).then(
            response =>{
                if(response.data.resultCode === 0){
                    console.log(response.data)
                    dispatch(getAuthHeader());
                }else {
                   let action =  stopSubmit()
                }
            }
        )
    }
}
export const Logout =()=>{
    return dispatch=>{
        authAPI.logout().then(
            response =>{
                if(response.data.resultCode === 0){
                    dispatch(createAuthReducerAC(null,null,null,false));
                }
            }
        )
    }
}

export default authRedux