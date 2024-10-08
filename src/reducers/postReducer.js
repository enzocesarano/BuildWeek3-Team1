import { SET_POSTS, ADD_POST, DELETE_POST, SET_IMG_POST, EDIT_POST } from "../action";

const initialState = {
  state: {
    posts: [],
    myPost: []
  },
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: action.payload,
      };

    case SET_IMG_POST:
      return {
        ...state,
        posts: action.payload,
      };

      case EDIT_POST: 
      return {
        ...state,
        myPost: action.payload
      }

    default:
      return state;
  }
};

export default postsReducer;
