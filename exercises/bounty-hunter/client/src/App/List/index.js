import React, { Component } from "react";
import { connect } from "react-redux";
import { removeBounty, getBounties } from "../../redux/bounties";
import Item from "./Item/";

class List extends Component {
    componentDidMount() {
      this.props.getBounties();
    }
    render() {
      const { data, loading, errMsg } = this.props;
      const bountyComponents = data.map((bounty, i) => <Item key={bounty.name + i} {...bounty}></Item>)
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
              {bountyComponents}
            </div>
          )
        }     
      //   <Item
      //     key={bounty.firstName + i}
      //     {...bounty}
      //     removePost={props.removeBounty}
      //     index={i}
      //   />
      // ));
      // return <div className="bounty-list">{bountyComponents}</div>;
   }
}

const mapStateToProps = state => {
  return state.bounties;
};

export default connect(mapStateToProps, { removeBounty, getBounties })(List);
