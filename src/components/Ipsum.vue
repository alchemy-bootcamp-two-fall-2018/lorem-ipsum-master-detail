<template>
    <li>
        {{ipsum.title}}
        {{ipsum.category}}
        {{ipsum.body}}
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
