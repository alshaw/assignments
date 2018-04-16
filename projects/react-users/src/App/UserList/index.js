import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, saveUser } from "../../redux/users.js";
import SingleUser from "./SingleUser/";
import "../styles.css";

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { data, loading, errMsg } = this.props;
    const userComponents = data.map((user, i) => <SingleUser key={user.name + i} user={user} saveUser={this.props.saveUser} ></SingleUser>)
    if (loading) {
      return (
        <div>Loading...</div>
      )
    } else if (errMsg) {
        return (
          <div>{errMsg}</div>
        )
    } else {
        return (
          <div className="group-card">
            {userComponents}
          </div>
       )
      }
    }
  }
  const mapStateToProps = state => {
    return state.users;
}

export default connect(mapStateToProps, { getUsers, saveUser })(UserList);