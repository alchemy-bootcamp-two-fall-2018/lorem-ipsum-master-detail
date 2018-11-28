<template>
    <ul>
        <p>{{ipsums}}</p>
        <!-- <ipsum v-for="ipsum in ipsums"
            :key="ipsum.title"
            :ipsum="ipsum" -->
        <!-- /> -->
    </ul>
   
</template>

<script>
import ipsums from '../data.js';

export default {
    data() {
        return {
            ipsums
        };
    }
};
</script>

<style>

</style>
