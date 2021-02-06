import dialogsRedux from "./dialogs-redux";
import postRedux from "./posts-redux";

const store = {
    _state: {
        postItems: {
            postPage: [
                {post: "I learn js", like: "15"},
                {post: "its not simpl", like: "13"},
            ],
            sms: '',
        },
        dialogItems: {
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
        },

        asideBar: [
            {friends: "Max"},
            {friends: "Masha"},
            {friends: "Gala"},
        ],



    },
    _render(){},
    getState() {
        return this._state
    },
    dispatch(active) {

        this._state.dialogItems = dialogsRedux(this._state.dialogItems, active)
        this._state.postItems = postRedux(this._state.postItems, active)
        this._render()

    },

    rendi(a) {
        this._render = a;
    },

};

console.log(store)

export default store;