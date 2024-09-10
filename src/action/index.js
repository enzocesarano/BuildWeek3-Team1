export const GET_PROFILE = "GET_PROFILE";
export const SET_PROFILE = "SET_PROFILE";
export const GET_ALL_PROFILES = "GET_ALL_PROFILES";
export const GET_SEARCH_PROFILE = "GET_SEARCH_PROFILE"

export const getProfile = (id, experiences) => {
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";

  const profilePromise = fetch(baseEndpoint + id + "/" + experiences, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nel recupero del profilo");
    }
  });

  const allProfilesPromise = fetch(baseEndpoint, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nel recupero di tutti i profili");
    }
  });

  return (dispatch) => {
    Promise.all([profilePromise, allProfilesPromise])
      .then(([profile, allProfiles]) => {
        dispatch({
          type: GET_PROFILE,
          payload: profile,
        });
        dispatch({
          type: GET_ALL_PROFILES,
          payload: allProfiles,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const setMyProfile = (editProfile) => {
  const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/`;

  return (dispatch) => {
    fetch(baseEndpoint, {
      method: "PUT",
      body: JSON.stringify(editProfile),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nell'aggiornamento del profilo");
        }
      })
      .then((updatedProfile) => {
        dispatch({
          type: SET_PROFILE,
          payload: updatedProfile,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const setMyImg = (id, endpoint, imageFile) => {
  const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/`;

  const formData = new FormData();
  formData.append("profile", imageFile);

  return (dispatch) => {
    fetch(baseEndpoint + id + "/" + endpoint, {
      method: "POST",
      body: formData,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nell'aggiornamento del profilo");
        }
      })
      .then((updatedProfile) => {
        dispatch({
          type: SET_PROFILE,
          payload: updatedProfile,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};



export const profileSelect = (profile) => {
  return {
    type: GET_SEARCH_PROFILE,
    payload: profile,
  };
};
