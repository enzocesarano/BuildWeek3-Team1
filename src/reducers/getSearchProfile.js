import { GET_SEARCH_PROFILE } from "../action";


const initialState = {
  searchProfile: {}
}

const searchProfile = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_PROFILE:
        return {
          ...state,
          searchProfile: action.payload,
        };
        
    default:
      return state;
  }
}

export default searchProfile
