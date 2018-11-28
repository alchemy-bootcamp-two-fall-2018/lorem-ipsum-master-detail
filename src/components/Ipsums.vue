<template>
    <IpsumList :ipsumdata="ipsumdata"/>
</template>

<script>
// import Ipsum from './Ipsum.vue';
import IpsumList from './IpsumList.vue';
import ipsumApi from '../ipsumApi.js';

export default {
  data() {
    return {
      ipsumdata: ipsumApi.getAll(),
    };
  },
  
  components:{
    // Ipsum
    IpsumList
  }      
};
</script>

<style>

</style>
