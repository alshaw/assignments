import React, { Component } from "react";
import { connect } from "react-redux";
import { editItem } from "../../../../redux/items.js";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        description: props.description,
        price: props.price
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
    const { index, editItem } = this.props;
    editItem(index, this.state.inputs);
  }
  render() {
    const { description, price } = this.state.inputs;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          name="description"
          value={description}
          type="text"
          placeholder="Enter Description"
        />
        <input 
          onChange={this.handleChange}
          name="price"
          value={price}
          type="text"
          placeholder="Enter price"
        />
        <button>Submit Changes</button>
      </form>
    )
  }
}

export default connect(null, { editItem}) (EditForm);