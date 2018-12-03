<template>
  <div>
    
  <IpsumList
  :ipsums="ipsum"
  :onSelect="handleSelect"
  />
  <AddIpsum :onAdd="handleAdd"/>
  <Ipsum :ipsum="selected" />
  </div>
</template>

<script>
import dataApi from '../../dataApi.js';
import IpsumList from './IpsumList.vue';
import Ipsum from './Ipsum.vue';
import AddIpsum from './AddIpsum';


export default {
    data() {
        return {
            ipsum: dataApi.getIpsums(),
            selected: null
        }; 
    },

    components: {
        IpsumList,
        Ipsum,
        AddIpsum
    },
    methods: {
        handleSelect(ipsum) {
            this.selected = ipsum;
            console.log('handled', this.selected);
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
