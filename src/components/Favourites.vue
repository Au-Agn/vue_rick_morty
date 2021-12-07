<template>
  <List :characters="favourites" :isAdded="isAdded" />
</template>

<script>
import { mapGetters } from "vuex";
import List from "./List.vue";

export default {
  name: "Favourites",
  components: { List },
  computed: {
    ...mapGetters(["FAVOURITES", "IS_ADDED"]),
    isAdded() {
      if (localStorage.getItem("isAdded")) {
        return JSON.parse(localStorage.getItem("isAdded"));
      } else {
        return this.IS_ADDED;
      }
    },
    favourites() {
      if (localStorage.getItem("favourites")) {
        return JSON.parse(localStorage.getItem("favourites"));
      } else {
        return this.FAVOURITES;
      }
    },
  },
  mounted() {
    localStorage.getItem("isAdded");
    localStorage.getItem("favourites");
  },
};
</script>

<style scoped lang="scss"></style>
