import { combineReducers, configureStore } from '@reduxjs/toolkit';
import myProfile from '../reducers/getMyProfile';
import arrayAllProfiles from '../reducers/getAllProfiles';
import profileSelect from '../reducers/profile';

const bigReducer = combineReducers({
  myProfile: myProfile,
  arrayAllProfiles: arrayAllProfiles,
  profileSelect: profileSelect
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
