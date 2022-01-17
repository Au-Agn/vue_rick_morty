<template>
  <div class="utils">
    <Filter />
    <Searcher />
  </div>
  <List :characters="characters" />
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
  components: { Searcher, Filter, List, Pagination },
  computed: {
    ...mapGetters(["CHARACTERS", "FILTERED_CHARACTERS"]),
    characters() {
      if (this.FILTERED_CHARACTERS.length) {
        return this.FILTERED_CHARACTERS;
      } else if (this.CHARACTERS.length) {
        return this.CHARACTERS;
      } else {
        return [];
      }
    },
  },
  methods: {
    ...mapActions(["GET_CHARACTERS", "GET_FAVOURITES__FROM_LS"]),
  },
  mounted() {
    this.GET_CHARACTERS();
    this.GET_FAVOURITES__FROM_LS();
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
