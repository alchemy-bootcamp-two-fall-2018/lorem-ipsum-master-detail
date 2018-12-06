<template>
   <section>
    <div v-if="!show">
      <button @click="show = true">ADD IT!</button>
    </div>
    <div v-else>
      <h2>ADD YOUR OWN IPSUM</h2>
      <IpsumForm
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

<style>
</style>