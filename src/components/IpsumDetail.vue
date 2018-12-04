<template>
    <section v-if="ipsum" class="detail"> 

        <div class="top">
            <h3> Ipsum Title {{ispum.title}} </h3>
            <p>Author: {{ipsum.author}} </p>
            <p>Category: {{ipsum.category}} </p>
            <p>body:</p>
        </div>
    
    <div class="body"><span>Filler Text Body Here,...</span>
    <div v-html="ipsum.body" class="words"></div>
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
