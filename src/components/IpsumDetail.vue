<template>
    <div class="info">
        <h4>{{ ipsum.author }}</h4>
        <p>{{ ipsum.authorUrl }}</p>
        <p>{{ ipsum.body }}</p>
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