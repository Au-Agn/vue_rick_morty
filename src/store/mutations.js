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
        localStorage.setItem('favourites', JSON.stringify(state.favourites));
      }
    } else {
      state.favourites.push(data);
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    }
  },
  DELETE_FROM_FAVOURITES: (state, id) => {
    const newData = state.favourites.filter((item) => item.id !== id);
    state.favourites = newData;
    localStorage.setItem('favourites', JSON.stringify(state.favourites));
  },
  UPDATE_FAVOURITES__FROM_LS: (state, data) => {
    state.favourites = data;
  },
  SET_EPISODE_INFO: (state, data) => {
    state.episode = data;
  },
  SET_PAGE_NUMBER: (state, data) => {
    state.pageNumber = data;
  },
};
