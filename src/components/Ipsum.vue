<template>
    <li>
        {{ipsum.title}}
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
li {
    border: 1px solid;
    display: grid;
    list-style-type: none;
    grid-template-columns: repeat (auto-fit, minmax,(150px, 1fr));
}

</style>
