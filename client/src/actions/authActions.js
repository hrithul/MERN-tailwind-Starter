import axios from "axios";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

// Register User
export const registerUser = (userData, navigate) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(() => navigate("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Set current user
      dispatch(setCurrentUser(res.data.user));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Check if user is authenticated
export const checkAuth = () => dispatch => {
  dispatch(setUserLoading());
  axios.get("/api/users/check-auth")
    .then(res => {
      if (res.data.isAuthenticated) {
        dispatch(setCurrentUser(res.data.user));
      }
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response ? err.response.data : { noAuth: "Not authenticated" }
      });
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  axios.post("/api/users/logout")
    .then(() => {
      // Set current user to empty object {} which will set isAuthenticated to false
      dispatch(setCurrentUser({}));
    })
    .catch(err => console.log(err));
};