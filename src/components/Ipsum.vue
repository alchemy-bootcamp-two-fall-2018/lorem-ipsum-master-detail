<template>
  <section>
    <div v-if="!show">
      <button @click="show = true"> Add Ipsum</button>
    </div>
    <div v-else>
      <h2>Add a new Ipsum</h2>
      <IpsumForm v-show="true" v-bind:ipsum="ipsum"/>
    </div>
    <IpsumForm/>
    <IpsumDetail/>
  </section>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';
import IpsumForm from './IpsumForm.vue';
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    ipsum: Object,
    onAdd: Function
  },
  components: {
    IpsumDetail,
    IpsumForm
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