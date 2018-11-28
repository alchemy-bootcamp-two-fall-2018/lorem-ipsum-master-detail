<template>
    <li>
        <strong>{{ipsum.title}}</strong>
        {{ipsum.category}}
    </li>
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
