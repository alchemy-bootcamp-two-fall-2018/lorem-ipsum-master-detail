<template>
    <section>
        <h3>{{ipsum.title}}</h3>
        <h4>{{ipsum.author}}</h4>
        <h4>{{ipsum.publishedOn}}</h4>
        <h4 v-html="ipsum.body"></h4>
    </section>
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
