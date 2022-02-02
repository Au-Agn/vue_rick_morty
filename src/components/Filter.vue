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

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";
import {
  GET_CHARACTERS,
  GET_URL_PARAMS_FOR_FILTER,
  GET_ACTIVE_BUTTON,
  ACTIVE_BUTTON,
} from "../store/constants";

export default defineComponent({
  name: "Filter",
  data() {
    return {
      options: ["All", "Human", "Animal", "Alien"],
    };
  },
  computed: {
    ...mapGetters({
      activeBtn: `${ACTIVE_BUTTON}`,
    }),
  },
  methods: {
    ...mapActions({
      getCharacters: `${GET_CHARACTERS}`,
      getUrlParamsForFilter: `${GET_URL_PARAMS_FOR_FILTER}`,
      getActiveButton: `${GET_ACTIVE_BUTTON}`,
    }),
    filter(item: string) {
      const species = item !== "All" ? item : null;
      this.getUrlParamsForFilter({ species });
      this.getActiveButton(item);
      this.getCharacters();
    },
  },
});
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
