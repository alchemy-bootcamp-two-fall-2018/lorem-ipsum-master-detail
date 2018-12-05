<template>
  <section>
    <div v-if="!show">
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
import IpsumForm from './IpsumForm';

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
    ipsumTypes: Array,
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

<style lang="postcss" scoped>
section {
  background: #aaa;
  padding: 10px;
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
