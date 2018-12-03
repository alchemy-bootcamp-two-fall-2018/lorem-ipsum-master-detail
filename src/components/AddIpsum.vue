<template>
  <section>
    <div v-if="!show">
      <button @click="show = true">Add an Ipsum</button>
    </div>
    <div v-else>
      <h2>Add a new Ipsum</h2>
      <IpsumForm
        :onAdd="handleAdd" 
         :onCancel="() => show = false"
      />
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
section {
  padding: 10px;
  background: skyblue;
}
button {
  border-radius: 15px;
  font-size: 1em;
  font-weight: bolder;
  background-color: steelblue;
  color: white;
}
</style>
