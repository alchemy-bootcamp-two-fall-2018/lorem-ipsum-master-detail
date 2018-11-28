<template>
    <div>
        <p>Author: {{ipsum.author}}</p>
        <p>Category: {{ipsum.category}}</p>
        <p>Published On: {{ipsum.publishedOn}}</p>
        <p>Author URL: <a v-bind:href="ipsum.authorUrl">{{ipsum.authorUrl}}</a></p>
        <div v-html="ipsum.body"></div>
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
