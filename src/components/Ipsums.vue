<template>
    <div>
        <IpsumList v-bind:ipsums="ipsums"
        v-bind:onSelect="handleSelect"/>
        <Ipsum v-bind:ipsum="selected"/>

    </div>

</template>

<script>
import ipsumsApi from '../ipsumsApi.js';
import IpsumList from './IpsumList.vue';
import Ipsum from './Ipsum.vue';

export default {
    data() {
        return {
            ipsums: ipsumsApi.getAll(),
            selected: null
    }
  },
    //passing down to child
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
