<template>
    <header>
        This is Ipsums
        <IpsumList
            v-bind:ipsums="ipsums"/>
    </header>
</template>

<script>
import IpsumList from './IpsumList.vue';
import ipsumsApi from '../assets/ipsumApi.js';
export default {
    data() {
        return {
            ipsums: ipsumsApi.getData()
        };
    },
    
    components: {
        IpsumList
    }
};
</script>

<style>

</style>
