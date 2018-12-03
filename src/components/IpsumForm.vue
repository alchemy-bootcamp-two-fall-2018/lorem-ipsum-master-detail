<template>
  <section>
    <h3>Add an Ipsum!</h3>
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
        <span>Author URL:</span>
        <input v-model="ipsum.authorURL" required>
      </label>      
      <label>
        <span>Published On:</span>
        <input v-model="ipsum.publishedOn" required>
      </label>
      <label>
        <span>Body Copy:</span>
        <textarea v-model="ipsum.body"></textarea>
      </label>
      <label>
        <span>
          <button type="submit">Add</button>
        </span>
        <button type="button" @click="onCancel">Cancel</button>
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
        category: '',
        author: '',
        authorUrl: '',
        publishedOn: '',
        body:''
      }
    };
  },
  props: {
    onAdd: Function,
    onCancel: Function,
  }
};
</script>

<style>
  span {
    display: flex;
    margin-top: 10px;
  }
</style>
