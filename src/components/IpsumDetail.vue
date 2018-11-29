<template>
    <li>
        <p>Title:{{ipsum.title}}</p>
        <p>Category:{{ipsum.category}}</p>
        <p>Author:{{ipsum.author}}</p>
        <p>Published Date:{{ipsum.publishedOn}}</p>
        <p v-html="ipsum.body"></p>
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
img {
    width:100px;
    display:inline-block;
    }

</style>
