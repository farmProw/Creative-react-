const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const CREATE_PROFILE = 'CREATE_PROFILE';

let initialState = {
    postPage: [
        {post: "I learn js", like: "15"},
        {post: "its not simpl", like: "13"},
    ],
    sms: '',
    profile:null,
}

const postRedux =(state = initialState,active)=>{

    switch (active.type) {
        case 'ADD-POST':
       return {
           ...state,
           postPage:[...state.postPage,{post:state.sms,like:88}],
           sms:"",
       }
        case 'UPDATE-NEW-POST-TEXT':
            return{
                ...state,
                sms:active.message,
            }
        case CREATE_PROFILE:
            return {
                ...state,
                profile: active.profile,
            }
        default:return state;
    }
    return state
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const createProfile = (profile) => ({type: CREATE_PROFILE, profile,});

export const updateNewPostTextActionCreator = (newText) =>
    ({type: UPDATE_NEW_POST_TEXT, message: newText});

export default postRedux