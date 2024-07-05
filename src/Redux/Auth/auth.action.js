import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST } from "./auth.actionType";
export const loginUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signin`,
      loginData.data
    );

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }
    console.log("login success",data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.token });
  } catch (error) {
    console.error(error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const registerUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      loginData.data
    );

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }
    console.log("signup success",data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.token });
  } catch (error) {
    console.error(error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};
