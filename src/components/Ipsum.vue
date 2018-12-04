<template>
  <section>
    <IpsumDetail v-bind:ipsum="ipsum"/>
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