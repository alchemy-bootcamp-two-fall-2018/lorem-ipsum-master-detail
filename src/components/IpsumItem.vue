<template>
  <li>
    <p class="name tiles">{{ ipsum.title }}</p>
    <p class="tiles">Category: {{ ipsum.category }}</p>
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
  li {
    position: relative;
    border: 3px solid rgb(30, 76, 230);
    padding: 10px;
    margin-bottom: 10px;
  }
  .tiles {
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: blue;
  }
</style>