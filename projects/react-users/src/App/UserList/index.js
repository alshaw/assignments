import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../redux/users.js";
import SingleUser from "./SingleUser/";

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { data, loading, errMsg } = this.props;
    const userComponents = data.map((user, i) => <SingleUser key={user.name + i} {...user}></SingleUser>)
    if (loading) {
      return (
        <div>...Loading</div>
      )
    } else if (errMsg) {
        return (
          <div>{errMsg}</div>
        )
    } else {
        return (
          <div>
            {userComponents}
          </div>
       )
      }
    }
  }
  const mapStateToProps = state => {
    return state.users;
}

export default connect(mapStateToProps, { getUsers })(UserList);