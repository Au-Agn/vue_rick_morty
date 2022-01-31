import axios from "axios";
import {
  GET_CHARACTERS,
  GET_CHARACTER_BY_ID,
  FILTER_CHARACTER,
  GET_URL_PARAMS_FOR_FILTER,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  GET_EPISODE_INFO,
  GET_FAVOURITES_FROM_LS,
  GET_PAGE_INFO,
  SET_CHARACTERS,
  SET_PAGE_INFO,
  SET_CHARACTER,
  SET_FILTERED_CHARACTERS,
  SET_URL_PARAMS,
  SET_TO_FAVOURITES,
  DELETE_FROM_FAVOURITES,
  UPDATE_FAVOURITES__FROM_LS,
  SET_EPISODE_INFO,
} from "./types";

export default {
  [GET_CHARACTERS]({ commit, dispatch }) {
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        commit(SET_CHARACTERS, res.data.results),
          dispatch(GET_PAGE_INFO, res.data.info);
      })
      .catch((err) => console.log(err.message));
  },
  [GET_CHARACTER_BY_ID]({ commit, dispatch }, id) {
    return axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        commit(SET_CHARACTER, res.data);
        dispatch(GET_EPISODE_INFO, res.data.episode[0]);
      })
      .catch((err) => console.log(err.message));
  },
  [FILTER_CHARACTER]({ commit, dispatch, state }) {
    return axios
      .get("https://rickandmortyapi.com/api/character/", {
        params: state.urlParams,
      })
      .then((res) => {
        commit(SET_FILTERED_CHARACTERS, res.data.results),
          dispatch(GET_PAGE_INFO, res.data.info);
      })
      .catch(
        (err) =>
          err.response.status === 404 && commit(SET_FILTERED_CHARACTERS, []),
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
    return axios
      .get(url)
      .then((res) => commit(SET_EPISODE_INFO, res.data))
      .catch((err) => console.log(err.message));
  },
  [GET_FAVOURITES_FROM_LS]({ commit }) {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    commit(UPDATE_FAVOURITES__FROM_LS, favourites);
  },
  [GET_PAGE_INFO]({ commit }, data) {
    commit(SET_PAGE_INFO, data);
  },
};
