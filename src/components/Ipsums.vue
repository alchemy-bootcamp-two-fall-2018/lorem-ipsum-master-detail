<template>
   <ul>
        <Ipsum v-for="ipsum in ipsums"
            @click.native="onSelect(ipsum)"
            :key="ipsum.name"
            :ipsum="ipsum"
            />
    </ul>
   
   
   </template>

<script>
import Ipsum from './Ipsum.vue';

export default {
  props: {
    ipsums: Array,
    onSelect: Function
  },
  
  components: {
    Ipsum
  }
};
</script>

<style scoped>


</style>
    