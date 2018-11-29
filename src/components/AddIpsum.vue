<template>
   <section>
    <div v-if="!show">
      <button @click="show = true">Add an Ipsum</button>
    </div>
    <div v-else>
      <h2>Add a new Ipsum</h2>
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
