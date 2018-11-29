<template>
  <li>
    <div>
      <h3>{{ ipsum.title }}</h3>
      <p>author: {{ ipsum.author }}</p>
      <p>category: {{ ipsum.category }}</p>
    </div>  
  </li>  
</template>

<script>
export default {
    props: {
        ipsum: Object
    }
};
</script>

<style>

</style>
