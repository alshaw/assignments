import React, { Component } from "react";
import { connect } from "react-redux";
import { Feed, Icon, Button } from "semantic-ui-react";
import EditForm from "./EditForm";
import Comment from "./Comment";
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
    let {
      _id,
      title,
      description,
      editIssue,
      deleteIssue,
      upvotes
    } = this.props;

    if (this.state.isEditing) {
      return (
        <div>
          <EditForm {...this.props} options={{ toggle: this.toggleEdit }} />
          <button onClick={this.toggleEdit}>Close</button>
        </div>
      );
    }

    return (
      <Feed>
        {upvotes}
        <Feed.Event>
          <Feed.Label>
            <Button
              icon
              onClick={() => editIssue({ upvotes: upvotes + 1 }, _id)}
              name="upvote"
            >
              <Icon name="chevron up" />
            </Button>
            <Button
              icon
              onClick={() => editIssue({ upvotes: upvotes - 1 }, _id)}
              name="downvote"
            >
              <Icon name="chevron down" />
            </Button>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{title}</Feed.User>
            </Feed.Summary>
            <Feed.Meta>
              {description}
              <Feed.Like />
            </Feed.Meta>
          </Feed.Content>
          <button>
            Comment
          </button>
          <button onClick={this.toggleEdit}>
            Edit Issue
          </button>
          <button onClick={() => deleteIssue(_id)}>
            Delete
          </button>
        </Feed.Event>
      </Feed>
    );
  }
}

export default connect(state => state, { deleteIssue, editIssue })(Issue);
