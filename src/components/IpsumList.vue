<template>
     <div v-if="ipsum">
       <h3>{{ipsum.title}</h3>
       
         
       </template>
       
<script>
export default {
  props: {
    ipsum:Object
  }
       
};
</script>
       
       <style>
       
       </style>
       
      </div>
</template>

<script>
import Ipsum from './Ipsum';
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

<style>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  }

</style>
