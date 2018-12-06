<template>
  <section>
    <h3>CONTRIBUTE &amp; ADD AN IPSUM</h3>
    <form @submit.prevent="onAdd(ipsum)">
    <label>
      <span>TITLE:</span>
      <input v-model="ipsum.title" required>
    </label>
    <label>
      <span>CATEGORY:</span>
      <input v-model="ipsum.category" required>
    </label>
    <label>
      <span>AUTHOR:</span>
      <input v-model="ipsum.author" required>
    </label>
    <label>
      <span>BODY:</span>
      <input v-model="ipsum.body" required>
    </label>
    <label>
        <button type="submit">Add IT!</button>
        <button type="button" @click="onCancel">OR NOT?</button>
      </label>
    </form>
  </section>
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
        body:''
      }
    };
  }
};
</script>

<style>
  span {
    display: flex;
    margin-top: 5px;
  }
</style>