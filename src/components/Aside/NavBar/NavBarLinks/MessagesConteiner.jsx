import React from 'react';
import {addMessageCreator} from "../../../../redax/dialogs-redux";
import Messages from "./Messages";
import StoreContext from "../../../../Store-context";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import RedirectLogin from "../../../hoc/RedirectLogin";
import {compose} from "redux";


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


class MessagesContainer extends React.Component{
    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return(<Messages {...this.props}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        dialogItems: state.dialogItems,
        isAuth: state.auth.isAuth,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         fn1: () => {
//             dispatch(addMessageCreator())
//         },
//         fn2:(text)=>{
//             dispatch(updateNewMessageText(text))
//         }
//     }
// }
export default compose(connect(mapStateToProps, {addMessageCreator,}),
RedirectLogin
)(MessagesContainer)


// export default connect(mapStateToProps, {
//     addMessageCreator,
// })(RedirectLogin(MessagesContainer))

