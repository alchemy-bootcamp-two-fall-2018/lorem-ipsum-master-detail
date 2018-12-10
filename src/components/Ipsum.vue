<template>
    <div>
        <IpsumDetail
        :ipsum="ipsum"/>   
    </div>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';

export default {
  data() {
    return {
      add: false
    };
  },
  components: {
    IpsumDetail
  },
  props: {
    ipsum: Object,
    onAdd: Function
  },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    }
  }
};
</script>

<style>
    button {
        margin: 25px;
    } 
</style>