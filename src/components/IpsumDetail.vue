<template>
    <div>
        <h3> {{ ipsum.title }} - {{ ipsum.category }} category </h3>
        <h3> Author: {{ ipsum.author }} - published on {{ ipsum.publishedOn }}</h3>
        <h3> Example copy: </h3>
        <h3 v-html="ipsum.body"></h3>
    </div>
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