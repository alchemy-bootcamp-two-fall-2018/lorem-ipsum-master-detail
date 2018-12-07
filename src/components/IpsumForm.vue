<template>
  <section>
    <form @submit.prevent="onAdd(ipsum)">
      <label>
        <span>Title:</span>
        <input v-model="ipsum.title" required>
      </label>

      <label>
        <span>Author:</span>
        <input v-model="ipsum.author" required>
      </label>

      <label>
        <span>Category:</span>
        <input v-model="ipsum.category" required>
      </label>

      <label>
        <span>Body:</span>
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
textarea {
  height: 20px;
}
</style>
