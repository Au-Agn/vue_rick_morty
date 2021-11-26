<template>
  <div
    @click="filter(item)"
    class="filter"
    v-for="item in options"
    :key="item.id"
  >
    <a class="filter-btn">{{ item }}</a>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Filter",
  data() {
    return {
      options: ["All", "Human", "Animal", "Alien"],
    };
  },
  methods: {
    ...mapActions(["FILTER_CHARACTER", "GET_URL_PARAMS"]),
    filter(option) {
      const params = `species=${option}`;
      this.GET_URL_PARAMS({species: params});
      this.FILTER_CHARACTER(option);
    },
  },
};
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  border: 1px solid gray;
}
.filter-btn {
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
  &__active {
    background-color: gray;
    color: white;
  }
}
</style>
