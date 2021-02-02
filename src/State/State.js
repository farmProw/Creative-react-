let render =()=>{};
const state = {
    postPage:[
        {post:"I learn js", like:"15"},
        {post:"its not simpl", like:"13"},
    ],
    sms : '',
    dialogsPage: [
        {id: "1", name: "Vitalka", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
        {id: "2", name: "Tola", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
        {id: "3", name: "Kola", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
        {id: "4", name: "Mana", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
        {id: "5", name: "Vana", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
        {id: "6", name: "Tana", img: "https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"},
    ],
    messagePage:[
        {message:"heil comrad"},
        {message:"how are you skini"},
        {message:"i fill my on 88 percent"},
    ],
    asideBar:[
        {friends:"Max"},
        {friends:"Masha"},
        {friends:"Gala"},
    ]
};
export let createBllMessage=(message)=>{
    state.sms = message;
    render(state)
}
export let addPost=()=>{
    let posts = {
        post: state.sms,
        like:0,
    }
    state.postPage.push(posts);
    state.sms = '';
    render(state)
}

export let rendi=(a)=>{
render = a;
}
export default state;