<template>
    <div>
        Title: {{ipsum.title}}
        Category: {{ipsum.art}}
        Author: {{ipsum.author}}
        Published: {{ipsum.publishedOn}}
        <a v-bind:href="ipsum.authorUrl">Learn more about the author.</a>
        
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
