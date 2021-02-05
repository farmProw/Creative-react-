const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let render = () => {
};
const store = {
    _state: {
        postPage: [
            {post: "I learn js", like: "15"},
            {post: "its not simpl", like: "13"},
        ],
        sms: '',
        dialogsPage: [
            {id: "1", name: "Vitalka", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
            {id: "2", name: "Tola", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
            {id: "3", name: "Kola", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
            {id: "4", name: "Mana", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
            {id: "5", name: "Vana", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
            {id: "6", name: "Tana", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
        ],
        messagePage: [
            {message: "heil comrad"},
            {message: "how are you skini"},
            {message: "i fill my on 88 percent"},
        ],
        asideBar: [
            {friends: "Max"},
            {friends: "Masha"},
            {friends: "Gala"},
        ]
    },
    getState(){
       return  this._state
    },
    dispatch(active){
        if(active.type==='ADD-POST'){
            let posts = {
                post: this._state.sms,
                like: 0,
            }
            this._state.postPage.push(posts);
            this._state.sms = '';
            render(this._state)
        }
        else if(active.type==='UPDATE-NEW-POST-TEXT'){
            this._state.sms = active.message;
            render(this._state)
        }
    },

    rendi (a) {
        render = a;
    },

};

export const addPostActionCreator = () =>{
    return {
        type: ADD_POST,
    }
}
export const updateNewPostTextActionCreator = (newText)=>
    ({type: UPDATE_NEW_POST_TEXT, text: newText})


export default store;