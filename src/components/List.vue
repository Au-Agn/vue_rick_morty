<template>
  <div class="list" v-if="characters.length">
    <ListItem 
      v-for="item in characters" 
      :card="item" 
      :key="item.id"
    />
  </div>
  <p v-else>No characters</p>
</template>

<script>
import ListItem from "./List-item.vue";

export default {
  name: "List",
  components: { ListItem },
  props: {
    characters: {
      type: Array,
      default: null,
    }
  },
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
</style>
