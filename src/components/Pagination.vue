<template>
  <div class="pagitation__wrap" v-if="pageInfo">
    <div>Page {{ pageNumber }} of {{ pageInfo.pages }}</div>
    <div class="pagitation">
      <button
        @click="changePage(pageInfo.prev)"
        class="pagitation__item"
        :disabled="pageInfo.prev === null"
      >
        Prev
      </button>
      <button @click="changePage(pageInfo.next)" class="pagitation__item">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  PAGE_INFO,
  FILTER_CHARACTER,
  GET_URL_PARAMS_FOR_FILTER,
} from "../store/types";

export default {
  name: "Pagination",
  data() {
    return {
      pageNumber: 1,
    };
  },
  computed: {
    ...mapGetters({ pageInfo: `${PAGE_INFO}` }),
  },
  methods: {
    ...mapActions({
      filterCharacter: `${FILTER_CHARACTER}`,
      getUrlParamsForFilter: `${GET_URL_PARAMS_FOR_FILTER}`,
    }),
    changePage(url) {
      const newUrl = new URL(url);
      this.pageNumber = url !== null && newUrl.searchParams.get("page");
      this.getUrlParamsForFilter({
        page: this.pageNumber,
      });
      this.filterCharacter();
    },
  },
};
</script>

<style scoped lang="scss">
.pagitation {
  padding-left: 10px;

  &__wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    padding: 16px;
  }
  &__item {
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: inherit;
    margin-left: 10px;

    &-disable {
      color: gray;
    }
  }
}
</style>
