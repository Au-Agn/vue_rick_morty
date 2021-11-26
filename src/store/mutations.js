export default {
  SET_CHARACTERS: (state, data) => {
    state.characters = data;
  },
  SET_CHARACTER: (state, data) => {
    state.characterItem = data;
  },
  SET_FILTERED_CHARACTERS: (state, data) => {
    state.filteredCharacters = data;
  },
  SET_CHARACTER_TO_FAVOURITES: (state, data) => {
    state.favourites.push(data);
  },
  SET_URL_PARAMS: (state, data) => {
    state.urlParams = { ...state.urlParams, ...data };
  },
  DELETE_CHARACTER_FROM_FAVOURITES: (state, index) => {
    state.favourites.splice(index, 1);
  },
  CHANGE_CARD_STATUS: (state, data) => {
    const ids = state.favourite.map((item) => item.id);
    return ids.includes(data.id)
      ? (this.isSelected = !this.isSelected)
      : this.isSelected;
  },
};
