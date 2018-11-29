<template>
   <IpsumList 
   :ipsums="ipsums" />
   
   </template>

<script>
import ipsumApi from '../services/ipsumApi';
import IpsumList from './IpsumList';

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
    IpsumList
  }
};
</script>

<style scoped>


</style>
    