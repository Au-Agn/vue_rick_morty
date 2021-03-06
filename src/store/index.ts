import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";


export default createStore({
  state: {
    characters: [],
    characterItem: null,
    favourites: [],
    urlParams: null,
    isExistsInFavourites: false,
    pageInfo: null,
    episode: null,
    activeBtn: 'All',
    pageNumber: 1
  },
  mutations,
  actions,
  getters,
});
