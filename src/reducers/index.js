import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";

export default combineReducers({
  log: logReducer, // should be same as in the mapStateToProps
  tech: techReducer
});
