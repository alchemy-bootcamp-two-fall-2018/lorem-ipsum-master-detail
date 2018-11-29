<template>
    <li>
      <h3>{{ ipsum.title }}</h3>
      <p>category: {{ ipsum.category }}</p>
      <p>author: {{ ipsum.author }}</p>
  </li>
</template>

<script>
export default {
    props: {
        ipsum: Object,
    }
};
</script>

<style>
li {
    list-style: none;
    overflow: hidden;
    width: 80vw;
}
img {
    display: none;
}

</style>
