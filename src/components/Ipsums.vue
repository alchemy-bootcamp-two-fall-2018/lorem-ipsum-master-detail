<template>
  <section>
    <AddIpsum v-bind:onAdd="handleAdd"/>
    <IpsumList 
      v-bind:ipsums="ipsums"
      v-bind:onSelect="handleSelect"/>
      <Ipsum v-bind:ipsum="selected"/>
  </section>
</template>

<script>
import ipsumsApi from '../services/ipsumsApi';
import IpsumList from './IpsumList.vue';
import AddIpsum from './AddIpsum.vue';
import Ipsum from './Ipsum.vue';

export default {
  data() {
    return {
      ipsums: ipsumsApi.getIpsums(),
      selected: null
    };
  },
  components: {
    IpsumList, 
    AddIpsum,
    Ipsum
  },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
      console.log('you selected an item');

    },
    handleAdd(ipsum) {
      this.ipsums.push(ipsum);
      this.handleSelect(ipsum);
    }
  }  
};
</script>

<style>

</style>