import {
  GET_TECHS,
  SET_LOADING,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR
} from "../actions/types";

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
    /**
     * to add a tech take techs "techs:"
     *  and set an arry where []
     * we copy the current techs that are already there by spreading "...state.techs" and
     * add the new tech "action.payload"
     */
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
