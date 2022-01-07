<template>
  <div class="pagitation__wrap" v-if="PAGE_INFO">
    <div>Page {{ pageNumber }} of {{ PAGE_INFO.pages }}</div>
    <div class="pagitation">
      <button
        @click="changePage(PAGE_INFO.prev)"
        class="pagitation__item"
        :disabled="PAGE_INFO.prev === null"
      >
        Prev
      </button>
      <button @click="changePage(PAGE_INFO.next)" class="pagitation__item">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Pagination",
  data() {
    return {
      pageNumber: 1,
    };
  },
  computed: {
    ...mapGetters(["PAGE_INFO"]),
  },
  methods: {
    ...mapActions(["FILTER_CHARACTER", "GET_PAGE_NUMBER"]),
    changePage(url) {
      const newUrl = new URL(url);
      this.pageNumber = url !== null && newUrl.searchParams.get("page");
      this.GET_PAGE_NUMBER(this.pageNumber);
      this.FILTER_CHARACTER();
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
