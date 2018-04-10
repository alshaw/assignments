import React, { Component } from "react";
import { connect } from "react-redux";
import PeopleItem from "./PeopleItem";
import { getPeople } from "../../redux/people.js";

class PeopleList extends Component {
  componentDidMount(){
    this.props.getPeople();
  }
  render() {
    const { data, loading, errMsg } = this.props;
    const peopleComponents = data.map((people, i) => <PeopleItem key={people.name + i} {...people}></PeopleItem>)
    if (loading) {
      return (
        <div>
          ...Loading
        </div>
      )
    } else if (errMsg) {
        return (
          <div>
            { errMsg }
          </div>
        )
    } else {
        return (
          <div>
            { peopleComponents }
          </div>
        )
    }
  }
}

const mapStateToProps = state => {
  return state.people;
}

export default connect(mapStateToProps, { getPeople })(PeopleList);
