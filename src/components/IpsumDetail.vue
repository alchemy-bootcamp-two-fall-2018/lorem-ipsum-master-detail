<template>
    <div>
        <p>Category: {{ipsum.category}}</p>
        <p>Published On: {{ipsum.publishedOn}}</p>
        <p>Author URL: {{ipsum.authorUrl}}</p>
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
