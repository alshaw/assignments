const initialState = {
  data: []
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        data: [...state.data, action.post]
      };
    default: 
      return state;
  }
};

export const addPost = post => {
  return {
    type: "ADD_POST",
    post
  }
};

export default postReducer;