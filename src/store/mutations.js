export default {
  SET_CHARACTERS: (state, data) => {
    state.characters = data;
  },
  SET_CHARACTER: (state, data) => {
    state.characterItem = data;
  },
  SET_CHARACTER_TO_FAVOURITES: (state, data) => {
    state.favourites.push(data)
  }
};
