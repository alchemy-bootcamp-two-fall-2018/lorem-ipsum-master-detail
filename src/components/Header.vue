// In progress
<template>
  <header>
    <label>
      Title:
      <input type="text" v-model="filter.name">
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

    <label>
      Sort By:
      <select v-model="sort.field">
        <optgroup label="Select">
          <option value="asdf">Title</option>
        </optgroup>
      </select>
      <select v-model="sort.direction">
        <optgroup label="Select">
          <option value="1">Asc</option>
          <option value="-1">Desc</option>
        </optgroup>
      </select>
    </label>
  </header>
</template>

<script>
export default {
    props: {
        filter: Object,
        types: Array,
        sort: Object
    }
};
</script>

<style scoped>

</style>
