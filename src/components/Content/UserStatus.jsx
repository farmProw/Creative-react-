import * as React from "react";

class UserStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    };
    fn1 = () => {
        this.setState({
            editMode: true,
        })
    }
    fn2=()=>{
        this.setState({
            editMode: false,
        })
        this.props.updateThunkStatusCreator(this.state.status)
    }
    fn3=(e)=>{
        this.setState({
            status:e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.status!==this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div>{
                !this.state.editMode && <div><span onDoubleClick={this.fn1}>{this.props.status ||'....'}</span></div>
            }
                {
                    this.state.editMode && <div><input onFocus={true} onBlur={this.fn2} onChange={this.fn3} type="text"/></div>
                }


            </div>
        )
    }
}

export default UserStatus