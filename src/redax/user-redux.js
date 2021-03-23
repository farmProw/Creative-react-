import {usersAPI} from "../api/api";

const USER_FOLLOW = "USER_FOLLOW";
const USER_UNFOLLOW = "USER_UNFOLLOW";
const USER_PAGE_CURRENT = "USER_PAGE_CURRENT";
const USER_TOTAL_COUNT = "USER_TOTAL_COUNT";
const USER_CREATOR = "USER_CREATOR";
const USER_PRELLODER = "USER_PRELLODER";
const USER_ARRAY_ID = 'USER_ARRAY_ID';
let initialState = {
    users: [],
    pageSize: 5,
    pageTotal: 20,
    pageCurrent: 2,
    inProgres: true,
    UsersId: [],
};


const userRedux = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case USER_FOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {
                            ...e,
                            followed: true,
                        }
                    }
                    return e
                })
            }
        case USER_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {
                            ...e,
                            followed: false,
                        }
                    }
                    return e
                })
            }
        case USER_PAGE_CURRENT:
            return {
                ...state,
                pageCurrent: action.page
            }
        case USER_TOTAL_COUNT:
            return {
                ...state,
                pageTotal: action.count
            }
        case USER_CREATOR:
            return {
                ...state,
                users: [...action.users]
            }
        case USER_PRELLODER:
            return {
                ...state,
                inProgres: action.progresLine,
            }
        case USER_ARRAY_ID:
            return {
                ...state,
                UsersId: action.inProgres ?
                    [...state.UsersId, action.userId] :
                    [state.UsersId.filter(e => e != action.userId)]
            }
        default:
            return state
    }
}

export const userFollow = (userId) => {
    return {
        type: USER_FOLLOW,
        userId
    }
}
export const userUnFollow = (userId) => {
    return {
        type: USER_UNFOLLOW,
        userId
    }
}
export const userPageCurrent = (page) => {
    return {
        type: USER_PAGE_CURRENT,
        page
    }
}
export const userTotalCount = (count) => {
    return {
        type: USER_TOTAL_COUNT,
        count
    }
}

export const usersCreator = (users) => {
    return {
        type: USER_CREATOR,
        users
    }
}
export const usersProgres = (progresLine) => {
    return {
        type: USER_PRELLODER,
        progresLine,
    }
}
export const userBtnLoad = (inProgres, userId) => {
    return {
        type: USER_ARRAY_ID,
        inProgres,
        userId,
    }
}

export const getUsers = (pageCurrent, pageSize) => {
   return (dispatch) => {
        dispatch(usersProgres(true));
        usersAPI.getUsers(pageCurrent, pageSize).then(data => {
            dispatch(usersProgres(false));
            dispatch(userTotalCount(data.totalCount));
            dispatch(usersCreator(data.items))
            dispatch(userPageCurrent(pageCurrent))
        })
    }
}


export const Follow = (id) => {
       return (dispatch) => {
           dispatch(userBtnLoad(true,id));
           usersAPI.follow(id).then(data =>{
               if(data.resultCode==0){
                   dispatch(userFollow(id))
               }
               dispatch(userBtnLoad(false,id))
           })
    }
}


export const Unfollow = (id) => {
   return (dispatch) => {
       dispatch(userBtnLoad(true,id));
       usersAPI.unFollow(id).then(data =>{
           if(data.resultCode==0){
               dispatch(userUnFollow(id))
           }
          dispatch(userBtnLoad(false,id))
       })
    }
};




export default userRedux;