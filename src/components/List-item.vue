<template>
  <div class="list-item">
    <router-link :to="'/Characters/' + card.id">
      <img class="list-item__image" :src="card.image" />
    </router-link>
    <div class="list-item__info">
      <div>
        <span>{{ card.name }}</span>
      </div>
      <div>
        <span>{{ card.species }}</span> - <span>{{ card.status }}</span>
      </div>
      <div>
        <button @click="handleButton(card)">
          {{ this.isAdded ? "Remove from Favourites" : "Add to Favourites" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import {
  FAVOURITES,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../store/constants";
import { CharacterType } from "../store/types";

export default defineComponent({
  name: "ListItem",
  props: {
    card: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters({ favourites: `${FAVOURITES}` }),
    isAdded(): boolean {
      const favouritesIds = this.favourites.map(
        (item: CharacterType) => item.id
      );
      return favouritesIds.some((item: number) => item === this.card.id);
    },
  },
  methods: {
    ...mapActions({
      addToFavourites: `${ADD_TO_FAVOURITES}`,
      removeFromFavourites: `${REMOVE_FROM_FAVOURITES}`,
    }),
    handleButton(card: CharacterType) {
      return this.isAdded
        ? this.removeFromFavourites(card.id)
        : this.addToFavourites(card);
    },
  },
});
</script>

<style scoped lang="scss">
.list-item {
  border: 1px solid #e0e0e0;
  box-shadow: 0 0 8px 0 #e0e0e0;

  &__image {
    width: 100%;
  }

  &__info {
    padding: 10px 0;
    text-align: center;
  }
}
</style>
