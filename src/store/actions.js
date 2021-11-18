export default {
  GET_CHARACTERS({ commit }) {
    return fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) => res.json())
      .then((data) => commit("SET_CHARACTERS", data.results))
      .catch((err) => console.log(err.message));
  },
  GET_CHARACTER_BY_ID({ commit }, id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((res) => commit("SET_CHARACTER", res))
      .catch((err) => console.log(err.message));
  },
  ADD_CHARACTER_TO_FAVOURITES({ commit }, character) {
    commit("SET_CHARACTER_TO_FAVOURITES", character);
  },
};
