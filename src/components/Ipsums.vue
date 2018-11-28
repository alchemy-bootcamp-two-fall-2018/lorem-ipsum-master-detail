<template>
    <section>
        <AddIpsum :onAdd="handleAdd" />
        <IpsumList :ipsums="ipsums"
                    :onSelect="handleSelect"/>
        <Ipsum v-if="ipsum"
                :ipsum="ipsum"/>
        <p v-else>Click on an author!</p>
    </section>
</template>

<script>

import ipsumApi from '../ipsumApi.js';
import IpsumList from './IpsumList.vue';
import Ipsum from './Ipsum.vue';
import AddIpsum from './AddIpsum.vue';

export default {
    data() {
        return {
            ipsums: ipsumApi.getAll(),
            ipsum: null
        };
    },
    components: {
        AddIpsum,
        IpsumList,
        Ipsum
    },
    methods: {
        handleSelect(ipsum) {
            this.ipsum = ipsum;
        },
        handleAdd(newIpsum) {
            console.log(newIpsum);
        }
    }
};
</script>

<style>

</style>
