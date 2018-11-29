<template>
    <section v-if="ipsum">
            <h4>{{ipsum.title}}'s Full Text</h4>
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
    img {
        display: none;
    }
    h4 {
        text-align: center;
        font-size: 20px;
    }
</style>
