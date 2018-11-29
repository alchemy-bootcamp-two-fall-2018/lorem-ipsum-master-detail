<template>
  <div>
    
  <IpsumList
  :ipsums="data"
  :onSelect="handleSelect"
  />
  <Ipsum :ipsum="selected" />
  </div>
</template>

<script>
import dataApi from '../../dataApi.js';
import IpsumList from './IpsumList.vue';
import Ipsum from './Ipsum.vue';


export default {
    data() {
        return {
            data: dataApi.getIpsums(),
            selected: null
        }; 
    },

    components: {
        IpsumList,
        Ipsum
    },
    methods: {
        handleSelect(ipsum) {
            this.selected = ipsum;
            console.log('handled', this.selected);
        } 
    
    }

};    
  


</script>

<style>

</style>
