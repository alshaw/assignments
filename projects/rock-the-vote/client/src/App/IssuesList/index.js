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
    let {data} = this.props.issues
    // let sortedIssues = []       
    const issueComponent = data
      .map((issue, i) =>
     <Issue {...issue} key={i}></Issue>)

      return (
        <div className="issue-component">
          { issueComponent }
        </div>
      )
  }
}

export default connect(state => state, {getIssues})(IssuesList)