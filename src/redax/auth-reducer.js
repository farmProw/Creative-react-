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
                isAuth: true,
            }
        default:return state
    }
}

export const createAuthReducerAC = ({id,email,login}) =>({type:SET_AUTH,data:{id,email,login}});
export default authRedux