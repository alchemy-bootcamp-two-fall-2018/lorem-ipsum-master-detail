<template>
    <div>
        <p>Title: {{ipsum.title}}</p>
        <p>Category: {{ipsum.art}}</p>
        <p>Author: {{ipsum.author}}</p>
        <p>Published: {{ipsum.publishedOn}}</p>
        <p><a v-bind:href="ipsum.authorUrl">Learn more about the author.</a></p>
        <p id="ipsum-body" v-html="ipsum.body"></p>
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
