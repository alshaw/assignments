import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, saveUser } from "../../redux/campers.js";
import SingleCamper from "./SingleCamper/";
import "../styles.css";

class CamperList extends Component {
  componentDidMount() {
    this.props.getCampers();
  }
  render() {
    const { data, loading, errMsg } = this.props;
    const camperComponents = data.map((camper, i) => (
      <SingleCamper
        key={camper.name + i}
        camper={camper}
        saveCamper={this.props.saveCamper}
      />
    ));
    if (loading) {
      return <div>Loading...</div>;
    } else if (errMsg) {
      return <div>{errMsg}</div>;
    } else {
      return <div className="group-card">{camperComponents}</div>;
    }
  }
}
const mapStateToProps = state => {
  return state.users;
};

export default connect(mapStateToProps, { getCampers, saveCamper })(CamperList);
