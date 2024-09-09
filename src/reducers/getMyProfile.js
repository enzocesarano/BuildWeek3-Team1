import { GET_PROFILE, SET_PROFILE } from "../action";


const initialState = {
  myProfile: {}
}

const myProfile = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
        return {
          ...state,
          myProfile: action.payload,
        };

        case SET_PROFILE: 
        return {
          ...state,
          myProfile: action.payload
        };
        
    default:
      return state;
  }
}

export default myProfile
