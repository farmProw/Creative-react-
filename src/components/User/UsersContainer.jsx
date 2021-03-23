import * as React from "react";
import {connect} from "react-redux";
import User from "./Users";
import {
    Follow,
    Unfollow,
    getUsers,
    userBtnLoad,
    userPageCurrent,
    usersCreator,
    usersProgres,
    userTotalCount,
} from "../../redax/user-redux";
import Progres from "../Progres/Progres";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.startPagination = this.startPagination.bind(this)
    }

    componentDidMount() {

        this.props.getUsers(this.props.pageCurrent, this.props.pageSize)

    }

    startPagination(page) {
        this.props.getUsers(page, this.props.pageSize)

    }

    render() {
        return this.props.inProgres ? <Progres/> : <User {...this.props} startPagination={this.startPagination}/>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        pageTotal: state.users.pageTotal,
        pageCurrent: state.users.pageCurrent,
        inProgres: state.users.inProgres,
        UsersId: state.users.UsersId
    }

}

export default connect(mapStateToProps, {
    Follow,
    Unfollow,
    userPageCurrent,
    userTotalCount,
    usersCreator,
    usersProgres,
    userBtnLoad,
    getUsers,
})(UsersContainer)
