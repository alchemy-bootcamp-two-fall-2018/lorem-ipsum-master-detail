<template>
  <section v-if="ipsum">
    <div>
      <h3>{{ ipsum.title }}</h3>
      <p>Author: {{ ipsum.author }}</p>
      <p>Category: {{ ipsum.category }}</p>
    </div>

    <div v-html="ipsum.body"></div>
  </section>
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
