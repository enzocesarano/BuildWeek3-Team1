import { GET_COMMENTS } from "../action";

const initialState = {
    comments: []
  }
  
  const comments = (state = initialState, action) => {
    switch (action.type) {
      case GET_COMMENTS:
          return {
            ...state,
            comments: action.payload,
          };
          
      default:
        return state;
    }
  }
  
  export default comments