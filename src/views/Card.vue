<template>
  <div class="container">
    <div v-if="characterItem !== null" class="card">
      <div class="card__info">
        <h3>{{ characterItem.name }}</h3>
        <span>{{ characterItem.species }}</span> -
        <span>{{ characterItem.status }}</span>
        <p>Last known location: {{ characterItem.location.name }}</p>
        <p>First seen in: {{ episode.name }}</p>
        <button @click="handleButton(characterItem)">
          {{ this.isAdded ? "Remove from Favourites" : "Add to Favourites" }}
        </button>
      </div>
      <img class="card__image" :src="characterItem.image" />
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import {
  CHARACTER_ITEM,
  EPISODE,
  GET_CHARACTER_BY_ID,
  FAVOURITES,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  GET_FAVOURITES_FROM_LS,
} from "../store/types";
import {CharacterType} from '../store/type';

export default {
  name: "Card",
  computed: {
    ...mapGetters({
      characterItem: `${CHARACTER_ITEM}`,
      episode: `${EPISODE}`,
      favourites: `${FAVOURITES}`,
    }),
    isAdded(): boolean {
      const favouritesIds = this.favourites.map((item: CharacterType) => item.id);
      return favouritesIds.some((item: number) => item === this.characterItem.id);
    },
  },
  methods: {
    ...mapActions({
      getCharacterById: `${GET_CHARACTER_BY_ID}`,
      getFavouritesFromLs: `${GET_FAVOURITES_FROM_LS}`,
      addToFavourites: `${ADD_TO_FAVOURITES}`,
      removeFromFavourites: `${REMOVE_FROM_FAVOURITES}`,
    }),
    handleButton(card: CharacterType) {
      return this.isAdded
        ? this.removeFromFavourites(card.id)
        : this.addToFavourites(card);
    },
  },
  mounted() {
    const id = +this.$route.params.id;
    this.getCharacterById(id);
    this.getFavouritesFromLs();
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 90%;
  margin: 0 auto;
}
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
