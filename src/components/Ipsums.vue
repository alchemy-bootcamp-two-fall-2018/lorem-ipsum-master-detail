<template>
    <section>
        <IpsumList :ipsums="ipsums"
                    :onSelect="handleSelect"/>
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
    },
    methods: {
        handleSelect(ipsum) {
            console.log(ipsum);
        }
    }
};
</script>

<style>

</style>
