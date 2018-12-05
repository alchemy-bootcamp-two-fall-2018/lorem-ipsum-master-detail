<template>
  <section>
    <AddIpsum v-bind:onAdd="handleAdd"/>
    <IpsumList 
      v-bind:ipsums="ipsums"
      v-bind:onSelect="handleSelect"/>
  </section>
</template>

<script>
import ipsumsApi from '../services/ipsumsApi';
import IpsumList from './IpsumList.vue';
import AddIpsum from './AddIpsum.vue';

export default {
  data() {
    return {
      ipsums: ipsumsApi.getIpsums(),
      selected: null
    };
  },
  components: {
    IpsumList, 
    AddIpsum
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
