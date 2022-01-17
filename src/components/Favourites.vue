<template>
  <List :characters="FAVOURITES" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import List from "./List.vue";

export default {
  name: "Favourites",
  components: { List },
  computed: {
    ...mapGetters(["FAVOURITES"]),
  },
  methods: {
    ...mapActions(["GET_FAVOURITES__FROM_LS"]),
  },
  mounted() {
    this.GET_FAVOURITES__FROM_LS();
  },
};
</script>

<style scoped lang="scss"></style>
