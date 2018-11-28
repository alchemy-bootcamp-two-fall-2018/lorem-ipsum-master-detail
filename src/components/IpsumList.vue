<template>
    <ul>
        <li v-bind:key="ipsum.author" v-for="ipsum in ipsums">
            <p>Author: {{ipsum.author}}</p>
            <p>Title: {{ipsum.title}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        ipsums: Array
    }
};
</script>

<style>

</style>
