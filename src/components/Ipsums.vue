<template>
    <div id="ipsums-container">
        <IpsumList
        :ipsums="ipsums"
        :onSelect="handleSelect"
        />
        <Ipsum
        :ipsum="selected"
        />
        <AddIpsum
        :onAdd="handleAdd"
        />
    </div>
</template>

<script>
import IpsumList from './IpsumList.vue';
import Ipsum from './Ipsum.vue';
import ipsumApi from '../../ipsumApi.js';
import AddIpsum from './AddIpsum.vue';
export default {
    data() {
        return {
            ipsums: ipsumApi.getAll(),
            selected: null
        };
    },
    components: {
        IpsumList,
        Ipsum,
        AddIpsum
    },
    methods: {
        handleSelect(ipsum) {
            this.selected = ipsum;
        },
        handleAdd(ipsum) {
            this.ipsums.push(ipsum);
            this.handleSelect(ipsum);
        }
    }
}
</script>

<style>

</style>
