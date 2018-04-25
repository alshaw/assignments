import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "../../Form";
import { deleteIssue, editIssue } from "../../../redux/issues";

class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
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

    if (this.state.isEditing) {
      return (
        <div>
          <Form {...this.props} />
          <button onClick={this.toggleEdit}>Edit</button>
        </div>
      );
    }
    return (
      <div>
        <div className="issue-title">
          <h2>{title}</h2>
        </div>
        <div className="issue-description">
          <p>{description}</p>
        </div>
        <div>
          <div>{" "}Votes: {upvotes}{" "}
            <button
              onClick={() => editIssue({ upvotes: upvotes + 1 }, _id)}
              name="upvote"
            > Upvote
            </button>
          </div>
          <div>
            <button
              onClick={() => editIssue({ upvotes: upvotes - 1 }, _id)}
              name="downvote"
            >Downvote
            </button>
          </div>
        </div>

        <div>
          <button onClick={this.toggleEdit}>Save Changes</button>
          <button onClick={() => deleteIssue(_id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default connect(state => state, { deleteIssue, editIssue })(Issue);
