<template>
    <div>
      <IpsumList/>  
    </div>
</template>

<script>
import ipsumsApi from '../services/ipsumsApi';
import IpsumList from './IpsumList.vue';

export default {
  data() {
    return {
      ipsums: ipsumsApi.getIpsums(),
    };
  },
  components: {
    IpsumList
  }
};
</script>

<style>

</style>
