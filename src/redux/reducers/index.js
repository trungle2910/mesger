import { combineReducers } from "redux";
import authReducer from "./auth.reducers.js";
import routeReducers from "./route.reducers.js";

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducers,
});

export default rootReducer;
