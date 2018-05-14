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
        let num1Total = num1.upvotes - num1.downvotes;
        let num2Total = num2.upvotes - num2.downvotes;
        return num1Total - num2Total;
      });
    }

    const issueComponent = sortedArray.map((issue, i) => {
      return <Issue key={i} {...issue} />;
    });       

    return (
      <div className="issue-component">
        { issueComponent }
      </div>
    )
  }
}

export default connect(state => state, {getIssues})(IssuesList)