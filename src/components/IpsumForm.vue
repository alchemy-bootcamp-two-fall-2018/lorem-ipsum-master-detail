<template>
  <section>
  <form @submit.prevent="onAdd(ipsum)">
    <label>
      <span>Name:</span>
      <input v-model="ipsum.title" required>
    </label>

    <label>
      <span>Author:</span>
      <input v-model="ipsum.author" required>
    </label>

    <label>
      <span>Category</span>
      <input v-model="ipsum.category" required>
    </label>

    <label>
      <span>Body:</span>
      <input v-model="ipsum.body" required>
    </label>

    <label>
      <span></span>
      <button type="submit">Add</button>
      
    </label>

  </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ipsum: {
        title: '',
        author: '',
      }
    };
  },
  props: {
    onAdd: Function,
    onCancel: Function
  }
};
</script>

<style>

</style>
