<template>
  <div class="search-field">
    <input type="text" v-model="searchValue" @keypress.enter="search(searchValue)" />
    <button @click="search(searchValue)" class="search_btn">search</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { GET_URL_PARAMS_FOR_FILTER, FILTER_CHARACTER } from "../store/types";

export default {
  name: "Searcher",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    ...mapActions({
      getUrlParamsForFilter: `${GET_URL_PARAMS_FOR_FILTER}`,
      filterCharacter: `${FILTER_CHARACTER}`,
    }),
    search(value) {
      this.getUrlParamsForFilter({
        name: this.searchValue.length ? value : null,
      });
      this.filterCharacter();
    },
  },
  watch: {
    searchValue(value) {
      if (!value.length) {
        this.search(null);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.search-field {
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search_btn {
  background: transparent;
  border: 0;
  cursor: pointer;
  margin-left: 5px;
  padding: 3px;

  &:hover {
    background-color: gray;
    color: white;
    border-radius: 3px;
  }
}
</style>
