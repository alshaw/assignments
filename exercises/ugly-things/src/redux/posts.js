const postReducer = (prevPost = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...prevPost, action.newPost];
    default:
      return prevPost;
  }
};

export const addPost = newPost => {
  return {
    type: "ADD_POST",
    newPost
  };
};

export default postReducer;
