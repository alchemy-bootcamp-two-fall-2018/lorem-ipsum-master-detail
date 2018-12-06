<template>
  <div v-if="ipsum">
    <h3>{{ipsum.title}}</h3>
  </div>  
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
