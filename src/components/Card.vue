<template>
  <div  v-if="CHARACTER_ITEM" class="card">
    <div class="card__info">
      <h3>{{ CHARACTER_ITEM.name }}</h3>
      <span>{{ CHARACTER_ITEM.species }}</span> -
      <span>{{ CHARACTER_ITEM.status }}</span>
      <p>Last known location: {{ CHARACTER_ITEM.location.name }}</p>
      <p>First seen in: {{ CHARACTER_ITEM.location.name }}</p>
      <button>Add to Favourites</button>
    </div>
    <img class="card__image" :src="CHARACTER_ITEM.image" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Card",
  computed: {
    ...mapGetters(["CHARACTER_ITEM"]),
  },
  methods: {
    ...mapActions(["GET_CHARACTER_BY_ID"]),
  },
  mounted() {
    const id = +this.$route.params.id;
    this.GET_CHARACTER_BY_ID(id);
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
