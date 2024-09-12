export const GET_PROFILE = "GET_PROFILE";
export const SET_PROFILE = "SET_PROFILE";
export const GET_ALL_PROFILES = "GET_ALL_PROFILES";
export const GET_SEARCH_PROFILE = "GET_SEARCH_PROFILE";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const POST_MY_EXPERIENCE = "POST_MY_EXPERIENCE"
export const DELETE_MY_EXPERIENCE = "DELETE_MY_EXPERIENCE"
export const EDIT_MY_EXPERIENCE = "EDIT_MY_EXPERIENCE"
export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const SET_IMG_EXPERIENCE = "SET_IMG_EXPERIENCE"
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});



export const getProfile = (id) => {
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";

  const profilePromise = fetch(baseEndpoint + id, {
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

export const searchProfile = (id) => {
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
          throw new Error("Errore nel recupero del profilo");
        }
      })
      .then((profile) => {
        dispatch({
          type: GET_SEARCH_PROFILE,
          payload: profile,
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


export const setImgExp = (id, endpoint, idExp, imageFile) => {
  const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/`;

  const formData = new FormData();
  formData.append("experience", imageFile);

  return (dispatch) => {
    fetch(baseEndpoint + id + "/" + endpoint + "/" + idExp + "/picture" , {
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
          type: SET_IMG_EXPERIENCE,
          payload: updatedProfile,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};




export const getExperience = (id) => {
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";
  return (dispatch) => {
    fetch(baseEndpoint + id + "/experiences", {
      headers: {
        "Content-Type": "application/json",
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
      .then((experiences) => {
        dispatch({
          type: GET_EXPERIENCES,
          payload: experiences,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const postMyExperience = (experience) => {
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/66deab4f4d0def0015cef0f9/experiences";
  return (dispatch) => {
    fetch(baseEndpoint, {
      method: "POST",
      body: JSON.stringify(experience),
      headers: {
        "Content-Type": "application/json",
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
      .then((experience) => {
        dispatch({
          type: POST_MY_EXPERIENCE,
          payload: experience,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const deleteMyExperience = (idExperience) => {
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/66deab4f4d0def0015cef0f9/experiences/";
  return (dispatch) => {
    fetch(baseEndpoint + idExperience, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Errore nell'aggiornamento del profilo");
        }
      })
      .then((text) => {
        if (text === "Deleted") {
          dispatch({
            type: DELETE_MY_EXPERIENCE,
            payload: idExperience,
          });
        } else {
          console.error("Risposta inaspettata:", text);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const deleteMyPost = (idPost) => {
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/posts/";
  return (dispatch) => {
    fetch(baseEndpoint + idPost, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
      },
    })
    .then((response) => {
      if (response.ok) {
        return response.text(); 
      } else {
        throw new Error("Errore nell'aggiornamento del profilo");
      }
    })
    .then((text) => {
      if (text === "Deleted") {
        dispatch({
          type: DELETE_POST,
          payload: idPost,
        });
      } else {
        console.error("Risposta inaspettata:", text);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  };
};


export const setMyExperience = (editExperience, id) => {
  const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/66deab4f4d0def0015cef0f9/experiences/`;

  return (dispatch) => {
    fetch(baseEndpoint + id, {
      method: "PUT",
      body: JSON.stringify(editExperience),
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
      .then((editExperience) => {
        dispatch({
          type: EDIT_MY_EXPERIENCE,
          payload: editExperience,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const fetchSearchResults = (query) => async (dispatch) => {
  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`);
    const data = await response.json();
    dispatch({
      type: "SET_SEARCH_RESULTS",
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
