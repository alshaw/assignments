import React, { Component } from "react";
import { connect } from "react-redux";
import{ Feed, Icon } from "semantic-ui-react";
import Form from "../../Form";
import { deleteIssue, editIssue } from "../../../redux/issues";

class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.editIssue = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  render() {
    console.log(this.props.issues.data);
    let {
      _id,
      title,
      description,
      editIssue,
      deleteIssue,
      upvotes,
      downvotes
    } = this.props;

    // if (this.state.isEditing) {
    //   return (
    //     <div>
    //       <Form {...this.props} />
    //       <button onClick={this.toggleEdit}>Edit</button>
    //     </div>
    //   );
    // }
    return <div className="issue-container">
        <div className="issue-title">
          <div>Votes: {upvotes}</div>
          <div>
            <button onClick={() => editIssue({ upvotes: upvotes + 1 }, _id)} name="upvote">
              Upvote
            </button>
          </div>
          <div>
            <button onClick={() => editIssue({ upvotes: upvotes - 1 }, _id)} name="downvote">
              Downvote
            </button>
          </div>
          <h2>{title}</h2>
        </div>
        <div className="issue-description">
          <p>{description}</p>
        </div>
        <div />
        <div>
          <button onClick={() => editIssue(_id)}>Edit Issue</button>
        </div>

        <div>
          <button onClick={this.toggleEdit}>Save Edit</button>
        </div>
        <div>
          <button onClick={() => deleteIssue(_id)}>Delete</button>
        </div>
      </div>;
  }
}

export default connect(state => state, { deleteIssue, editIssue })(Issue);
