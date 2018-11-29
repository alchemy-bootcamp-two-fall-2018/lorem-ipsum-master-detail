<template>
    <ul>
      <IpsumList v-for="ipsum in ipsums"
        :key="ipsum.title"
        :ipsum="ipsum"/>
    {{IpsumList}}
    </ul>
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
