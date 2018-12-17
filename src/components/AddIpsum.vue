<template>
  <section>
    <div v-if="!show">
      <button @click="show = true">Add an Ipsum</button>
    </div>
    <div v-else>
      <h2>Add a new Ipsum</h2>
      <IpsumForm
        :ipsumTypes="ipsumTypes"
        :onAdd="handleAdd"
        :onCancel="() => show = false" />
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
        ipsumTypes: Array,
        onAdd: Function
    },
    methods: {
        handleAdd(ipsum) {
            console.log(ipsum);
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
</style>
