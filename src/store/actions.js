export default {
  GET_CHARACTERS({ commit }) {
    return fetch("https://rickandmortyapi.com/api/character")
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
  FILTER_CHARACTER({ commit, state }, species) {
    if (species === "All") {
      state.filteredCharacters = [];
    } else {
      const filteredValue = Object.values(state.urlParams).filter(
        (value) => value != null
      );
      const params = `?${filteredValue.join("&")}`;
      return fetch(`https://rickandmortyapi.com/api/character/${params}`)
        .then((res) => res.json())
        .then((res) => commit("SET_FILTERED_CHARACTERS", res.results))
        .catch((err) => console.log(err.message));
    }
  },
  GET_URL_PARAMS({ commit }, params) {
    commit("SET_URL_PARAMS", params);
  },
  ADD_TO_FAVOURITES({ commit }, character) {
    commit("SET_TO_FAVOURITES", character);
  },
  REMOVE_FROM_FAVOURITES({ commit }, id) {
    commit("DELETE_FROM_FAVOURITES", id);
  },
};
