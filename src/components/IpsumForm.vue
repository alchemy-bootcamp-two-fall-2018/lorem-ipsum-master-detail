<template>
  <form @submit.prevent="onAdd(ipsum)">
    <label>
      <span>Title:</span>
      <input type="text" v-model="ipsum.title" required>
    </label>

    <label>
      <span>Author:</span>
      <input type="text" v-model="ipsum.author" required>
    </label>

    <label>
        <button type="submit">{{ ipsumToUpdate ? 'Update' : 'Add' }}</button>
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
                author: update.author || ''
            }
        };
    },
    props: {
        ipsumTypes: Array,
        onAdd: Function,
        onCancel: Function,
        ipsumToUpdate: Object
    }
};
</script>

<style lang="postcss" scoped>
section {
  background: #aaa;
  padding: 10px;
  label {
    display: flex;
    padding: 3px;
    span {
      display: inline-block;
      width: 90px;
    }
    textarea, input, select {
      width: 200px;
    }
    textarea {
      height: 75px;
    }
  }
}
</style>
