import {statusAPI, usersAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const CREATE_PROFILE = 'CREATE_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
    postPage: [
        {post: "I learn js", like: "15"},
        {post: "its not simpl", like: "13"},
    ],
    sms: '',
    profile: null,
    status: '',
}

const postRedux = (state = initialState, active) => {

    switch (active.type) {
        case 'ADD-POST':
            debugger
            return {
                ...state,
                postPage: [...state.postPage, {post: active.payload, like: 88}],
            }
        case CREATE_PROFILE:
            return {
                ...state,
                profile: active.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: active.status,
            }
        case UPDATE_STATUS:
            debugger
            return {
                ...state,
                status: active.status,
            }
        default:
            return state;
    }
    return state
}

export const addPostActionCreator = (payload) => ({type: ADD_POST, payload});
export const createProfile = (profile) => ({type: CREATE_PROFILE, profile,});
export const setStatus = (status) => ({type: SET_STATUS, status,});
export const updateStatus = (status) => ({type: UPDATE_STATUS, status,});

export const getThunkCreateProfile = (userId) => dispatch => {
    usersAPI.getContent(userId).then(data => {
        dispatch(createProfile(data))
    })
};
export const setThunkStatusCreator = (userId) => {
    return dispatch => {
        statusAPI.setStatus(userId).then(
            response => dispatch(setStatus(response.data))
        )
    }
};
export const updateThunkStatusCreator = (status) => {
    return dispatch => {
        statusAPI.updateStatus(status).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(updateStatus(status))
                }
            }
        )
    }
};
// export const updateNewPostTextActionCreator = (newText) =>
//     ({type: UPDATE_NEW_POST_TEXT, message: newText});

export default postRedux