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
    li {
        display: flex;
        flex-direction: column;
        padding: 9px;
        text-align: center;
        background: steelblue;
        color: white;
        margin: 4px;
        border-radius: 4px;
        border: 2px navy solid;
    }
</style>
