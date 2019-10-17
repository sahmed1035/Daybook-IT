import { combineReducers } from "redux";
import logReducer from "./logReducer";

export default combineReducers({
  log: logReducer // should be same as in the mapStateToProps
});
