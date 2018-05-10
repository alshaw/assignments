import React, { Component } from "react";
import { connect } from "react-redux";
import { Feed, Icon, Button } from "semantic-ui-react";
import EditForm from "./EditForm";
// import Comment from "./Comment";
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
        </div>
      );
    }

    return <div>
        <Feed>
          {/* {upvotes} */}
          <Feed.Event>
            <Feed.Label>
              <Button icon name="upvote" onClick={() => editIssue({ upvotes: upvotes + 1 }, _id)}>
                <Icon name="chevron up" />
              </Button>
              <div className="upvote">{upvotes}</div>
              <Button icon name="downvote" onClick={() => editIssue({ upvotes: upvotes - 1 }, _id)}>
                <Icon name="chevron down" />
              </Button>
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>{title}</Feed.User>
              </Feed.Summary>
              <Feed.Meta>{description}</Feed.Meta>
            </Feed.Content>
            {/* <button className="submit">Comment</button>
          <button className="submit" onClick={this.toggleEdit}>
            Edit Issue
          </button>
          <button className="submit" onClick={() => deleteIssue(_id)}>
            Delete
          </button> */}
          </Feed.Event>
        </Feed>
        <button className="submit">Comment</button>
        <button className="submit" onClick={this.toggleEdit}>
          Edit Issue
        </button>
        <button className="submit" onClick={() => deleteIssue(_id)}>
          Delete
        </button>
      </div>;
  }
}

export default connect(state => state, { deleteIssue, editIssue })(Issue);
