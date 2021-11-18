<template>
  <div class="utils">
    <Filter />
    <Searcher :characters="CHARACTERS" @showSearchValue="showSearchValue" />
  </div>
  <List :characters="this.availableCharacters" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Searcher from "./Searcher.vue";
import Filter from "./Filter.vue";
import List from "./List.vue";

export default {
  name: "Characters",
  data() {
    return {
      filteredCards: [],
    };
  },
  components: { Searcher, Filter, List },
  computed: {
    ...mapGetters(["CHARACTERS"]),
    availableCharacters() {
      if (this.filteredCards.length) {
        return this.filteredCards;
      } else {
        return this.CHARACTERS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_CHARACTERS"]),
    showSearchValue(data) {
      this.filteredCards = data;
    },
  },
  mounted() {
    this.GET_CHARACTERS();
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
