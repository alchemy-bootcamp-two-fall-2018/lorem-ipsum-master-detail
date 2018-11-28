<template>
    <li>
      <h3>{{ipsum.title}}</h3>
      <p>{{ipsum.author}} | 
        <a v-bind:href="ipsum.authorUrl">website</a>
        | {{ipsum.category}}</p>
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
  list-style: none;
  text-align: center;
  border: 1px navy solid;
}
</style>
