<template>
    <div>
        {{ipsum.title}}
        {{ipsum.category}}
        {{ipsum.body}}
    </div>
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
