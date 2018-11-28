<template>
    <ul>
        <h3>This is the ipsums component</h3>
    </ul>
</template>

<script>

import ipsumApi from '../ipsumApi.js';
import AddIpsum from './AddIpsum.vue';
import IpsumList from './IpsumList.vue';
import Ipsum from './Ipsum.vue';

export default {
    data() {
        return {
        ipsums: ipsumApi.getIpsums(),
        components: {
            AddIpsum,
            IpsumList,
            Ipsum
            }
        } 
    }
}
</script>

<style>

</style>
