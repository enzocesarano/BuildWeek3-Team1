export const GET_PROFILE = "GET_PROFILE";

export const getProfile = (id) => {
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";

  return (dispatch) => {
    fetch(baseEndpoint + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero");
        }
      })
      .then((profile) => {
        dispatch({
          type: GET_PROFILE,
          payload: profile,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
