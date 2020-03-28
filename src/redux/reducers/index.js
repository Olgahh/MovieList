import { combineReducers } from "redux";

import moviesReducer from "./reducer";

const rootReducer = combineReducers({
  moviesState: moviesReducer
});

export default rootReducer;
