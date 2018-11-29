<template>
    <ul>
        <Ipsum v-for="ipsum in ipsums"
        v-bind:key="ipsum.title"
        v-bind:ipsum="ipsum" />
    </ul>
   
  
</template>

<script>
import Ipsum from './Ipsum';

export default {
  

  props: {
    ipsums: Array
  },
  components: {
    Ipsum
  }
};
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  }

</style>
    