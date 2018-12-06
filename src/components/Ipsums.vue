<template>
   <IpsumList 
   :ipsums="ipsums" 
   :onSelect="handleSelect" 
   :ipsum="selected" />
   
   </template>

<script>
import ipsumApi from '../services/ipsumApi';
import IpsumList from './IpsumList';
import Ipsum from './Ipsum.vue';

export default {
  data() {
    return {
      ipsums: ipsumApi.getData(),
      selected: null,
    };
  },
  methods: {
    handleSelect(ipsum) {
      this.selected(ipsum);
      console.log(this.selected(ipsum));
    }
  },
  components: {
    IpsumList,
    Ipsum
  }
};
</script>

<style scoped>


</style>
    