const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsPage: [
        {id: "1", name: "Vitalka", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
        {id: "2", name: "Tola", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
        {id: "3", name: "Kola", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
        {id: "4", name: "Mana", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
        {id: "5", name: "Vana", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
        {id: "6", name: "Tana", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
    ],
    messagePage: [
        {message: "heil comrad", like: 1},
        {message: "how are you skini", like: 1},
        {message: "i fill my on 88 percent", like: 1},
    ],
    newMessageBody: '',
}

const dialogsRedux =(state = initialState, active)=>{

    switch (active.type) {
        case 'ADD-MESSAGE':
           return{
               ...state,
               messagePage: [...state.messagePage,{message: state.newMessageBody, like: 1}],
               newMessageBody:'',
           }
        case 'UPDATE-NEW-MESSAGE-TEXT':
          return {
              ...state,
              newMessageBody: active.message,
          }
        default:return state;
    }
    return state
}

export const addMessageCreator=()=>({type:ADD_MESSAGE});

export const updateNewMessageText =(newMessage)=>
    ({type:UPDATE_NEW_MESSAGE_TEXT,message:newMessage});

export default dialogsRedux;