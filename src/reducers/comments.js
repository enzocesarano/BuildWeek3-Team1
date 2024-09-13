import {
  DELETE_COMMENT,
  GET_COMMENTS,
  POST_COMMENTS,
} from "../action";

const initialState = {
  comments: [],
  postComment: [],
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    case POST_COMMENTS:
      return {
        ...state,
        postComment: action.payload,
      };

    case DELETE_COMMENT:
      return {
        ...state,
        postComment: action.payload,
      };
    default:
      return state;
  }
};

export default comments;
