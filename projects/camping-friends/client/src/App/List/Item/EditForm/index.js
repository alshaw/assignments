import React, { Component } from "react";
import { connect } from "react-redux";
import { editCamper } from "../../../../redux/campers";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        name: props.name,
        spot: props.spot
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { value, name } = e.target;
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const { index, editCamper } = this.props;
    editCamper(index, this.state.inputs);
  }

  render() {
    const { name, spot } = this.state.inputs;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="name" value={name} type="text" placeholder="Edit Name"/>
        <input onChange={this.handleChange} name="spot" value={spot} type="text" placeholder="Edit Favorite Camping Spot" />
        <button>Save</button>
      </form>
    )
  }
}
export default connect(null, { editCamper })(EditForm);