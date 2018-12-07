<template>
  <section>
    <form @submit.prevent="onAdd(ipsum)">
      <label>
        Name:
        <input v-model="ipsum.title" required>
      </label>

      <label>
        Author:
        <input v-model="ipsum.author" required>
      </label>

      <label>
        Category:
        <input v-model="ipsum.category" required>
      </label>

      <label>
        Body:
        <textarea v-model="ipsum.body" required></textarea>
      </label>

      <label>
        <button type="submit">Add</button>
        <button @click="onCancel" type="button">Cancel</button>
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
        author: ''
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
