<template>
    <ul>
      <IpsumList v-for="ipsum in ipsums"
        :key="ipsum.title"
        :ipsum="ipsum"/>
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
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>
