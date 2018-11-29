<template>
    <li> 
      <ul>
        <h3>{{ ipsum.title }}</h3>
        <h4>{{ ipsum.author }}</h4>
        <h5>{{ ipsum.authorUrl }}</h5>
        <h6>{{ ipsum.body }}</h6>
      </ul>
    </li>
</template>

<script>
export default {
  props: {
    ipsum: Object
  },

};
</script>

<style>

</style>
