<template>
    <header>
        <ipsum/>
        <IpsumList
            v-bind:ipsums="ipsums"/>
    </header>

</template>

<script>
import IpsumList from './IpsumList.vue';
import ipsumsApi from '../assets/ipsumApi.js';
import ipsum from './Ipsum.vue';
export default {
    data() {
        return {
            ipsums: ipsumsApi.getData()
        };
    },
    
    components: {
        IpsumList,
        ipsum
    }
};
</script>

<style>

</style>
