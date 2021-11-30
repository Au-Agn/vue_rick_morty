export default {
  SET_CHARACTERS: (state, data) => {
    state.characters = data.results;
    state.info = data.info;
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
        state.isExists = true;
      } else {
        state.isExists = false;
      }

      if (!state.isExists) {
        state.favourites.push(data);
      }
    } else {
      state.favourites.push(data);
    }
  },
  DELETE_FROM_FAVOURITES: (state, id) => {
    const newData = state.favourites.filter((item) => item.id !== id);
    state.favourites = newData;
  },
};
