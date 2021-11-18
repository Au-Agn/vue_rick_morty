<template>
  <div class="filter">
    <a class="filter-btn filter-btn__active">All</a>
    <a class="filter-btn">Human</a>
    <a class="filter-btn">Animal</a>
    <a class="filter-btn">Alien</a>
  </div>
</template>

<script>
export default {
  name: "Filter",
};
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  border: 1px solid gray;
}
.filter-btn {
  padding: 5px 10px;
  border-right: 1px solid gray;
  cursor: pointer;

  &:last-child {
    border: 0;
  }
  &:hover {
    background-color: gray;
    color: white;
  }
  &__active {
    background-color: gray;
    color: white;
  }
}
</style>
