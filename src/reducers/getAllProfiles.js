import { GET_ALL_PROFILES } from "../action";


const initialState = {
  arrayAllProfiles: []
}

const arrayAllProfiles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROFILES:
        return {
          ...state,
          arrayAllProfiles: action.payload,
        };
        
    default:
      return state;
  }
}

export default arrayAllProfiles
