import {act} from "@testing-library/react";

const USER_FOLLOW = "USER_FOLLOW";
const USER_UNFOLLOW = "USER_UNFOLLOW";
const USER_PAGE_CURRENT = "USER_PAGE_CURRENT";
const USER_TOTAL_COUNT = "USER_TOTAL_COUNT";
const USER_CREATOR = "USER_CREATOR";
// const USER_PAGE = "USER_PAGE";
let initialState={
    users:[],
    pageSize:5,
    pageTotal:20,
    pageCurrent:2,
}


const userRedux =(state=initialState, action)=>{
   switch (action.type){
       case USER_FOLLOW:
           return {
              ...state,
              users:state.users.map(e=>{
                 if(e.id===action.userId){
                     return{
                         ...e,
                         followed:true
                     }
                 }
                 return e
              })
           }
       case USER_UNFOLLOW:
           return {
...state,
               users: state.users.map(e=>{
                   if(e.id===action.userId){
                       return{
                           ...e,followed:false
                       }
                   }
                   return e
               })
           }
       case USER_PAGE_CURRENT:
           return {
               ...state,
               pageCurrent:action.page
           }
       case USER_TOTAL_COUNT:
           return {
               ...state,
               pageTotal:action.count
           }
       case USER_CREATOR:
           return {
               ...state,
               users:[...action.users]
           }
       default: return state
   }
}

export const userFollowAC = (userId) =>{
    return{
        type:USER_FOLLOW,
        userId
    }
}
export const userUnFollowAC = (userId) =>{
    return{
        type:USER_UNFOLLOW,
        userId
    }
}
export const userPageCurrentAC = (page) =>{
    return{
        type:USER_PAGE_CURRENT,
        page
    }
}
export const userTotalCountAC = (count) =>{
    return{
        type:USER_TOTAL_COUNT,
        count
    }
}

export const usersCreatorAC = (users)=>{
    return{
        type:USER_CREATOR,
        users
    }
}

export default userRedux;