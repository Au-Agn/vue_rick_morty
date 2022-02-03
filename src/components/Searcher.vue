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

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";
import {
  GET_URL_PARAMS_FOR_FILTER,
  GET_CHARACTERS,
  URL_PARAMS,
} from "../store/constants";

export default defineComponent({
  name: "Searcher",
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    ...mapGetters({
      urlParams: `${URL_PARAMS}`,
    }),
  },
  methods: {
    ...mapActions({
      getUrlParamsForFilter: `${GET_URL_PARAMS_FOR_FILTER}`,
      getCharacters: `${GET_CHARACTERS}`,
    }),
    search(value: string | null) {
      this.getUrlParamsForFilter({
        name: this.searchValue.length ? value : null,
      });
      this.getCharacters();
    },
  },
  watch: {
    searchValue(value: string) {
      if (!value.length) {
        this.search(null);
      }
    },
  },
  mounted() {
    if (this.urlParams !== null) {
      this.searchValue = this.urlParams.name;
    }
  },
});
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
