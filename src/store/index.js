import { combineReducers, configureStore } from "@reduxjs/toolkit";
import myProfile from "../reducers/getMyProfile";

const bigReducer = combineReducers({
  myProfile: myProfile,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
