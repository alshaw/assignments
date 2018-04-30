import axios from "axios";

const initialState = {
  data: [],
  savedCamper: [],
  loading: true,
  errMsg: ""
};

const camperReducer = (state = initialState, action) => {
  console.log(state.savedCampers);
  switch (action.type) {
    case "GET_CAMPERS":
      return {
        ...state,
        data: action.campers,
        loading: false
      };
    case "SAVE_CAMPER":
      return {
        ...state,
        savedCamper: [...state.savedCampers, action.camper],
        loading: false
      };
    case "ERR_MSG":
      return {
        ...state,
        loading: false,
        errMsg: action.errMsg
      };
    case "ADD_CAMPER":
      return {
        data: [...state.data, action.camper],
        loading: false
      };
    case "REMOVE_CAMPER":
      return {
        data: state.data.filter((camper, i) => i !== action.index)
      };
    case "EDIT_CAMPER":
      return {
        data: state.data.map((camper, i) => {
          if(i === action.index) {
            return action.newCamper;
          } else {
            return camper;
          }
        })
      }
    default:
      return state;
  }
};

const camperUrl = "https://randomuser.me/api/?results=20";

export const getCampers = () => {
  return dispatch => {
    axios
      .get(camperUrl)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: "GET_CAMPERS",
          campers: response.data.results
        });
      })
      .catch(err => {
        dispatch({
          type: "ERR_MSG",
          errMsg: "Sorry, campers are not available."
        });
      });
  };
};

export const saveCamper = camper => {
  return dispatch => {
    dispatch({
      type: "SAVE_CAMPER",
      camper: camper
    });
  };
};

export const addCamper = camper => {
  return {
    type: "ADD_CAMPER",
    camper
  }
}

export const removeCamper = index => {
  return {
    type: "REMOVE_CAMPER",
    index
  }
}

export const editCamper = (index, newCamper) => {
  return {
    type: "EDIT_CAMPER",
    index, 
    newCamper
  }
}

export default camperReducer;
