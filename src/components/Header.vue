<template>
  <div class="header">
    <div class="menu">
      <router-link
        :to="`/${item}`"
        v-for="item in navbar"
        :key="item"
        class="menu_item"
      >
        <a href="#" :class="{ 'is-active': this.$route.path === `/${item}` }">
          {{ item }}
        </a>
      </router-link>
    </div>
    <div class="cart">
      <div class="cart__icon">
        <FavouriteIcon />
      </div>
      <div class="cart__count">{{ favourites.length }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FAVOURITES } from "../store/types";
import FavouriteIcon from "../assets/icons/FavouriteIcon";

export default {
  name: "Header",
  components: { FavouriteIcon },
  data() {
    return {
      navbar: ["Characters", "Favourites"],
    };
  },
  computed: {
    ...mapGetters({ favourites: `${FAVOURITES}` }),
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
  cursor: pointer;

  &:hover {
    color: black;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: grey;
  padding: 16px;
}
.menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.menu_item {
  margin-left: 10px;
}
.is-active {
  color: black;
}
.cart {
  display: flex;
  align-items: center;

  &__count {
    padding-left: 5px;
  }
  &__icon {
    height: 25px;
    width: 25px;
  }
}
</style>
