<template>
  <List :characters="favourites" />
</template>

<script>
import { mapGetters } from "vuex";
import List from "./List.vue";

export default {
  name: "Favourites",
  data() {
    return {
      favourites: [],
    };
  },
  components: { List },
  computed: {
    ...mapGetters(["FAVOURITES"]),
  },
  mounted() {
    if (localStorage.getItem("favourites")) {
      this.favourites = JSON.parse(localStorage.getItem("favourites"));

    } else {
      this.favourites = this.FAVOURITES;
    }
  },
};
</script>

<style scoped lang="scss"></style>
