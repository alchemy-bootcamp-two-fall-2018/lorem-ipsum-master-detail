<template>
    <form @submit.prevent="onAdd(ipsum)">
    <label>
      <span>Title:</span>
      <input v-model="ipsum.title" required>
    </label>
    <label>
      <span>Category:</span>
      <input v-model="ipsum.category" required>
    </label>
    <label>
      <span>Author:</span>
      <input v-model="ipsum.author" required>
    </label>
    <label>
      <span>Example:</span>
      <input v-model="ipsum.body" required>
    </label>
    <label>
      <button type="submit">Add</button>
      <button type="button" @click="onCancel">Cancel</button>
    </label>
  </form>
</template>

<script>
export default {
    props: {
        onAdd: Function,
        onCancel: Function
    },
    data() {
        return {
            ipsum: {
                title: '',
                category: '',
                author: '',
                example: ''
            }
        };
    }
};
</script>

<style>

</style>
