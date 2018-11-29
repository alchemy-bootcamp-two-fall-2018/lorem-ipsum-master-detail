
<template>
    <ul>
        <IpsumItem v-for="ipsum in ipsums"
        v-bind:key="ipsum.title"
        v-bind:ipsum="ipsum"/>
    </ul>
</template>

<script>
import IpsumItem from './IpsumItem.vue';

export default {
  data() {
    return {

    };   
  },
  components:{
    IpsumItem,    
        
        
  },

  props: {
    ipsums: Array
  }
};

</script>

<style>
</style>
