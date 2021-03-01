import axios from "axios";

const instanse = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        'API-KEY':'339e32f9-ee3c-4d2d-9485-f937f3b7ba54'
    }
});

export const usersAPI = {
    getUsers(pageCurrent,pageSize){
       return instanse.get(`users?page=${pageCurrent}&count=${pageSize}`).then(
           response=>response.data
       )
    },
    unFollow(id){
        return instanse.delete(`follow/${id}`).then(
            response=>response.data
        )
    },
    follow(id){
        return instanse.post(`follow/${id}`).then(
            response=>response.data
        )
    }
}