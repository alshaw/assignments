import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  errMsg: ""
};

const bountyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOUNTY":
      return {
        data: [...state.data, action.bounty]
      };
    case "REMOVE_BOUNTY":
      return {
        data: state.data.filter((bounty, i) => i !== action.index)
      };
    case "EDIT_BOUNTY":
      return {
        data: state.data.map((bounty, i) => {
          if (i === action.index) {
            return action.newBounty;
          } else {
            return bounty;
          }
        })
      };
    default:
      return state;
  }
};

export const addBounty = bounty => {
  return {
    type: "ADD_BOUNTY",
    bounty
  };
};

export const removeBounty = index => {
  return {
    type: "REMOVE_BOUNTY",
    index
  };
};

export const editBounty = (index, newBounty) => {
  return {
    type: "EDIT_BOUNTY",
    index,
    newBounty
  };
};

export const getBounties = () => {
  return dispatch => {
    axios.get("/bounties")
      .then(response => {
        console.log(response.data);
        dispatch({
          type: "GET_BOUNTIES",
          bounties: response.data.results
          
        })
      })
      .catch(err => {
        dispatch({
          type: "ERR_MSG",
          errMsg: "Sorry, you're data is unavailable"
        })
      })
  }
}

export default bountyReducer;
