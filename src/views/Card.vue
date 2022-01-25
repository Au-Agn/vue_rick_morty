<template>
  <div v-if="characterItem !== null" class="card">
    <div class="card__info">
      <h3>{{ characterItem.name }}</h3>
      <span>{{ characterItem.species }}</span> -
      <span>{{ characterItem.status }}</span>
      <p>Last known location: {{ characterItem.location.name }}</p>
      <p>First seen in: {{ episode.name }}</p>
      <button>Add to Favourites</button>
    </div>
    <img class="card__image" :src="characterItem.image" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { CHARACTER_ITEM, EPISODE, GET_CHARACTER_BY_ID } from "../store/types";

export default {
  name: "Card",
  computed: {
    ...mapGetters({
      characterItem: `${CHARACTER_ITEM}`,
      episode: `${EPISODE}`,
    }),
  },
  methods: {
    ...mapActions({
      getCharacterById: `${GET_CHARACTER_BY_ID}`,
    }),
  },
  mounted() {
    const id = +this.$route.params.id;
    this.getCharacterById(id);
  },
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  box-shadow: 0 0 8px 0 #e0e0e0;
  margin: 20px;

  &__image {
    width: 200px;
  }
  &__info {
    padding-left: 20px;
  }
}
</style>
