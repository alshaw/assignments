import React, { Component } from "react";
import { connect } from "react-redux";
import { editPost } from "../../../../redux/posts.js";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        imgUrl: props.imgUrl,
        caption: props.caption,
        description: props.description
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    const { index, editPost } = this.props;
    editPost(index, this.state.inputs);
  }

  render() {
    const { imgUrl, caption, description } = this.state.inputs;
    return <form onSubmit={this.handleSubmit} className="edit-form">
        <input onChange={this.handleChange} name="imgUrl" value={imgUrl} type="text" placeholder="Edit Image" />
        <input onChange={this.handleChange} name="caption" value={caption} placeholder="Edit Caption" />
        <input onChange={this.handleChange} name="description" value={description} placeholder="Edit Description" />
        <button>Edit Post</button>
      </form>;
  }
}

export default connect(null, { editPost }) (EditForm);