import {
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
import {
  StoreType,
  CharacterType,
  PageInfoType,
  URLParamsType,
  EpisodeType,
} from "./type";

export default {
  [SET_CHARACTERS]: (state: StoreType, data: CharacterType[]) => {
    state.characters = data;
  },
  [SET_PAGE_INFO]: (state: StoreType, data: PageInfoType) => {
    state.pageInfo = data;
  },
  [SET_CHARACTER]: (state: StoreType, data: CharacterType) => {
    state.characterItem = data;
  },
  [SET_FILTERED_CHARACTERS]: (state: StoreType, data: CharacterType[]) => {
    state.filteredCharacters = data;
  },
  [SET_URL_PARAMS]: (state: StoreType, data: URLParamsType) => {
    state.urlParams = { ...state.urlParams, ...data };
  },
  [SET_TO_FAVOURITES]: (state: StoreType, data: CharacterType) => {
    const ids = state.favourites.map((item) => item.id);
    if (state.favourites.length) {
      if (ids.includes(data.id)) {
        state.isExistsInFavourites = true;
      } else {
        state.isExistsInFavourites = false;
      }
      if (!state.isExistsInFavourites) {
        state.favourites.push(data);
        localStorage.setItem("favourites", JSON.stringify(state.favourites));
      }
    } else {
      state.favourites.push(data);
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    }
  },
  [DELETE_FROM_FAVOURITES]: (state: StoreType, id: number) => {
    const newData = state.favourites.filter(
      (item: CharacterType) => item.id !== id
    );
    state.favourites = newData;
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  },
  [UPDATE_FAVOURITES__FROM_LS]: (state: StoreType, data: CharacterType[]) => {
    state.favourites = data;
  },
  [SET_EPISODE_INFO]: (state: StoreType, data: EpisodeType) => {
    state.episode = data;
  },
};
