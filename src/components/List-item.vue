<template>
  <div class="list-item">
    <router-link :to="'/characters/' + card.id">
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

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListItem",
  data() {
    return {
      isAdded: false,
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
    ...mapActions(["ADD_TO_FAVOURITES", "REMOVE_FROM_FAVOURITES"]),
    change() {
      return (this.isAdded = !this.isAdded);
    },
    handleButton(card) {
      return this.isAdded ? this.remove(card) : this.add(card);
    },
    add(card) {
      this.ADD_TO_FAVOURITES(card);
      this.change();
    },
    remove(card) {
      this.REMOVE_FROM_FAVOURITES(card.id);
      this.change();
    },
  },
  mounted() {
    if (this.$route.path === "/favourites") {
      this.isAdded = !this.isAdded;
    }
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
