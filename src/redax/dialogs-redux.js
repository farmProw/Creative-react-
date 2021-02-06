const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsRedux =(state, active)=>{
    switch (active.type) {
        case 'ADD-MESSAGE':
            let body = state.newMessageBody

            // img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"

            state.messagePage.push({message: body, like: 1})
            state.newMessageBody = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageBody = active.message;
            return state;
        default:return state;
    }
    return state
}

export const addMessageCreator=()=>({type:ADD_MESSAGE});

export const updateNewMessageText =(newMessage)=>
    ({type:UPDATE_NEW_MESSAGE_TEXT,message:newMessage});

export default dialogsRedux;