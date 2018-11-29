<template>
    <section> 
        <div v-if="ipsum">
            <h3> Ipsum Title {{ispum.name}} </h3>
            <p>Author: {{ipsum.author}} </p>
            <p>Category: {{ipsum.category}} </p>
            <p>body:</p>
        </div>
    <div v-html="ipsum.body"></div>
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
