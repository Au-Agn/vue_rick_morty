import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";


export default createStore({
  state: {
    characters: [],
    characterItem: {},
    filteredCharacters: [],
    favourites: [],
    urlParams: {},
    isExistsInFavourites: false,
    pageInfo: {},
    episode: {},
  },
  mutations,
  actions,
  getters,
});