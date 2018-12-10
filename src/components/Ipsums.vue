<template>
    <div>
        <IpsumList 
        :ipsumdata="ipsumdata"
        :onSelect="handleSelect"
        />
        <Ipsum
        :ipsum="selected"
        />

        <AddIpsum 
        :onAdd="handleAdd"/>
    </div> 
</template>

<script>
import Ipsum from './Ipsum.vue';
import IpsumList from './IpsumList.vue';
import AddIpsum from './AddIpsum.vue';
import ipsumApi from '../ipsumApi.js';

export default {
  data() {
    return {
      ipsumdata: ipsumApi.getAll(),
      selected: null
    };
  },
  components:{
    IpsumList,
    Ipsum,
    AddIpsum
  },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    },
    handleAdd(ipsum) {
      this.ipsumdata.push(ipsum);
      this.handleSelect(ipsum);
      this.show = false;
    } 
  }, 
      
};
</script>

<style>

</style>
