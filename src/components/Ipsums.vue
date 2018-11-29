<template>
    <section>
        <AddIpsum :onAdd="handleAdd" />
        <IpsumList :ipsums="ipsums"
                    :onSelect="handleSelect"/>
        <Ipsum v-if="ipsum"
                :ipsum="ipsum"
                :onUpdate="handleUpdate"/>
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
            this.edit = false;
        },
        handleAdd(newIpsum) {
            this.ipsums.push(newIpsum);
            this.ipsum = newIpsum;
        },
        handleUpdate(updateIpsum) {
            let index = this.ipsums.indexOf(this.ipsum);
            this.ipsums.splice(index, 1, updateIpsum);
            this.ipsum = updateIpsum;
        }
    }
};
</script>

<style>

</style>
