<template>
  <section class="form-section">
    <div v-if="!show">
      <p> Click to create new ipsum </p>
      <button @click="show = true">Add an Ipsum</button>
    </div>
    <div v-else>
      <h2>Add New Ipsum</h2>
      <IpsumForm class="form"
      
        :onAdd="handleAdd"
        :onCancel="() => show = false"/>
    </div>
  </section>
</template>

<script>
import IpsumForm from './IpsumForm.vue';
export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    IpsumForm
  },
  props: {
    onAdd: Function
  },
  methods: {
    handleAdd(ipsum) {
      this.show = false;
      this.onAdd(ipsum);
    }
  }
};
</script>

<style scoped>
.form-section {
  background: #aaa;
  padding: 10px;
  border: 4px black;
}

button {
  border: 2px red;
  margin: 4px;
  font-size: 1em;
}
.form {
  margin: auto;
  padding: 2px;
}
</style>
