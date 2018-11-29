<template>
    <div id="ipsums-container">
        <h2>Ipsums</h2>
        <Ipsum
        :ipsum="selected"
        />
        <IpsumList
        :ipsums="ipsums"
        :onSelect="handleSelect"
        />
    </div>
</template>

<script>
import IpsumList from './IpsumList.vue';
import Ipsum from './Ipsum.vue';
import ipsumApi from '../../ipsumApi.js';
export default {
    data() {
        return {
            ipsums: ipsumApi.getAll(),
            selected: null
        };
    },
    components: {
        IpsumList,
        Ipsum
    },
    methods: {
        handleSelect(ipsum) {
            this.selected = ipsum;
        }
    }
}
</script>

<style>

</style>
