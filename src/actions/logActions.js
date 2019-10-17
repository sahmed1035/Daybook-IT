import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG
} from "./types";

/**
 * redux-thunk allows to return the function directly
 * using redux-thunk to instead of just returning an object in the return, we can return an action.
 * need this for async call.
 * that function passed in a dispatch method.
 * we can make the request to our backend, then wait, get the response and then dispatch to the reducer.
 */

//getLogs action easier way. Keeping for reference
// export const getLogs = () => {
//redux-thunk allows to return the function directly. takes in dispatch so that we can dispatch to the reducer
//   return async dispatch => {
//     setLoading();
//setting loading to true

// making fetch request
//     const res = await fetch("/logs");
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

// getLogs ACTION (Get logs from server)
/**
 * logAction is going to make a request
 *  then get the data,
 *  then dispatch to our reducer
 * and change the state within the reducer.
 */
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    //making request through fetch API which returns a promise
    // don't need to write localhost/:5000 because we added proxy.
    const res = await fetch("/logs");
    // formating data as json. it doesn't return json data like axios.
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// ADD A NEW LOG. post method in fetch requires an object
export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// DELETE A LOG
export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      mathod: "DELETE"
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// function to set loading to true.
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
