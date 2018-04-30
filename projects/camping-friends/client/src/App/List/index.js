import React from "react";
import { connect } from "react-redux";
import { removeCamper } from "../../redux/campers";
import Item from "./Item";

function List(props) {
  const camperComponents = props.data.map((camper, i) => 
    <Item 
      key={camper.name + i}{...camper} 
      removeCamper={props.removeCamper} index={i}>
    </Item>)
  return (
    <div>
      {camperComponents}
    </div>
  )
}

const mapStateToProps = state => {
  return state.camper;
}

export default connect(mapStateToProps, { removeCamper})(List);