const initialState = [];

export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});

export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setSearchResults(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchDefaultJobs = () => {
  return async (dispatch) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?limit=5";
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setSearchResults(data));
      } else {
        alert("Error fetching default jobs");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return action.payload;
    default:
      return state;
  }
};

export default searchResultsReducer;
