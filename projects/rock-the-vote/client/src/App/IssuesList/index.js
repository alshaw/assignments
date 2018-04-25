import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getIssues } from '../../redux/issues'
import Issue from './Issue'

class IssuesList extends Component {
  componentDidMount() {
    console.log("mounted")
    console.log(this.props.getIssues())
  }
  render() {
    console.log(this.props)
    let {data} = this.props.issues
    // let sortedIssues = []       
    const IssueComponent = data.map((issue, i) => {
      return <Issue {...issue} key={i}></Issue>
    })
      return (
        <div className="issue-component">
          { IssueComponent }
        </div>
      )
  }
}


// const mapStateToProps = (state) => {
//     return {
//         data: state.issue
//     }
// }

export default connect(state => state, {getIssues})(IssuesList)