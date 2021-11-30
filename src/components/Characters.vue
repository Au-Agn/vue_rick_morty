<template>
  <div class="utils">
    <Filter />
    <Searcher />
  </div>
  <List :characters="this.availableCharacters" />
  <Pagination />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Pagination from "./Pagination.vue";
import Searcher from "./Searcher.vue";
import Filter from "./Filter.vue";
import List from "./List.vue";

export default {
  name: "Characters",
  data() {
    return {
      url: "https://rickandmortyapi.com/api/character",
    };
  },
  components: { Searcher, Filter, List, Pagination },
  computed: {
    ...mapGetters(["CHARACTERS", "FILTERED_CHARACTERS"]),
    availableCharacters() {
      if (this.FILTERED_CHARACTERS.length) {
        return this.FILTERED_CHARACTERS;
      } else {
        return this.CHARACTERS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_CHARACTERS"]),
  },
  mounted() {
    this.GET_CHARACTERS(this.url);
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
  // position: fixed;
  // width: 100%;
  // top: 50px;
}
</style>
