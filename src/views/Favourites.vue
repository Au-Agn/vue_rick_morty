<template>
  <List :characters="favourites" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { FAVOURITES, GET_FAVOURITES__FROM_LS } from "../store/types";
import List from "../components/List.vue";

export default {
  name: "Favourites",
  components: { List },
  computed: {
    ...mapGetters({
      favourites: `${FAVOURITES}`,
    }),
  },
  methods: {
    ...mapActions({
      getFavouritesFromLs: `${GET_FAVOURITES__FROM_LS}`,
    }),
  },
  mounted() {
    this.getFavouritesFromLs();
  },
};
</script>

<style scoped lang="scss"></style>
