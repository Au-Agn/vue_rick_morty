<template>
  <div class="list-item">
    <router-link :to="'/characters/' + card.id">
      <img class="list-item__image" :src="card.image" />
    </router-link>
    <div class="list-item__info">
      <h4>{{ card.name }}</h4>
      <span>{{ card.species }}</span> - <span>{{ card.status }}</span>
      <button @click="addToFavourites(card)">
        {{ this.isSelected ? "Remove to Favourites" : "Add to Favourites" }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListItem",
  data() {
    return {
      isSelected: false,
    };
  },
  props: {
    card: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapGetters(["FAVOURITES"]),
  },
  methods: {
    ...mapActions(["ADD_CHARACTER_TO_FAVOURITES"]),
    check(card) {
      const ids = this.FAVOURITES.map((item) => item.id);
      return ids.includes(card.id)
        ? this.isSelected = !this.isSelected 
        : this.isSelected
    },
    addToFavourites(card) {
      this.check(card);
      this.ADD_CHARACTER_TO_FAVOURITES(card);
    },
  },
};
</script>

<style scoped lang="scss">
.list-item {
  flex-basis: 20%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding-bottom: 10px;
  margin: 10px;

  &__image {
    width: 100%;
  }

  &__info {
    padding-top: 10px;
    text-align: center;
  }
}
</style>
