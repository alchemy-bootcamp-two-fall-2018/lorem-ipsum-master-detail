<template>
  <section>
    <form @submit.prevent="onAdd(ipsum)">
      <label>
        <span>Name:</span>
        <input v-model="ispsum.title" required>
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

      <label class="button">
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
form {
  display: flex;
  text-align: center;
}
span {
  width: 150px;
  display: inline-block;
}
input, textarea {
  width: 200px;
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
 @media only screen and (max-width: 1160px) {
    form {
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 5%;
    }
    span {
      width: 60px;
    }
    input, textarea {
    width: 40vw;
    height: 20px;
    }
  }
</style>