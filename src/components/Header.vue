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
    <div class="cart">{{ favourites.length }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FAVOURITES } from "../store/types";

export default {
  name: "Header",
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
  color: white;
}
</style>
