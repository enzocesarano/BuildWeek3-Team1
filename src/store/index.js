import { combineReducers, configureStore } from '@reduxjs/toolkit';
import myProfile from '../reducers/getMyProfile';
import arrayAllProfiles from '../reducers/getAllProfiles';
import searchProfile from '../reducers/getSearchProfile';

const bigReducer = combineReducers({
  myProfile: myProfile,
  arrayAllProfiles: arrayAllProfiles,
  searchProfile: searchProfile
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
