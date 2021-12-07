<template>
  <div class="utils">
    <Filter />
    <Searcher />
  </div>
  <List :characters="characters" :isAdded="isAdded" />
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
    ...mapGetters(["CHARACTERS", "FILTERED_CHARACTERS", "IS_ADDED"]),
    characters() {
      if (this.FILTERED_CHARACTERS && this.FILTERED_CHARACTERS.length) {
        return this.FILTERED_CHARACTERS;
      } else {
        return this.CHARACTERS;
      }
    },
    isAdded() {
      if (localStorage.getItem("isAdded")) {
        return JSON.parse(localStorage.getItem("isAdded"));
      } else {
        return this.IS_ADDED;
      }
    },
  },
  methods: {
    ...mapActions(["GET_CHARACTERS"]),
  },
  mounted() {
    this.GET_CHARACTERS(this.url);
    localStorage.getItem("isAdded");
  },
  watch: {
    isAdded(value) {
      console.log(value);
    },
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
