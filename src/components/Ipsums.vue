<template>
  <div>
    
  <IpsumList
  :ipsums="data"
  :onSelect="handleSelect"
  />
  <Ipsum />
  </div>
</template>

<script>
import dataApi from '../../dataApi.js';
import IpsumList from './IpsumList.vue';
import Ipsum from './Ipsum.vue';


export default {
    data() {
        return {
            data: dataApi.getIpsums()
        }; 
    },

    components: {
        IpsumList,
        Ipsum
    },
    methods: {
        handleSelect(ipsum) {
            console.log('ipsum', ipsum);
            console.log('handled', this.selected);
            this.selected = ipsum;
        } 
    
    }

};    
  


</script>

<style>

</style>
