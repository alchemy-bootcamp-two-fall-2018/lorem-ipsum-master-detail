<template>
    <form @submit.prevent="onAdd(ipsum)">
    <label>
      <span>Title:</span>
      <input v-model="ipsum.title" required>
    </label>
    <label>
      <span>Category: </span>
      <input v-model="ipsum.category" required>
    </label>
   <label>
      <span>Author: </span>
      <input v-model="ipsum.author" required>
    </label>
    <label>
      <span>Author URL: </span>
      <input v-model="ipsum.authorUrl" required>
    </label> 
    <label>
      <span>Published On: </span>
      <input v-model="ipsum.publishedOn" required>
    </label>
    <label>
      <span>Body Copy: </span>
      <input v-model="ipsum.body" required>
    </label>
  </form>
</template>

<script>
export default {
};
</script>

<style>

</style>
