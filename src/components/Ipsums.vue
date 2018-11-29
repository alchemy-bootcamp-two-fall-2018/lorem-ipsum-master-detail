<template>
    <header>
        <Ipsum
            v-bind:key="ipsums[0].title"
            v-bind:ipsum="ipsums[0]"
        />
        <IpsumList
            v-bind:ipsums="ipsums"/>
    </header>

</template>

<script>
import IpsumList from './IpsumList.vue';
import ipsumsApi from '../assets/ipsumApi.js';
import Ipsum from './Ipsum.vue';
export default {
    data() {
        return {
            ipsums: ipsumsApi.getData()
        };
    },
    
    components: {
        IpsumList,
        Ipsum
    }
};
</script>

<style>

</style>
