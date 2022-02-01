<template>
  <List :characters="favourites" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import { FAVOURITES, GET_FAVOURITES_FROM_LS } from "../store/constants";
import List from "../components/List.vue";

export default defineComponent({
  name: "Favourites",
  components: { List },
  computed: {
    ...mapGetters({
      favourites: `${FAVOURITES}`,
    }),
  },
  methods: {
    ...mapActions({
      getFavouritesFromLs: `${GET_FAVOURITES_FROM_LS}`,
    }),
  },
  mounted() {
    this.getFavouritesFromLs();
  },
});
</script>

<style scoped lang="scss"></style>
