<template>
  <div class="search-field">
    <input
      type="text"
      v-model="searchValue"
      @keypress.enter="search(searchValue)"
    />
    <button @click="search(searchValue)" class="search_btn">search</button>
  </div>
</template>

<script>
export default {
  name: "Searcher",
  data() {
    return {
      searchValue: "",
      filteredCards: [],
    };
  },
  props: {
    characters: {
      // type: Array,
      default: [],
    },
  },
  methods: {
    search(value) {
      if (value) {
        this.filteredCards = this.characters.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
        this.$emit("showSearchValue", this.filteredCards);
      } else {
        return this.$emit("showSearchValue", []);
      }
    },
  },
  watch: {
    searchValue(value) {
      if (!value.length) {
        return this.$emit("showSearchValue", []);
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
}
</style>
