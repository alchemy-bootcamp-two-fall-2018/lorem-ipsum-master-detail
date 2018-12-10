<template>
  <section>
    <div v-if="!show">
      <button @click="show = true">Add an Ipsum</button>
    </div>
    <div v-else>
      <h2>Add an Ipsum</h2>
      <IpsumForm
        :onAdd="onAdd"
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
    onAdd: Function,
  },
};
</script>

<style>
section {
  background: #aaa;
  padding: 10px;
}
</style>

