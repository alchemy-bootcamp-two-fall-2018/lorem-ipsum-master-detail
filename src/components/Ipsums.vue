<template>
  <div>
    
  <IpsumList
  :ipsums="data"
  :onSelect="handleSelect"
  />
  <AddIpsum :onAdd="handleAdd"/>
  <Ipsum :ipsum="selected" />
  </div>
</template>

<script>
import dataApi from '../../dataApi.js';
import IpsumList from './IpsumList';
import Ipsum from './Ipsum';
import AddIpsum from './AddIpsum';


export default {
    data() {
        return {
            data: dataApi.getIpsums(),
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
            this.data.push(ipsum);
            this.handleSelect(ipsum);
        }

    
    }

};    
  


</script>

<style>

</style>
