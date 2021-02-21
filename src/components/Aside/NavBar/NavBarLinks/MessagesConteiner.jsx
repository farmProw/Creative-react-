import React from 'react';
import {addMessageCreator, updateNewMessageText} from "../../../../redax/dialogs-redux";
import Messages from "./Messages";
import StoreContext from "../../../../Store-context";
import {connect} from "react-redux";


// const MessagesContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let dialogItems = store.getState().dialogItems;
//
//                     let fn1 = () => {
//                         store.dispatch(addMessageCreator());
//                     }
//                     let fn2 = (text) => {
//                         store.dispatch(updateNewMessageText(text))
//                     }
//                     return (
//                         <Messages
//                             addPost={fn1}
//                             createBllMessage={fn2}
//                             dialogItems={dialogItems}
//                         />
//                     )
//
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        dialogItems: state.dialogItems
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        fn1: () => {
            dispatch(addMessageCreator())
        },
        fn2:(text)=>{
            dispatch(updateNewMessageText(text))
        }
    }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;