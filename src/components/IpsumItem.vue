<template>
    <div>
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
    div {
         border: 1px solid black;
         text-align: center;
    }
</style>
