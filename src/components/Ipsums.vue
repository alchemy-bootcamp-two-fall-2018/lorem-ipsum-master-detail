<template>
  <div>
    
  <IpsumList
  :ipsums="data"
  
  />
  </div>
</template>

<script>
import dataApi from '../../dataApi.js';
import IpsumList from './IpsumList.vue';

export default {
    data() {
        return {
            data: dataApi.getIpsums()
        }; 
    },

    components: {
        IpsumList
    } 
    
};
  


</script>

<style>

</style>
