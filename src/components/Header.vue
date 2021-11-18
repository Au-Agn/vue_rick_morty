<template>
  <div class="header">
    <div class="menu">
      <router-link :to="'/characters'">
        <a href="#">Characters</a>
      </router-link>
      <router-link :to="'/favourites'">
        <a class="menu__item" href="#">Favourites</a>
      </router-link>
    </div>
    <div class="cart">{{FAVOURITES.length}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["FAVOURITES"])
  }
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
  // position: fixed;
  // width: 100%;
  // top: 0;
}
.menu__item {
  margin-left: 30px;
  // display: flex;
  // justify-content: flex-end;
  // align-items: center;
}
.cart {
  display: flex;
  color: white;
  // justify-content: space-between;
}
</style>
