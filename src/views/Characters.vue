<template>
  <div class="utils">
    <Filter />
    <Searcher />
  </div>
  <List :characters="currentCharacters" />
  <Pagination />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import Pagination from "../components/Pagination.vue";
import Searcher from "../components/Searcher.vue";
import Filter from "../components/Filter.vue";
import List from "../components/List.vue";
import {
  CHARACTERS,
  GET_CHARACTERS,
  GET_FAVOURITES_FROM_LS,
} from "../store/constants";

export default defineComponent({
  name: "Characters",
  components: { Searcher, Filter, List, Pagination },
  computed: {
    ...mapGetters({
      characters: `${CHARACTERS}`,
    }),
    currentCharacters() {
      if (this.characters.length) {
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
});
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
