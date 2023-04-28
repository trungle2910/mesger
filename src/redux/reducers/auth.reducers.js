import * as types from "../constants/auth.constants.js";
const isLogin = !!localStorage.getItem("name");

const initialState = {
  loading: false,
  isLogin,
  user: {},
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isLogin: true,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: "Login Failed",
      };
    default:
      return state;
  }
};

export default authReducer;
