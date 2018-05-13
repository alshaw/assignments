import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getIssues } from '../../redux/issues'
import Issue from './Issue'

class IssuesList extends Component {
  componentDidMount() {
    console.log(this.props.getIssues())
    console.log("props", this.props)
  }
  render() {
    console.log(this.props)
    let { data, loading } = this.props.issues
    let sortedArray = [];
    if (!loading) {
      sortedArray = data.sort((num1, num2) => {
        let num1Total = num1.upvotes - num1.upvotes;
        let num2Total = num2.upvotes - num2.upvotes;
        return num2Total - num1Total;
      });
    }
    const issueComponent = data.map((issue, i) => {
      return <Issue key={i} {...issue} />;
    });       
    // const issueComponent = data
    //   .map((issue, i) =>
    //  <Issue {...issue} key={i}></Issue>)

      return (
        <div className="issue-component">
          { issueComponent }
        </div>
      )
  }
}

export default connect(state => state, {getIssues})(IssuesList)