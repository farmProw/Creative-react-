const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postPage: [
        {post: "I learn js", like: "15"},
        {post: "its not simpl", like: "13"},
    ],
    sms: '',
}

const postRedux =(state = initialState,active)=>{
    switch (active.type) {
        case 'ADD-POST':
            let posts = {
                post: state.sms,
                like: 0,
            }
            state.postPage.push(posts);
            state.sms = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.sms = active.message;
            return state;
        default:return state;
    }
    return state
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (newText) =>
    ({type: UPDATE_NEW_POST_TEXT, message: newText});

export default postRedux