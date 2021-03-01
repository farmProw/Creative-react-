import s from './Content.module.css';
import Content from "./Content";
import * as React from "react";
import axios from "axios";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {addPostActionCreator, createProfile, updateNewPostTextActionCreator} from "../../redax/posts-redux";


class ContentContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        userId = userId?userId:2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(
            response => this.props.createProfile(response.data)
        )
    }

    render() {
        return <Content {...this.props}/>
    }
}

let mapStateToProps = (state) => {
// debugger
    return {
        postItems:state.postItems,
        profile:state.postItems.profile,
        postPage:state.postItems.postPage,
    }
}
let PostRouterComponent = withRouter(ContentContainer);
export default connect(mapStateToProps, {
    updateNewPostTextActionCreator,
    addPostActionCreator,
    createProfile,
})(PostRouterComponent);