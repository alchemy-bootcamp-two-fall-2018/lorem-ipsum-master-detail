<template>
    <ul>
        <h3>This is the ipsums component</h3>
        <Ipsum v-for="ipsum in ipsums"
            v-bind:key="ipsum.title"
            :ipsum="ipsum"
        />
    </ul>
</template>

<script>

import ipsumApi from '../ipsumApi.js';
// import AddIpsum from './AddIpsum.vue';
// import IpsumList from './IpsumList.vue';
import Ipsum from './Ipsum.vue';

export default {
    data() {
        return {
        ipsums: ipsumApi.getIpsums(),
        }
    },
    components: {
        Ipsum
        
    } 
}
</script>

<style>

</style>
