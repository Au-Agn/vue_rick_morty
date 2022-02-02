import axios from "axios";
import {
  GET_CHARACTERS,
  GET_CHARACTER_BY_ID,
  GET_URL_PARAMS_FOR_FILTER,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  GET_EPISODE_INFO,
  GET_FAVOURITES_FROM_LS,
  GET_PAGE_INFO,
  SET_CHARACTERS,
  SET_PAGE_INFO,
  SET_CHARACTER,
  SET_URL_PARAMS,
  SET_TO_FAVOURITES,
  DELETE_FROM_FAVOURITES,
  UPDATE_FAVOURITES__FROM_LS,
  SET_EPISODE_INFO,
  SET_ACTIVE_BUTTON,
  GET_ACTIVE_BUTTON,
  GET_PAGE_NUMBER,
  SET_PAGE_NUMBER,
} from "./constants";
import { StoreType, URLParamsType, CharacterType, PageInfoType } from "./types";

export default {
  [GET_CHARACTER_BY_ID](
    { commit, dispatch }: { commit: Function; dispatch: Function },
    id: number
  ) {
    return axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        commit(SET_CHARACTER, res.data);
        dispatch(GET_EPISODE_INFO, res.data.episode[0]);
      })
      .catch((err) => console.log(err.message));
  },
  [GET_CHARACTERS]({
    commit,
    dispatch,
    state,
  }: {
    commit: Function;
    dispatch: Function;
    state: StoreType;
  }) {
    return axios
      .get("https://rickandmortyapi.com/api/character/", {
        params: state.urlParams,
      })
      .then((res) => {
        commit(SET_CHARACTERS, res.data.results),
          dispatch(GET_PAGE_INFO, res.data.info);
      })
      .catch(
        (err) =>
          err.response.status === 404 && commit(SET_CHARACTERS, { results: [] })
      );
  },
  [GET_URL_PARAMS_FOR_FILTER](
    { commit }: { commit: Function },
    params: URLParamsType
  ) {
    commit(SET_URL_PARAMS, params);
  },
  [ADD_TO_FAVOURITES](
    { commit }: { commit: Function },
    character: CharacterType
  ) {
    commit(SET_TO_FAVOURITES, character);
  },
  [REMOVE_FROM_FAVOURITES]({ commit }: { commit: Function }, id: number) {
    commit(DELETE_FROM_FAVOURITES, id);
  },
  [GET_EPISODE_INFO]({ commit }: { commit: Function }, url: string) {
    return axios
      .get(url)
      .then((res) => commit(SET_EPISODE_INFO, res.data))
      .catch((err) => console.log(err.message));
  },
  [GET_FAVOURITES_FROM_LS]({ commit }: { commit: Function }) {
    const favouritesJson = localStorage.getItem("favourites");
    const favourites =
      favouritesJson !== null ? JSON.parse(favouritesJson) : [];
    commit(UPDATE_FAVOURITES__FROM_LS, favourites);
  },
  [GET_PAGE_INFO]({ commit }: { commit: Function }, data: PageInfoType) {
    commit(SET_PAGE_INFO, data);
  },
  [GET_ACTIVE_BUTTON]({ commit }: { commit: Function }, data: string) {
    commit(SET_ACTIVE_BUTTON, data);
  },
  [GET_PAGE_NUMBER]({ commit }: { commit: Function }, data: number) {
    commit(SET_PAGE_NUMBER, data);
  },
};
