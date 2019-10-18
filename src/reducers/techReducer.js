import { GET_TECHS, SET_LOADING } from "../actions/types";

const initialState = {
  techs: null, //null by default. after getting response, an array
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
