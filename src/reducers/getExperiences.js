import { GET_EXPERIENCES } from "../action";

const initialState = {
    experiences: []
}

const experiences = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
        return {
          ...state,
          experiences: action.payload,
        };
        
    default:
      return state;
  }
}

export default experiences
