import { POST_MY_EXPERIENCE, DELETE_MY_EXPERIENCE } from "../action";


const initialState = {
  myExperience: []
}

const myExperience = (state = initialState, action) => {
  switch (action.type) {
    case POST_MY_EXPERIENCE:
        return {
          ...state,
          myExperience: action.payload,
        };
        
    case DELETE_MY_EXPERIENCE:
      return {
        ...state,
        myExperience: action.payload
      }    
    default:
      return state;
  }
}

export default myExperience
