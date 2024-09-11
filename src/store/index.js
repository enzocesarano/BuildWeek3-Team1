import { combineReducers, configureStore } from '@reduxjs/toolkit';
import myProfile from '../reducers/getMyProfile';
import arrayAllProfiles from '../reducers/getAllProfiles';
import searchProfile from '../reducers/getSearchProfile';
import experiences from '../reducers/getExperiences';
import myExperience from '../reducers/postMyExperience';

const bigReducer = combineReducers({
  myProfile: myProfile,
  arrayAllProfiles: arrayAllProfiles,
  searchProfile: searchProfile,
  experiences: experiences,
  myExperience: myExperience
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
