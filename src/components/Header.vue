<template>
  <header>
    <label>
      Title:
      <input type="text" v-model="filter.title">
    </label>
    <label>
      Category:
      <select v-model="filter.type">
        <option value="">All</option>
        <option
            v-for="type in types"
            v-bind:key="type"
            v-bind:value="type">
            {{type}}
        </option>
      </select>
    </label>
  </header>
</template>

<script>
export default {
    props: {
        filter: Object
    }
};
</script>

<style scoped>

</style>
