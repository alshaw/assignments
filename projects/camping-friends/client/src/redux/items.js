import axios from "axios";

const initialItemState = {
  data: [],
  loading: true,
  errMsg: ""
}

const itemReducer = (state = initialItemState, action) => {
  switch (action.type) {
    // case "GET_ITEMS": 
    //   return {
    //     ...state,
    //     loading: false,
    //     data: action.items
    //   }
    case "ADD_ITEM":
      return {
        data: [...state.data, action.item]
      }
    case "REMOVE_ITEM":
      return {
        data: state.data.filter((item, i) => i !== action.index)
      }
    case "EDIT_ITEM":
      return {
        data: state.data.map((item, i) => {
          if (i === action.index) {
            return action.newItem;
          } else {
            return item;
          }
        })
      }
    default: return state;
  }
}

export const addItem = item => {
  return {
    type: "ADD_ITEM",
    item
  }
}

export const editItem = (index, newItem) => {
  return {
    type: "EDIT_ITEM",
    index,
    newItem
  }
}

export const removeItem = index => {
  return {
    type: "REMOVE_ITEM",
    index
  }
}

export const getItems = () => {
  return dispatch => {
    axios.get("/items")
      .then(response => {
        console.log(response.data);
        dispatch({ 
          type: "GET_ITEMS", 
          items: response.data.results
        });
      })
      .catch(err => {
        dispatch({
          type: "ERR_MSG",
          err: "Data unavailable"
        })
      })
  }
}



export default itemReducer;