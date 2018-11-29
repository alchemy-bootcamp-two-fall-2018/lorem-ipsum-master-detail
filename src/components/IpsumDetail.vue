<template>
    <section v-if="ipsum">
        <h4>{{ipsum.title}}'s Full Text: </h4>
        <p v-html="ipsum.body"></p>


    </section>
</template>

<script>
export default {
    props: {
        ipsum: Object
    }

}
</script>

<style>

</style>
