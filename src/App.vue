<template>
  <div id="app">
    <Header />
      <router-view />
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: { Header },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
