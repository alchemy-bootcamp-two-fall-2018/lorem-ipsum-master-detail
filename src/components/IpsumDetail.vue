<template>
    <section v-if="ipsum">
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
