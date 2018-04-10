const initialState = {
  data: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        data: [...state.data, action.post]
      }
    case "REMOVE_POST":
      return { 
        data: state.data.filter((post, i) => i !== action.index) 
      }
    case "EDIT_POST":
      return { 
        data: state.data.map((post, i) => {
          if (i === action.index) {
            return action.newPost;
          } else {
            return post;
          }
        }) };
    default:
      return state;
  }
};

export const addPost = post => {
  return {
    type: "ADD_POST",
    post
  }
}

export const removePost = index => {
  return {
    type: "REMOVE_POST",
    index
  }
}

export const editPost = (index, newPost) => {
  return {
    type: "EDIT_POST",
    index,
    newPost
  }
}

export default postReducer;
