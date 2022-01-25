<template>
  <div class="utils">
    <Filter />
    <Searcher />
  </div>
  <List :characters="currentCharacters" />
  <Pagination />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  CHARACTERS,
  FILTERED_CHARACTERS,
  GET_CHARACTERS,
  GET_FAVOURITES_FROM_LS,
} from "../store/types";
import Pagination from "../components/Pagination.vue";
import Searcher from "../components/Searcher.vue";
import Filter from "../components/Filter.vue";
import List from "../components/List.vue";

export default {
  name: "Characters",
  components: { Searcher, Filter, List, Pagination },
  computed: {
    ...mapGetters({
      characters: `${CHARACTERS}`,
      filteredCharacters: `${FILTERED_CHARACTERS}`,
    }),
    currentCharacters() {
      if (this.filteredCharacters.length) {
        return this.filteredCharacters;
      } else if (this.characters.length) {
        return this.characters;
      } else {
        return [];
      }
    },
  },
  methods: {
    ...mapActions({
      getCharacters: `${GET_CHARACTERS}`,
      getFavouritesFromLs: `${GET_FAVOURITES_FROM_LS}`,
    }),
  },
  mounted() {
    this.getCharacters();
    this.getFavouritesFromLs();
  },
};
</script>

<style scoped lang="scss">
.utils {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid grey;
  background: white;
  padding: 16px;
}
</style>
