import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG
} from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };

    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        //spread operator since state is immutable. action.payload has the new log
        loading: false
      };

    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };

    // default
    default:
      return state;
  }
};

/**
 * export a default function which takes in state and action.
 * evaluate action.type with a switch
 * a default that will return the state as is.
 * create inital state for log.
 * set export default to state = initialState
 * bring this to root reducer. index.js in the reducer folder.
 */
