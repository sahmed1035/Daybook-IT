import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

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

// getLogs action
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs");
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

// function to set loading to true.
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
