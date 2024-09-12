// src/reducers/favoritesReducer.js
const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    case "REMOVE_FAVORITE":
      const filteredFavorites = state.favorites.filter((fav) => fav._id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      return { ...state, favorites: filteredFavorites };
    default:
      return state;
  }
};

export default favoritesReducer;
