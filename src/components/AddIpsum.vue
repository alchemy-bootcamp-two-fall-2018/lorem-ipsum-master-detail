<template>
  <section>
    <div v-if="!show">
      <button @click="show = true">Add an Ipsum</button>
    </div>
    <div v-else>
      <h2>Add a new Ipsum</h2>
      <IpsumForm
        :ipsums="ipsums"
        :onAdd="handleAdd" />
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
        ipsums: Array,
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
}
button {
  border-radius: 15px;
}
</style>
