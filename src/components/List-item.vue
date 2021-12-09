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
          {{
            isAdded[card.id] ? "Remove from Favourites" : "Add to Favourites"
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListItem",
  props: {
    card: {
      type: Object,
      default() {
        return {};
      },
    },
    isAdded: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(["FAVOURITES", "IS_ADDED"]),
  },
  methods: {
    ...mapActions(["ADD_TO_FAVOURITES", "REMOVE_FROM_FAVOURITES"]),
    handleButton(card) {
      return this.isAdded[card.id]
        ? this.REMOVE_FROM_FAVOURITES(card.id)
        : this.ADD_TO_FAVOURITES(card);
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
