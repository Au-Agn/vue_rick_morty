export default {
  SET_CHARACTERS: (state, data) => {
    state.characters = data;
  },
  SET_PAGE_INFO: (state, data) => {
    state.pageInfo = data;
  },
  SET_CHARACTER: (state, data) => {
    state.characterItem = data;
  },
  SET_FILTERED_CHARACTERS: (state, data) => {
    state.filteredCharacters = data;
  },
  SET_URL_PARAMS: (state, data) => {
    state.urlParams = { ...state.urlParams, ...data };
  },
  SET_TO_FAVOURITES: (state, data) => {
    const ids = state.favourites.map((item) => item.id);

    if (state.favourites.length) {
      if (ids.includes(data.id)) {
        state.isExistsInFavourites = true;
      } else {
        state.isExistsInFavourites = false;
      }
      if (!state.isExistsInFavourites) {
        state.favourites.push(data);
        state.isAdded[data.id] = true;
      }
    } else {
      state.favourites.push(data);
      state.isAdded[data.id] = true;
    }
  },
  DELETE_FROM_FAVOURITES: (state, id) => {
    const newData = state.favourites.filter((item) => item.id !== id);
    state.favourites = newData;
    state.isAdded[id] = false;
  },
  SET_EPISODE_INFO: (state, data) => {
    state.episode = data;
  },
  SAVE_TO_LS: (state) => {
    const favourites = JSON.stringify(state.favourites);
    const isAdded = JSON.stringify(state.isAdded);
    localStorage.setItem("favourites", favourites);
    localStorage.setItem("isAdded", isAdded);
  },
  SET_PAGE_NUMBER: (state, data) => {
    state.pageNumber = data;
  },
};
