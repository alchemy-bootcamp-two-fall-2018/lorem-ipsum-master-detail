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
            <span>Website:</span>
            <input type="test" v-model="ipsum.authorUrl" required>
        </label>
        <label>
            <span>Publication Date:</span>
            <input type="date" v-model="ipsum.publishedOn" required>
        </label>
        <label>
            <span>Author Details:</span>
            <input v-model="ipsum.body" required>
        </label>
        <label>
            <span></span>
            <button type="submit">{{ AddIpsum ? 'Update' : 'Add' }}</button>
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
        title: update.title || '',
        category: update.catgory || '',
        author: update.author || '',
        website: update.authorUrl || '',
        publicationDate: update.publishedOn || '',
        body: update.body || ''
      }
    };
  },
  props: {
    onAdd: Function,
    onCancel: Function,
    ipsumToUpdate: Object
  }
};
</script>

<style>

</style>
