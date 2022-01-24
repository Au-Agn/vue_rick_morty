import {
  GET_CHARACTERS,
  GET_CHARACTER_BY_ID,
  FILTER_CHARACTER,
  GET_URL_PARAMS_FOR_FILTER,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  GET_EPISODE_INFO,
  GET_FAVOURITES__FROM_LS,
  GET_PAGE_INFO,
  GET_PAGE_NUMBER,
  SET_CHARACTERS,
  SET_PAGE_INFO,
  SET_CHARACTER,
  SET_FILTERED_CHARACTERS,
  SET_URL_PARAMS,
  SET_TO_FAVOURITES,
  DELETE_FROM_FAVOURITES,
  UPDATE_FAVOURITES__FROM_LS,
  SET_EPISODE_INFO,
  SET_PAGE_NUMBER,
} from "./types";

export default {
  [GET_CHARACTERS]({ commit, dispatch }) {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        commit(SET_CHARACTERS, data.results),
          dispatch(GET_PAGE_INFO, data.info);
      })
      .catch((err) => console.log(err.message));
  },
  [GET_CHARACTER_BY_ID]({ commit, dispatch }, id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((res) => {
        commit(SET_CHARACTER, res);
        dispatch(GET_EPISODE_INFO, res.episode[0]);
      })
      .catch((err) => console.log(err.message));
  },
  [FILTER_CHARACTER]({ commit, dispatch, state }) {
    const filteredValue = Object.values(state.urlParams).filter(
      (value) => value != null
    );
    const page = state.pageNumber;
    const params = `&${filteredValue.join("&")}`;
    return fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}${params}`
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((res) => {
        commit(SET_FILTERED_CHARACTERS, res.results),
          dispatch(GET_PAGE_INFO, res.info);
      })
      .catch(
        (err) => err === 404 && commit(SET_FILTERED_CHARACTERS, []),
        commit(SET_CHARACTERS, { results: [] })
      );
  },
  [GET_URL_PARAMS_FOR_FILTER]({ commit }, params) {
    commit(SET_URL_PARAMS, params);
  },
  [ADD_TO_FAVOURITES]({ commit }, character) {
    commit(SET_TO_FAVOURITES, character);
  },
  [REMOVE_FROM_FAVOURITES]({ commit }, id) {
    commit(DELETE_FROM_FAVOURITES, id);
  },
  [GET_EPISODE_INFO]({ commit }, url) {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => commit(SET_EPISODE_INFO, data))
      .catch((err) => console.log(err.message));
  },
  [GET_FAVOURITES__FROM_LS]({ commit }) {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    commit(UPDATE_FAVOURITES__FROM_LS, favourites);
  },
  [GET_PAGE_INFO]({ commit }, data) {
    commit(SET_PAGE_INFO, data);
  },
  [GET_PAGE_NUMBER]({ commit }, data) {
    commit(SET_PAGE_NUMBER, data);
  },
};
