<template>
  <li class="list">
    <p>{{ ipsum.title }}</p>
    <p>{{ ipsum.category }}</p>
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
.list {
  border: 1px solid black;
}
</style>
