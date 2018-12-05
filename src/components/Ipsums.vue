<template>
  <section>
    <IpsumList 
      v-bind:ipsums="ipsums"
      v-bind:onSelect="handleSelect"/>
  </section>
</template>

<script>
import ipsumsApi from '../services/ipsumsApi';
import IpsumList from './IpsumList.vue';

export default {
  data() {
    return {
      ipsums: ipsumsApi.getIpsums(),
      selected: null
    };
  },
  components: {
    IpsumList
  },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    },
  }  
};
</script>

<style>

</style>
