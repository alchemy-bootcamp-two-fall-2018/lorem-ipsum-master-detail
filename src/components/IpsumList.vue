<template>
    <ul>
        <li v-bind:key="ipsum.author" v-for="ipsum in ipsums"></li>
    </ul>
</template>

<script>

import ipsumApi from '../ipsumApi.js';

export default {
    props: {
        ipsums: ipsumApi.getAll()
    }
};
</script>

<style>

</style>
