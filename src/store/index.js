import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default createStore({
  state: {
    characters: [],
    characterItem: null,
    filteredCharacters: [],
    favourites: [],
    urlParams: {},
    isExistsInFavourites: false,
    pageInfo: null,
    episode: null
  },
  mutations,
  actions,
  getters,
});
