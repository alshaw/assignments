import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  errMsg: ""
}

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMMENTS": {
      return {
        ...state,
        loading: false,
        data: action.comments
      }
    }
    case "GET_COMMENT": {
      return {
        ...state,
        loading: false,
        currentIssue: action.comment
      }
    }
    case "ADD_COMMENT": {
      return {
        ...state,
        loading: false,
        data: [...state.data, action.comment]
      }
    }
    case "REMOVE_COMMENT":
      return {
        ...state,
        loading: false,
        data: state.data.filter(comment => comment._id !== action.id)
      }
    case "EDIT_COMMENT":
      return {
        ...state,
        loading: false,
        data: state.data.map(comment => {
        if (comment._id === action.id) {
          return action.comment;
          } else {
            return comment;
          }
        })
      }
    case "ERR_MSG":
      return {
        ...state,
        loading: false,
        errMsg: action.errMsg
      }

    default:
      return state;
    }
}

export const getComments = () => {
    return dispatch => {
        axios.get("/comments")
            .then(response => {
                dispatch({
                    type: "GET_COMMENTS",
                    comments: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const getComment = (id) => {
    return dispatch => {
        axios.get("/comments/" + id)
            .then(response => {
                dispatch({
                    type: "GET_COMMENT",
                    comments: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const addComment = (newComment) => {
    console.log(newComment)
    return dispatch => {
        axios.post("/comments/", newComment)
            .then(response => {
                dispatch({
                    type: "ADD_COMMENT",
                    comment: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const removeComment = (id) => {
    return dispatch => {
        axios.delete("/comments/" + id)
            .then(response => {
                dispatch({
                    type: "REMOVE_COMMENT",
                    id
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const editComment = (id, newComment) => {
    return dispatch => {
        axios.put("/comments/" + id, newComment)
            .then(response => {
                dispatch({
                    type: "EDIT_COMMENT",
                    comment: response.data,
                    id
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export default commentReducer; 