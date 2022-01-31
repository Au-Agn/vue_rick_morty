<template>
  <div class="filter">
    <a
      v-for="item in options"
      :key="item.id"
      class="filter_btn"
      :class="{ 'filter_btn-active': item === activeBtn }"
      @click="filter(item)"
    >
      {{ item }}
    </a>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { FILTER_CHARACTER, GET_URL_PARAMS_FOR_FILTER } from "../store/types";

export default {
  name: "Filter",
  data() {
    return {
      options: ["All", "Human", "Animal", "Alien"],
      activeBtn: "All",
    };
  },
  methods: {
    ...mapActions({
      filterCharacter: `${FILTER_CHARACTER}`,
      getUrlParamsForFilter: `${GET_URL_PARAMS_FOR_FILTER}`,
    }),
    filter(item) {
      this.activeBtn = item;
      const species = item !== "All" ? item : null;
      this.getUrlParamsForFilter({ species });
      this.filterCharacter();
    },
  },
};
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  border: 1px solid gray;
  border-radius: 3px;
}
.filter_btn {
  padding: 5px 10px;
  border-right: 1px solid gray;
  cursor: pointer;

  &:last-child {
    border: 0;
  }
  &:hover {
    background-color: gray;
    color: white;
  }
  &-active {
    background-color: gray;
    color: white;
  }
}
</style>
