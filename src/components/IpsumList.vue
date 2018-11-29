<template>
    <li>
      <div class="list">
        <h3>{{ipsum.author}}</h3>
        <p>{{ipsum.category}}</p>
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
.list {
  border: 1px solid black;
}
</style>
