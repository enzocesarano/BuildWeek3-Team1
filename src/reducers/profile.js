import { GET_SEARCH_PROFILE } from "../action";


const initialState = {
  profileSelect: 'me'
}

const profileSelect = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_PROFILE:
        return {
          ...state,
          profileSelect: action.payload,
        };
        
    default:
      return state;
  }
}

export default profileSelect
