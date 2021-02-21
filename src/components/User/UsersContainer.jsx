import Users from './Users'
import {connect} from "react-redux";
import {userFollowAC, userPageCurrentAC, usersCreatorAC, userTotalCountAC, userUnFollowAC} from "../../redax/user-redux";

const mapStateToProps = (state) => {
    return {
        users:state.users.users,
        pageSize: state.users.pageSize,
        pageTotal: state.users.pageTotal,
        pageCurrent:state.users.pageCurrent,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userFollowAC(id) {
            dispatch(userFollowAC(id))
        },
        userUnFollowAC(id) {
            dispatch(userUnFollowAC(id))
        },
        userPageCurrentAC(p) {
            dispatch(userPageCurrentAC(p))
        },
        userTotalCountAC(count) {
            dispatch(userTotalCountAC(count))
        },
        usersCreatorAC(users) {
            dispatch(usersCreatorAC(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);


