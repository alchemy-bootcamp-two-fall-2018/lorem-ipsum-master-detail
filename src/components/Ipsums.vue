<template>
    <section>
        <IpsumList :ipsums="ipsums"/>
    </section>
</template>

<script>

import ipsumApi from '../ipsumApi.js';
import IpsumList from './IpsumList.vue';

export default {
    data() {
        return {
            ipsums: ipsumApi.getAll()
        };
    },
    components: {
        IpsumList
    }
};
</script>

<style>

</style>
