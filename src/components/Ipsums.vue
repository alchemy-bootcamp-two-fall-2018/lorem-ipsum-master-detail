<template>
  <IpsumList
    :data="ipsums" />
</template>

<script>
import IpsumList from './IpsumList.vue';
import ipsumApi from '../services/ipsumApi.js';

export default {
  data() {
    return {
      ipsums: ipsumApi.getAll(),
    };
  },

  components: {
    IpsumList
  }

};
</script>

<style>

</style>
