<template>

  <section>

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
      <br>

        <label>
          <span>Author Url:</span>
            <input v-model="ipsum.authorUrl" required>
        </label>

      <label>
        <span>Published on:</span>
            <input v-model="ipsum.publishedOn" required>
      </label>

      <label>
        <span>Body:</span>
        <textarea v-model="ipsum.body" required></textarea>
      </label>

      <label>
        <span></span>
        <button type="submit">Add</button>
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
                body: ''
            },
            show:false
        };
    },
    props: {
        onAdd: Function,
        onCancel: Function
    }
};
</script>

<style scoped>
  form {
    text-align: center;
    margin-left: 20%;
  }

   button {
    border: 2px solid white;
    border-radius: 5px;
    margin: 5px;
    font-size: 0.75em;
    padding: 6px;
    background-color: steelblue;
    color: white;
  }
  span {
    width: 190px;
    display: inline-block;
  }
  label {
    display: flex;
    padding: 5px;
    font-size: 1.1em;
    font-weight: 500;
  }
  input, textarea {
    width: 450px;
  }
  textarea {
    height: 50px;
  }
</style>

