<template>
    <section>
        <form @submit.prevent="onAdd(ipsum)">
            <label>
                <span>Name:</span>
                <input v-model="ispsum.name" required>
            </label>
            <label>
                <span>Author:</span>
                <input v-model="ispsum.author" required>
            </label>
                <label>
                <span>Category:</span>
                <input v-model="ispsum.category" required>
            </label>
            <label>
                <span>Body:</span>
                <textarea v-model="ispsum.body" required></textarea>
            </label>
            <label>
            <span></span>
            <button type="submit">{{ Add }}</button>
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
    onAdd: Function
  }
};
</script>

<style>
  span {
    width: 150px;
    display: inline-block;
  }
  input, textarea {
    width: 300px;
  }
  label {
    display: flex;
    padding: 10px;
    font-size: 2em;
    font-weight: 2pt;
  }
  textarea {
    height: 100px;
  }
</style>