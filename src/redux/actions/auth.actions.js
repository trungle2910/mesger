import api from "../../apiService";
import { routeActions } from "./route.actions.js";
import * as types from "../constants/auth.constants";

const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST, payload: null });
    const res = await api.post("/login", data);
    console.log("res action", res);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("name", res.data.user.username);
    dispatch(routeActions.redirect("/"));
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error.message });
  }
};

export const authActions = {
  login,
};
