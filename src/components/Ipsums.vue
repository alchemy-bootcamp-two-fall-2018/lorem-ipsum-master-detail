<template>
    <header>
        <Ipsum
            v-bind:key="ipsums.title"
            v-bind:ipsum="selected"
        />
        <IpsumList
            v-bind:ipsums="ipsums"
            v-bind:onSelect="handleSelect"
            />
    </header>

</template>

<script>
import IpsumList from './IpsumList.vue';
import ipsumsApi from '../assets/ipsumApi.js';
import Ipsum from './Ipsum.vue';
export default {
    data() {
        return {
            ipsums: ipsumsApi.getData(),
            selected: null
        };
    },
    
    components: {
        IpsumList,
        Ipsum
    },
    methods: {
        handleSelect(ipsum) {
            this.selected = ipsum === this.selected ? null : ipsum;
            console.log('hi', ipsum);
        }
    }
};
</script>

<style>

</style>
