import s from './Content.module.css';
import Content from "./Content";
import * as React from "react";
import axios from "axios";
import {Redirect, withRouter} from "react-router";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    createProfile,
    getThunkCreateProfile, setThunkStatusCreator,
    updateThunkStatusCreator
} from "../../redax/posts-redux";
import RedirectLogin from "../hoc/RedirectLogin";
import {compose} from "redux";


class ContentContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        userId = userId ? userId : 15221;
        this.props.getThunkCreateProfile(userId);
        this.props.setThunkStatusCreator(userId);
    }

    render() {
        return <Content {...this.props}/>
    }
}

let mapStateToProps = (state) => {
// debugger
    return {
        postItems: state.postItems,
        profile: state.postItems.profile,
        postPage: state.postItems.postPage,
        status: state.postItems.status,
    }
}
// let authRedirect = RedirectLogin(ContentContainer)
export default compose(
    connect(mapStateToProps, {
        addPostActionCreator,
        createProfile,
        getThunkCreateProfile,
        setThunkStatusCreator,
        updateThunkStatusCreator,
    }),
    withRouter,
     RedirectLogin,
)(ContentContainer);
// let PostRouterComponent = withRouter(RedirectLogin(ContentContainer));
// export default connect(mapStateToProps, {
//     updateNewPostTextActionCreator,
//     addPostActionCreator,
//     createProfile,
//     getThunkCreateProfile,
// })(PostRouterComponent);