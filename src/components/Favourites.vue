<template>
  <List :characters="FAVOURITES" />
</template>

<script>
import { mapGetters } from "vuex";
import List from "./List.vue";

export default {
  name: "Favourites",
  components: { List },
  computed: {
    ...mapGetters(["FAVOURITES"]),
  },
  update() {
    console.log(this.FAVOURITES);
  }
};
</script>

<style scoped lang="scss"></style>
