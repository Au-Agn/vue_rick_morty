<template>
  <div class="container">
    <div class="list" v-if="characters.length">
      <ListItem 
        v-for="item in characters" 
        :card="item" 
        :key="item.id"
      />
    </div>
    <p v-else>no cards</p>
  </div>
</template>

<script lang="ts">
import ListItem from "./List-item.vue";

export default {
  name: "List",
  components: { ListItem },
  props: {
    characters: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 90%;
  margin: 0 auto;
}
.list {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 20px;
  margin-top: 30px;
}
</style>
