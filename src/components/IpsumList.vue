<template>
  <section v-if="ipsum">
    <h3>{{ipsum.title}}</h3>
    <div v-html="ipsum.body"></div>
  </section>  
</template>

<script>
export default {
  props: {
    ipsum: Object,
    onEdit: Function
  }
       
};
</script>

<style>
</style>
