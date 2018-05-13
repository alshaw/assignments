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
      isEditing: false,
      // isCommenting: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleComment = this.toggleComment.bind(this);
  }

  toggleEdit(e) {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  toggleComment(e) {
    this.setState(prevState => ({
      isCommenting: !prevState.isCommenting
    })); 
  }

  render() {
    let {
      _id,
      title,
      description,
      editIssue,
      deleteIssue,
      upvotes,
      downvotes,
      score
    } = this.props;

    if (this.state.isEditing) {
      return <div>
          <EditForm {...this.props} options={{ toggle: this.toggleEdit }} />
        </div>;
    }

    if (this.state.isCommenting) {
      return <div>
        <Comment {...this.props} toggleComment={this.toggleComment}/>
      </div>
    }



    return <div>
          <Feed>
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
            </Feed.Event>
          </Feed>
        <button id="toggle-comment" className="submit" onClick={this.toggleComment}>
          {/* {this.state.isCommenting ? <Comment {...this.props} options={{ toggle: this.toggleComment }} /> : null} */}
          Comment
        </button>
        <button id="edit-submit" className="submit" onClick={this.toggleEdit}>
          {/* {this.state.isEditing ? <EditForm {...this.props} options={{ toggle: this.toggleEdit }} /> : null} */}
          Edit
        </button>
        <button className="submit" onClick={() => deleteIssue(_id)}>
          Delete
        </button>
      </div>;
  }
}

export default connect(state => state, { deleteIssue, editIssue })(Issue);
