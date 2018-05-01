import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../../redux/items";
import Item from "./Item";

class List extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const { data, loading, errMsg } = this.props;
    const itemComponents = data.map((items, i) => <Item key={items.description + i} {...items}></Item>)
    if (loading) {
      return (
        <div>...Loading
        </div>
      )
    } else if (errMsg) {
        return (
          <div>{errMsg}</div>
        )
    } else {
        return (
          <div>
            {itemComponents}
          </div>
        )
    }
  }
}

const mapStateToProps = state => {
  return state.items;
}

export default connect(mapStateToProps, { getItems }) (List);