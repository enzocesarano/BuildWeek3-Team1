import { combineReducers, configureStore } from '@reduxjs/toolkit';
import myProfile from '../reducers/getMyProfile';
import arrayAllProfiles from '../reducers/getAllProfiles';

const bigReducer = combineReducers({
  myProfile: myProfile,
  arrayAllProfiles: arrayAllProfiles,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;