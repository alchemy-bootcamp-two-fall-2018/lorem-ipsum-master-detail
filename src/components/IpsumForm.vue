<template>
  <form @submit.prevent="onAdd(ipsum)">
    <label>
      <span>Name:</span>
      <input v-model="ipsum.name" required>
    </label>
    <label>
      <span>Author:</span>
      <input v-model="ipsum.author" required>
    </label>
    <label>
      <span>Size:</span>
      <input v-model="ipsum.authorUrl" required>
    </label>
    <label>
      <span>Body:</span>
      <input v-model="ipsum.body" required>
    </label>
    <label>
      <span></span>
      <button type="submit">{{ ipsumToUpdate ? 'Update' : 'Add'}}</button>
      <button type="button" @click="onCancel">Cancel</button>
    </label>
  </form>
</template>

<script>

export default {
  data() {
    const update = this.ipsumToUpdate || {};
    return {
      ipsum: {
        name: update.name,
        author: update.author,
        authorUrl: update.authorUrl,
        body: update.body
      }
    };
  },

  props: {
    animalTypes: Array,
    onAdd: Function,
    onCancel: Function,
    animalToUpdate: Object
  },
};
</script>

<style>

</style>
