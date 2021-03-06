import React, { Component } from 'react';
//import {fetchUser} from '../actions';
import {connect} from 'react-redux';
class UserHeader extends Component{

    render(){
        const {user} = this.props;
        if(!user){
            return null;
        }
        return (
            <div className="header">{user.name}</div>
        );
    };
}
const mapStateToProp=(state,ownProps)=>{
    return {user:state.users.find(user=>user.id ===ownProps.userId)}
}

export default connect(mapStateToProp)(UserHeader);