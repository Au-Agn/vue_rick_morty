export default {
  GET_CHARACTERS({ commit }, url) {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => commit("SET_CHARACTERS", data))
      .catch((err) => console.log(err.message));
  },
  GET_CHARACTER_BY_ID({ commit, dispatch }, id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((res) => {
        commit("SET_CHARACTER", res);
        dispatch("GET_EPISODE_INFO", res.episode[0]);
      })
      .catch((err) => console.log(err.message));
  },
  FILTER_CHARACTER({ commit, state }) {
    const filteredValue = Object.values(state.urlParams).filter(
      (value) => value != null
    );
    const params = `?${filteredValue.join("&")}`;
    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
      .then((res) => res.json())
      .then((res) => commit("SET_FILTERED_CHARACTERS", res.results))
      .catch((err) => console.log(err.message));
  },
  GET_URL_PARAMS_FOR_FILTER({ commit }, params) {
    commit("SET_URL_PARAMS", params);
  },
  ADD_TO_FAVOURITES({ commit, dispatch }, character) {
    commit("SET_TO_FAVOURITES", character);
    dispatch("SAVE_TO_LS");
  },
  REMOVE_FROM_FAVOURITES({ commit, dispatch }, id) {
    commit("DELETE_FROM_FAVOURITES", id);
    dispatch("SAVE_TO_LS");
  },
  GET_EPISODE_INFO({ commit }, url) {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => commit("SET_EPISODE_INFO", data))
      .catch((err) => console.log(err.message));
  },
  SAVE_TO_LS({ commit }) {
    commit("SAVE_TO_LS");
  },
};
