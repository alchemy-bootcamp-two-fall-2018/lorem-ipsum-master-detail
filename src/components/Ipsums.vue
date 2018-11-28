<template>
    <section>
        <IpsumList :ipsums="ipsums"
                    :onSelect="handleSelect"/>
        <IpsumDetail v-if="ipsum" :ipsum="ipsum" />
        <p v-else>Click on an author!</p>
    </section>
</template>

<script>

import ipsumApi from '../ipsumApi.js';
import IpsumList from './IpsumList.vue';
import IpsumDetail from './IpsumDetail.vue';

export default {
    data() {
        return {
            ipsums: ipsumApi.getAll(),
            ipsum: null
        };
    },
    components: {
        IpsumList,
        IpsumDetail
    },
    methods: {
        handleSelect(ipsum) {
            this.ipsum = ipsum;
            console.log(ipsum);
        }
    }
};
</script>

<style>

</style>
