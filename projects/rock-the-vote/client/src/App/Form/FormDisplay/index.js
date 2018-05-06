import React from "react";

function FormDisplay(props) {
  const { handleChange, handleSubmit, inputs } = props;
  const { title, description } = inputs;
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" name="title" value={title} placeholder="Title" />
      <textarea onChange={handleChange} type="text" name="description" value={description} placeholder="Description" />
      <button>Submit</button>
    </form>
  )
}

export default FormDisplay;