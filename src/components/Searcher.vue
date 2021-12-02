<template>
  <div class="search-field">
    <input type="text" v-model="searchValue" @keypress.enter="search(params)" />
    <button @click="search(params)" class="search_btn">search</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Searcher",
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    params() {
      return `name=${this.searchValue}`;
    },
  },
  methods: {
    ...mapActions(["GET_URL_PARAMS_FOR_FILTER", "FILTER_CHARACTER"]),
    search(value) {
      this.GET_URL_PARAMS_FOR_FILTER({
        name: this.searchValue.length ? value : null,
      });
      this.FILTER_CHARACTER();
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
