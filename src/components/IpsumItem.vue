<template>
    <div class="cards">
        <p>{{ipsum.title}}</p>
        <p>Topic: {{ipsum.category}}</p>         
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
    .cards {
        border: 1px solid black;
        text-align: center;
        border-radius: 15px;
        background-color: yellow;
    }
</style>
