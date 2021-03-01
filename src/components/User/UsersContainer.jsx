import * as React from "react";
import {connect} from "react-redux";
import User from "./Users";
import {
    userBtnLoad,
    userFollow,
    userPageCurrent,
    usersCreator,
    usersProgres,
    userTotalCount,
    userUnFollow
} from "../../redax/user-redux";
import axios from "axios";
import Progres from "../Progres/Progres";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.startPagination = this.startPagination.bind(this)
    }
    componentDidMount() {

        this.props.usersProgres(true);
      usersAPI.getUsers(this.props.pageCurrent,this.props.pageSize).then(data => {
                this.props.usersProgres(false);
                this.props.userTotalCount(data.totalCount);
                this.props.usersCreator(data.items)
            }
        )
    }
    startPagination(page){

        this.props.usersProgres(true);
         let current = this.props.pageCurrent;
        this.props.userPageCurrent(page);
        usersAPI.getUsers(page,this.props.pageSize).then(data=>{
                this.props.usersProgres(false);
                this.props.usersCreator(data.items);
            }
        )
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
        UsersId:state.users.UsersId
    }

}

export default connect(mapStateToProps, {
    userFollow,
    userUnFollow,
    userPageCurrent,
    userTotalCount,
    usersCreator,
    usersProgres,
    userBtnLoad,
})(UsersContainer)
